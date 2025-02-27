import React from 'react';
import { SignedIn, SignInButton, SignedOut, UserButton } from '@clerk/nextjs';
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, StarsIcon, ChevronDown, FileText,PenBox, Briefcase} from 'lucide-react';
import { Button } from './ui/button';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu';



const Header = () => {
    return (
      <header className= "fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60"> 
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between"> 
            <Link href='/'>  {/* helps in navigating to diff pages */}
                <Image 
                src='/mlogo.png'
                alt="maxim logo"
                width={200}
                height={60}
                className="h-20 py-1 w-auto object-contain"
                />
            </Link>

            <div className= " flex items-center space x-2 md:space-x-4"> 
                <SignedIn>
                    <Link href="/dashboard">  
                    <Button variant="outline">
                        <LayoutDashboard className='h-4 w-4'/>
                        <span className="hidden md:block">Industrial Insights</span>
                        
                    </Button>
                    </Link>
                
                <DropdownMenu>
                  <DropdownMenuTrigger>
                  <Button>
                        <StarsIcon className='h-4 w-4'/>
                        <span className="hidden md:block">Growth Kit</span>
                        <ChevronDown className="h-4 w-4"/>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    
                    <DropdownMenuItem>
                      <Link href={"/resume"} className="flex items-center gap-2">

                         <FileText className="h-4 w-4"/>
                         <span>Resume Builder</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"/ai-cover-letter"} className="flex items-center gap-2">

                         <PenBox className="h-4 w-4"/>
                         <span>
                          CoverLetter
                         </span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"/interview"} className="flex items-center gap-2">

                         <Briefcase className="h-4 w-4"/>
                         <span>Interview Prep</span>
                      </Link>
                    </DropdownMenuItem>
                    
                  </DropdownMenuContent>
                </DropdownMenu>
                </SignedIn>
                <SignedOut>
                  <SignInButton>
                    <Button variant="outline"> Sign In</Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton 
                   appearance={{
                    elements:{
                      avatarBox: "w-10 h-10",
                      userButtonPopoverCard: "shadow-x1",
                      userPreviewMainIdentifier: "font-semibold",
                    },
                    
                   }}
                   afterSignOutUrl='/'
                   />
                </SignedIn>
            </div>
        </nav>
      
        

      </header>
    );
    
};

export default Header;