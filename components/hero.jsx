"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { BanknoteArrowDown } from "lucide-react";
import { useRef} from "react";

const HeroSection = () => {
  const imageRef = useRef(null); // this is a hook to ref the image ele

  useEffect(() => {
      const imageElement = imageRef.current;

      const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold){
        imageElement.classList.add("scrolled");

      } else {
        imageElement.classList.remove("scrolled");
      }
  };
   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  



    return(
        <section className="w-full pt-36 md:pt-48 pb-10"> 
           <div className="space-y-6 text-center"> 
              <div className="space-y-6 mx-auto">
                {/* here text 5xl is for small , md is medium, lg is large and xl is extra large */}
                <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl 
                 gradient-title">
                  Your AI-Career Coach for 
                  <br/>
                   Profressional Success
                 
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-x1">
                    Advance your career with Personalized guidance, Interview prep, and 
                    AI-powered tools
                </p> 
              </div>

              <div className="flex justify-center space-x-4">
                <Link href="/dashboard">
                    <Button size="lg" className="px-8"> Get Started </Button>

                </Link>
                <Link href="https://www.youtube.com/roadsidecoder">
                    <Button size="lg" className="px-8" variant="outline"> Get Started </Button>
                    
                </Link>
              </div>
              <div className="hero-image-wrapper mt-5 md:mt-0 max-w-6x1 max-auto px-4">
                <div ref={imageRef} className="hero-image">
                    <Image 
                      src={"/banner.png"}
                      width={1280}
                      height={500}
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