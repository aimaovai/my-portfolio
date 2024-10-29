import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import MyResume from "@/components/MyResume/MyResume";

export default function Resume() {
  return (
    <div className="content">
      <NavBar />
      <div className="content-body">
        <MyResume />
      </div>
    </div>
  );
}
