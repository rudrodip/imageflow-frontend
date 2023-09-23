import { Separator } from "@/components/ui/separator"
import { LandingHeader } from "@/components/header/landing-header"
import { ImageToVideoToolSection } from "@/components/tools/image-to-video"
import { Features } from "@/components/header/features"
import { ImageToVideoGallery } from "@/components/gallery/img-to-vid-gallery"
import { SignInForBeta } from "@/components/auth/sign-for-beta"

export default function HomePage(){
  return (
    <main className="w-[85vw]">
      <LandingHeader />
      <ImageToVideoToolSection />
      <Separator className="my-5" />
      <Features />
      <Separator className="my-5" />
      <ImageToVideoGallery />
      <SignInForBeta />
    </main>
  )
}