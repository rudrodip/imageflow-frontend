"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const LandingHeader = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 lg:mt-16 min-h-screen">
      <div className="flex flex-col text-center items-center justify-center">
        <div>
          <div className="underline_animation">
            try {` ${siteConfig.name} `} for free
          </div>
          <span role="img" aria-label="Wave" className="animate-bounce mx-2">
            🤩
          </span>
        </div>
        <h1 className="head_text">
          ImageFlow
          <div>
            <p className="inline-block">Images to Life Stories</p>
          </div>
        </h1>
        <p className="text-center text-lg my-4 max-w-3xl">
          {siteConfig.description}
        </p>
      </div>
      <div className="text-2xl">
        <div className="flex justify-center space-x-4 align-middle flex-wrap my-3">
          <Button variant="outline">
            <Link href="/#signup">Get Started</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-5 my-10 w-full">
        <Card className="w-full lg:w-2/3 flex justify-center bg-transparent border-none">
          <video src="/videos/hero-video.mp4" autoPlay muted loop className="h-96" />
        </Card>
        <Card className="w-full lg:w-1/3 flex justify-center bg-transparent border-none">
          <video src="/videos/out.mp4" autoPlay muted loop className="h-96" />
        </Card>
      </div>
    </div>
  );
};
