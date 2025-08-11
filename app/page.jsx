
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";


 
export default function Home() {
  return ( 
  <div> 
    <div className="grid-background"></div>
    <HeroSection/>

    <section className = "w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className= "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6x1 mx-auto">

        </div>
        </div>
        </section>

            
  </div>
  );

}