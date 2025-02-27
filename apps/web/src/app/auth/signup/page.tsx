"use client";

import { Signup } from "@/components/canvas/signup/Signup";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Signup />
      </Suspense>
    </main>
  );
}
