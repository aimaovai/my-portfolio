"use client";

import { useRouter } from "next/navigation";
import LandingPage from "@/components/LandingPage/LandingPage";

const VISITED_KEY = "aima_portfolio_visited_v1";

export default function IntroPage() {
  const router = useRouter();

  return (
    <LandingPage
      onEnter={() => {
        try {
          localStorage.setItem(VISITED_KEY, "true");
        } catch {}
        router.push("/home");
      }}
    />
  );
}
