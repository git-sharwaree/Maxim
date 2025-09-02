// routes that are _folder are ignored only (folder) are considered in next 
//import React from "react";
import { industries } from '@/data/industries';
import { getUserOnboardingStatus } from '@/actions/user';

//async bcoz it is a server component
const OnboardingPage = async () => {

    // check if user is onboarded or not using api call to the server
    const {isOnboarded} = await getUserOnboardingStatus()
    
    if(isOnboarded){
        redirect("/dashboard");
    }
    return (
    <main>
        <OnboardingForm industries={industries}/>
    </main>)
};

export default OnboardingPage;