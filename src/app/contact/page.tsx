import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <div className="content">
      <NavBar />
      <div className="content-body">
        <ContactForm />
      </div>
    </div>
  );
}
