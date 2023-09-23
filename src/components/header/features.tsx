"use client";

import { featureConfig } from "@/config/feature";
import Tilt from "react-parallax-tilt";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Features = () => {
  return (
    <section id="features" className="w-[85w]">
      <h1 className="head_text text-center my-3 lg:my-10">Features</h1>
      <div className="container p-6 mx-auto grid grid-cols-1 lg:grid-cols-4 grid- gap-2">
        {featureConfig.features.map((feature, index) => {
          return (
            <Tilt
              key={index}
              className="cursor-pointer rounded-lg"
              glareEnable
              glareColor="#26de6c"
              glareReverse
              glareMaxOpacity={0.2}
              glareBorderRadius="5"
              glarePosition="all"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{feature.name}</CardTitle>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <Image
                      src={feature.imageUrl}
                      alt="image"
                      objectFit="contain"
                      width={500}
                      height={500}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>{feature.buttonText}</Button>
                </CardFooter>
              </Card>
            </Tilt>
          );
        })}
      </div>
    </section>
  );
};
