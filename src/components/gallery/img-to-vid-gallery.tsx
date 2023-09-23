"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const ImageToVideoGallery = () => {
  const opts = {
    height: "300",
    width: "450",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <section>
      <h1 className="head_text text-center my-3 lg:my-10">Gallery</h1>
      <div className="container mx-auto grid grid-cols-1 gap-3">
        {Array(4)
          .fill(null)
          .map((_, index) => {
            return (
              <Card key={index}>
                <div className="h-full flex gap-2 justify-evenly my-3 p-3 rounded-md items-center ">
                  <div className="flex-col gap-2">
                    <Image
                      src="/test.jpg"
                      alt="image"
                      objectFit="contain"
                      width={500}
                      height={500}
                      className="rounded-md"
                    />
                  </div>
                  <ArrowRight color="#16a34a" />
                  <video src='/videos/test.mp4' autoPlay loop muted width={500} className="rounded-md" />
                </div>
              </Card>
            );
          })}
      </div>
    </section>
  );
};
