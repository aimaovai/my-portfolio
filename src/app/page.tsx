'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LandingPage from '@/components/LandingPage/LandingPage';

const VISITED_KEY = 'aima_portfolio_visited_v1';

export default function Page() {
  const router = useRouter();
  const [shouldShowLandingPage, setShouldShowLandingPage] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const visited = localStorage.getItem(VISITED_KEY);
      if (visited === 'true') {
        router.replace('/home'); // skip LandingPage
      } else {
        setShouldShowLandingPage(true); // show LandingPage
      }
    } catch {
      // If storage is blocked, default to showing LandingPage
      setShouldShowLandingPage(true);
    }
  }, [router]);

  // While deciding, render nothing (prevents flicker)
  if (shouldShowLandingPage === null) return null;

  return (
    <LandingPage
      onEnter={() => {
        try {
          localStorage.setItem(VISITED_KEY, 'true');
        } catch {}
        router.push('/home');
      }}
    />
  );
}
