// schema using zod
import {z} from "zod";

export const onboardingSchema = z.object({
    industry: z.string({
        required_error: "Please select an industry",
    }),
    subIndustry: z.string({
        required_error: "please select specialization",
    }),
    bio: z.string().max(500).optional(),
    experience: z
       .string()
       .transform((val) => parseInt(val,10))
       .pipe(
        z 
           .number()
           .min(0, "Experience must be at least 0 years")
           .max(50, "Experience cannot be more than 50 years")
       ),
       skills: z.string().transform((val) => // array of strings
        val
          ? val
              .split(",")
              .map((skill) => skill.trim())
              .filter(Boolean)
          : undefined
    ),
    

});
    
