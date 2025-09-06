// routes that are _folder are ignored only (folder) are considered in next 
//import React from "react";
import { redirect } from 'next/navigation';
import { industries } from '@/data/industries';
import { getUserOnboardingStatus } from '@/actions/user';
import { industries } from '@/data/industries';

//async bcoz it is a server component
export default async function OnboardingPage() {

    // check if user is onboarded or not using api call to the server
    const {isOnboarded} = await getUserOnboardingStatus();
    
    if(isOnboarded){
        redirect("/dashboard");
    }
    return (
    <main>
        <OnboardingForm industries={industries}/>
    </main>)
};

