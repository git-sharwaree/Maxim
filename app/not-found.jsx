import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return ( 
        <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
            <h1 className="text-6x1 font-bold gradient-title mb-4">404</h1>
            <h2 className="text-2x1 font-semibold mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
                The Page you&apos;re looking for doesn&apos;t exist!
            </p>
            <Link href="/"> //
               <Button>Return to HOME</Button>
            </Link>
            </div>
    );


}