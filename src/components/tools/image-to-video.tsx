"use client";

import { ImageUpload } from "./file-upload";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ImageToVideoCategories } from "./image-to-video/categories";
import { EmptyScreen } from "./image-to-video/empty-screen";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { imageToVideo } from "@/redux/slices/imageSlice";

export const ImageToVideoToolSection = () => {
  const dispatch = useAppDispatch();
  const { url, loading } = useAppSelector((state) => state.imageSlice);
  const handleGenerate = () => {
    dispatch(imageToVideo({ imageUrl: url || '' }));
  };
  return (
    <div>
      <h1 className="head_text text-center my-10">Convert Image to Video</h1>
      <div className="flex flex-col lg:flex-row justify-center gap-5 my-10 w-full">
        <Card className="w-full lg:w-1/2 p-5 border-none">
          <ImageUpload />
          <div className="flex my-10 gap-5 items-center">
            <Label htmlFor="seed">Seed</Label>
            <Slider
              className="flex-1"
              id="seed"
              defaultValue={[50]}
              max={100}
              step={1}
            />
            <Button onClick={handleGenerate} disabled={loading || !url}>
              Generate
            </Button>
          </div>
          <ImageToVideoCategories />
        </Card>
        <Card className="w-full lg:w-1/2 p-3 lg:p-5 flex justify-center border-none">
          <EmptyScreen />
        </Card>
      </div>
    </div>
  );
};
