"use server";
import { auth } from "@clerk/nextjs/dist/types/server";
import { db } from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai"; // in terminal run npm i @google/generative-ai


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY )

// model object 
const model = genAI.getGenerativeModel({

    model: "gemini-1.5-flash", 
});


export const generateAIInsights = async (industry) => {
    const prompt = `
            Analyze the current state of the ${industry} industry and provide insights
            in ONLY the following JSON format without any additional notes or 
            explanations:
            {
               "salaryRanges": [
                   { "role": "string", "min": number, "max": number, "median": number,
                    "location":"string" }
                    ],
                    "growthRate": number,
                    "demandLevel": "HIGH" | "MEDIUM" | "LOW",
                    "topskills": ["skill1", "skill2" ],
                    "marketOutlook": "POSITIVE" | "NEUTRAL" | "NEGATIVE",
                    "keyTrends" : ["trend1", "trend2" ],
                    "recommendedSkills": ["skill1", "skill2" ]
                    }
                    
                    IMPORTANT: Return ONLY the JSON. No Additional text, notes, or markdown
                    formatting. 
                    Include at least 5 common roles for salary ranges.
                    Growth rate should be a percentage. 
                    Include atleast 5 skills and trends,
                    `;

            const result = await model.generateContent(prompt)
            const response = result.response;

            // fetch the text from the response body in json
            const text = response.text();

            const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
            return JSON.parse(cleanedText);

        };




export async function getIndustryInsights(){
    const {userId} = await auth();
    if(!userId) throw new Error("Unauthorized"); // check if user is logged in or not

    const user = await db.user.findUnique({
        where:{
            clerkUserId: userId,

        },
        include: {
            industryInsight: true,
        },
    });

    if(!user) throw new Error("user not found"); // chck if user in db 


    if (!user.industryInsight){
        const insights = await generateAIInsights(user.industry);

        const industryInsight = await db.industryInsight.create({
            data:{
                industry: user.industry,
                ...insights, // return it 
                nextUpdate: new Date(Date.now()+ 7*24*60*1000) // after one week next update 
            }
        })
        
        return industryInsight;


    }
    return user.industryInsight;
    

     
}