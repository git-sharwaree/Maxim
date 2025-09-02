"use server";
import { auth } from "@clerk/nextjs/dist/types/server";
import { db } from "@/lib/prisma";
// this ensures that it runs on our server components 



export async function updateUser(data){
    const { userId}= await auth();
    if(!userId) throw new Error("Unauthorized");// again check if user is logged in or not 

    //check if user is in our db 
    const user = await db.user.findUnique({
        where:{
            clerkUserId: userId
        }
    })


    if (!user) throw new Error ("user not found");

    // connection with db 
    try {

        const result = await db.$transaction(
            //callback 
            async(tx) =>{
                let industryInsights = await tx.industryInsight.findUnique({
                    where:{
                        industry: data.industry
                    }
                }) // overlapping value, check if industry alr exists
                

                // if the industry doesnt exist create with default vals
                if(!industryInsights){
                    industryInsights = await tx.industryInsight.create({
                        data:{
                            industry: data.industry,
                            salaryRanges: [], // Default empty arr
                            growthRate: 0,
                            demandLevel: "Medium",
                            topSkills: [],
                            marketOutlook: "Neutral",
                            keyTrends: [],
                            recommendedSkils: [],
                            nextUpdate: new Date(Date.now()+ 7*24*60*60*1000),
                        }
                    });
                }

                // update the user
                const updateUser = await tx.user.update({
                    where:{
                        id: user.id,
                    },
                    data: {
                        industry: data.industry,
                        experience: data.experience,
                        bio: data.bio,
                        skills: data.skills
                    }
                })
                return { updatedUser, industryInsight};
            },
            {
                timeout:10000, //default is 5 secsf
            }
            
            

        ); return result.user;
    }catch (error){
        console.error("Error updating user and industry:",error.message);
        throw new Error("Sorry! couldn't update user profile");
    }

}

export async function getUserOnboardingStatus(){
    const{userId}= await auth();
    if(!userId) throw new Error("Unauthorized");// see if user is logged in 
    
    const user = await db.user.findUnique({
        where:{
            clerUserId: userId,
        }
    }) // check if user in db

    if(!user) throw new Error("User not found")

    try{
        const user = await db.user.findUnique({
            where:{
                clerkUserId: userId,
            },
            select:{
                industry: true,
            }
        });

        return {
            isOnboarded: !!user?.industry,
        };

    }catch (error){
        console.log ("error checking onboarding status",error.message);
        throw new Error("Failed to check onboarding status");
    }

}