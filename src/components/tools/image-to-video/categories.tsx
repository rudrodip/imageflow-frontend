import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export const ImageToVideoCategories = () => {
  return (
    <Tabs defaultValue="default" className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="default">Default</TabsTrigger>
        <TabsTrigger value="copy-pose">Copy Pose</TabsTrigger>
      </TabsList>
      <TabsContent value="default">
        <Card>
          <CardContent className="p-4">
            <h1 className="desc">Style</h1>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
              {Array(5)
                .fill(null)
                .map((_, index) => {
                  return (
                    <div key={index} className="p-3">
                      <Image
                        src="/images/image.png"
                        alt="category"
                        width={80}
                        height={80}
                        className="rounded-sm cursor-pointer"
                      />
                      <p className="text-sm my-1">Category {index + 1}</p>
                    </div>
                  );
                })}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="copy-pose">
        <Card>
          <CardContent className="space-y-2">
            <h1 className="desc">Style</h1>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
              {Array(5)
                .fill(null)
                .map((_, index) => {
                  return (
                    <div key={index} className="p-3">
                      <Image
                        src="/images/image.png"
                        alt="category"
                        width={80}
                        height={80}
                        className="rounded-sm cursor-pointer"
                      />
                      <p className="text-sm my-1">Category {index + 1}</p>
                    </div>
                  );
                })}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
