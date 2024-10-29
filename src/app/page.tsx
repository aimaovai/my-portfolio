"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="landing-page">
      {/* <div className="domain_welcome"> */}
      <text className="domain_welcome">Welcome to Aima&apos;s Domain</text>
      <div className="enter_button">
        <Button
          color="default"
          onClick={() => router.push("/home")}
          className="enter_button"
          // style={{ fontSize: "x-large", height: "50px" }}
        >
          Click to enter
        </Button>
      </div>
      {/* </div> */}
    </div>
  );
}