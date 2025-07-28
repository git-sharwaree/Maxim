
import { inngest } from "@/lib/inngest/client"; // the mistake u know what i did that didnt connect the functions to inngest was that i wrote @lib/ instead of @/lib/.. this took me 2 n half hours wtf man
import { helloWorld } from "@/lib/inngest/functions";
import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    helloWorld
    
  ],
});
// This will be the entry point for all Inngest functions in your app.