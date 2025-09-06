import {currentUser} from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async ()=> {
    const user = await currentUser(); // check if user is logged in or not
 
    if (!user){
        return null;
    }

    try {
      const loggedInUser = await db.user.findUnique({ // we are checking if the user is alr stored in our db or not, and if there then we store in the loggedInUser
      where:{
        clerkUserId: user.id,
      },
    });

    if (loggedInUser){
        return loggedInUser; // if user is stored in our db then
    } 
    

    // if user is not stored inside our db then 
    const name = `$(user.firstName) $(user.lastName)`;
    
    const newUser = await db.user.create({
        data: {
            clerkUserId : user.id,
            name, 
            imageUrl : user.imageUrl,
            email: user.emailAddresses[0].emailAddress, // take the 1st email add

        },

    });

    return newUser;

    } catch (error) {
        console.log(error.message);
    }

}
