import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { BanknoteArrowDown } from "lucide-react";

const HeroSection = () => {
    return(
        <section className="width-full pt-36 md:pt-48 pb-10"> 
           <div> 
              <div>
                <h1>
                  Your AI-Career Coach for
                  <br/>
                   Profressional Success
                 
                </h1>
                <p>
                    Advance your career with Personalized guidance, Interview prep, and 
                    AI-powered tools
                </p> 
              </div>

              <div>
                <Link href="/dashboard">
                    <Button size="lg" className="px-8"> Get Started </Button>

                </Link>
                <Link href="https://www.youtube.com/roadsidecoder">
                    <Button size="lg" className="px-8" variant="outline"> Get Started </Button>
                    
                </Link>
              </div>
              <div>
                <div>
                    <Image 
                      src={"/banner.png"}
                      width={1280}
                      height={720}
                      alt="dashboard preview"
                      className="rounded-lg shadow-2x1 border-mx-auto"
                      priority
                    />
                </div>
              </div>
           </div>
        </section>
        
    )
}
export default HeroSection;