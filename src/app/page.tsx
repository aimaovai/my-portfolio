'use client'

import { useRouter } from "next/navigation";

export default function LandingPage() {
 

    const router = useRouter();
 
  return (
    <div className="background">
     <div className="domain-welcome">
          <text>Welcome to Aima&apos;s Domain</text>
          <div>
            <button className="enter-button" onClick={() => router.push("/home")}>Click to enter</button>
          </div>
        </div>
    </div>
  );
}
