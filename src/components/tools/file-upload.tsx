"use client";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  setUploadedImage,
  clearUploadedImage,
} from "@/redux/slices/imageSlice";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const ImageUpload: React.FC = () => {
  const [dragging, setDragging] = useState(false);
  const { url } = useAppSelector((state) => state.imageSlice);
  const dispatch = useAppDispatch();

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);

    const files = Array.from(e.dataTransfer.files);

    // Filter and store only video files (you can customize the accepted file types)
    const thumbnailImage = files.filter((file) =>
      file.type.startsWith("image/")
    );

    // Allow only the first video file if multiple files are dropped
    if (thumbnailImage.length > 0) {
      dispatch(setUploadedImage(thumbnailImage[0]));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      // Filter and store only the first video file if multiple files are selected
      const thumbnailImage = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );

      if (thumbnailImage.length > 0) {
        dispatch(setUploadedImage(thumbnailImage[0]));
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  return (
    <div className="p-1 border-2 rounded-lg h-96 flex flex-col justify-between items-center">
      <div
        className={`w-full rounded-md flex flex-col justify-center items-center font-heading text-lg lg:text-2xl h-full border-2 border-dashed ${
          dragging ? "border-primary" : "border-none"
        }`}
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {!url ? (
          <div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="cursor-pointer block text-center p-5 rounded-md bg-accent"
            >
              Drag and drop image here or click to select
            </label>
          </div>
        ) : (
          // <div>
            <div className="relative flex w-full h-full my-5">
              <Image
                fill
                src={url}
                alt="image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="contain"
              />
            </div>
          // </div>
        )}
      </div>
      {url && (
        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch(clearUploadedImage());
          }}
          className="inline-block my-2"
        >
          Remove Image
        </Button>
      )}
    </div>
  );
};
