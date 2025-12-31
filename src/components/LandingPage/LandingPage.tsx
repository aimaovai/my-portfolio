"use client";
import { Button } from "@nextui-org/button";
import { BsArrowRight } from "react-icons/bs";
import LastUpdated from "@/components/LastUpdated/LastUpdated";

type Props = {
  onEnter: () => void;
};
export default function LandingPage({ onEnter }: Props) {
  return (
    <div className="landing-page">
      {/* <div className="domain_welcome"> */}
      <p className="domain_welcome">Designing systems that move forward.</p>
      <p className="domain_subtitle">
        Explore my world of software engineering, tech insights, and more.
      </p>
      <p className="domain_subtitle">Where software meets intention.</p>
      <div className="enter_button">
        <Button
          color="default"
          onClick={onEnter}
          className="enter_button"
          // style={{ fontSize: "x-large", height: "50px" }}
        >
          Enter <BsArrowRight size={24} style={{ marginLeft: "8px" }} />
        </Button>
      </div>
      <p className="domain_subline">
        Software Engineer · Builder · Problem Solver
      </p>
      <p className="domain_subline" style={{ fontStyle: "normal"}}>- Aima Ovai</p>
      <LastUpdated year={2025} position="right" />
      {/* </div> */}
    </div>
  );
}