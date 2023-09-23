"use client";

import { Card } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";

export const EmptyScreen = () => {
  const dispatch = useAppDispatch();
  const { videoUrl, loading, error } = useAppSelector(
    (state) => state.imageSlice
  );
  return (
    <section className="flex items-center">
      <Card className="border-none">
        {loading ? (
          <div className="loader"></div>
        ) : error ? (
          <div>Error</div>
        ) : videoUrl ? (
          <div>
            <video 
              src={videoUrl}
              controls
            />
            <div className="flex gap-4 my-3 justify-evenly">
              <Button onClick={() => console.log('nothing')}>Upscale</Button>
              <Button asChild>
                <a href={videoUrl} download>
                  Download
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <div className="m-5 container mx-auto">
            <h1 className="font-heading text-4xl">Give life to images</h1>
            <h1 className="desc">Steps:</h1>
            <ol className="list-disc desc">
              <li>Drap and drop or select image</li>
              <li>Check options if you want</li>
              <li>Click `Generate` button</li>
              <li>Wait for the magic 🪄</li>
            </ol>
          </div>
        )}
      </Card>
    </section>
  );
};
