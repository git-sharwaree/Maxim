"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { onboardingSchema } from "@/app/lib/schema";
import { useRouter } from "next/router";
import { Card,CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent,SelectValue,SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const OnboardingForm = ({ industries }) => {

    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors }, // is used to handle if user doesnt select any industry
        setValue,
        watch
    } = useForm({
        resolver: zodResolver(onboardingSchema),
    });

    const watchIndustry = watch("industry");
    const onSubmit = async (values )=> {};

    
    // wrap the onboarding form into a card from shadcn ui
    return (
    <div className="flex items-center justify-center bg-background">
        <Card className="w-full max-w-lg mt-10 mx-2">
            <CardHeader>
                <CardTitle className='gradient-title text-4xl'>Proceed to Complete your profile</CardTitle>
                    <CardDescription>
                        Select your industry to get personalized career insights and recommendations
                    </CardDescription>
            </CardHeader>
            <CardContent> 
                <form className="space-y-6" onSubmit={handleSubmit()}>
                    <div className="space-y-2"> 
                    <Label htmlFor="industry">Industry</Label> 
                    <Select 
                        onValueChange={(value) =>{
                            setValue("industry",value);
                            setSelectedIndustry(
                                industries.find((ind)=> ind.id === value)
                            );
                            setValue("subIndustry","");
                        }}
                    >
                        <SelectTrigger id="industry">
                            <SelectValue placeholder="select an industry"/>
                        </SelectTrigger>
                        <SelectContent>
                            {industries.map((ind)=>{
                                return (
                                    <SelectItem value={ind.id} key={ind.id}>
                                        {ind.name}
                                    </SelectItem>
                                );
                            })}

                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        
                        </SelectContent>
                    </Select>
                    {errors.industry &&(
                        <p className="text-sm text-red-500">
                            {errors.industry.message}
                        </p>
                    )} 
                    </div>

                    {watchIndustry && (
                    <div className="space-y-2">
                    <Label htmlFor="subIndustry">Specialization</Label> 
                    <Select 
                        onValueChange={(value) =>{
                            setValue("subIndustry",value);
                            setSelectedIndustry(
                                industries.find((ind)=> ind.id === value)
                            );
                            setValue("subIndustry","");
                        }}
                    >
                        <SelectTrigger id="subIndustry">
                            <SelectValue placeholder="select an industry"/>
                        </SelectTrigger>
                        <SelectContent>
                            {selectedIndustry?.subIndustries.map((ind)=>{
                                return (
                                    <SelectItem value={ind} key={ind}>
                                        {ind}
                                    </SelectItem>
                                );
                            })}

                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        
                        </SelectContent>
                    </Select>
                    {errors.subIndustry &&(
                        <p className="text-sm text-red-500">
                            {errors.subIndustry.message}
                        </p>
                    )} 
                    </div> )}

                    <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Input 
                          id="experience"
                          type="number"
                          min="0"
                          max="50"
                          placeholder="Enter years of experience"
                          {...register("experience")}
                        />


                        {errors.experience && (
                            <p className="text-sm text-red-500">
                                {errors.experience.message}
                            </p>
                        )}


                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="skills">Skills</Label>
                        <Input 
                          id="skills"
                          placeholder="e.g., Python, Javascript, Project Management"
                          {...register("skills")}
                        />


                        {errors.skills && (
                            <p className="text-sm text-red-500">
                                {errors.skills.message}
                            </p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bio">Professional Bio</Label>
                        <Textarea
                        
                          id="bio"
                          placeholder="Tell us about your professional background"
                          className="h-32"
                          {...register("skills")}
                        />


                        {errors.bio && (
                            <p className="text-sm text-red-500">
                                {errors.skills.message}
                            </p>
                        )}
                    </div>
                </form>
            </CardContent>
        </Card>

     

    </div>
    );
};

export default OnboardingForm;