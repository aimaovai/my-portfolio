'use client'

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";

export default function LandingPage() {
 

    const router = useRouter();
 
  return (
    <div className="background2">
     <div className="domain_welcome">
          <text>Welcome to Aima&apos;s Domain</text>
          <div className="enter_button">
            <Button color="default" onClick={() => router.push("/home")} style={{ fontSize: "x-large", height: "50px"}}>Click to enter</Button>
          </div>
        </div>
    </div>
  );
}
