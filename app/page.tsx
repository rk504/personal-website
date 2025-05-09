import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { PhotoCarousel } from "@/components/photo-carousel";
import { SocialLinks } from "@/components/social-links";
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col">
        <div className="container flex-grow flex flex-col py-12 md:py-24 space-y-12">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/images/hero/profile.jpg"
              alt="Reese, el Bilbaíno"
              fill
              className="object-cover object-center rounded-lg"
            />
            <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              <Button
                variant="outline"
                className="bg-white/80 backdrop-blur-sm border-white text-black hover:bg-white hover:text-black transition-colors"
                asChild
              >
                <Link href="/personal/projects">PERSONAL</Link>
              </Button>
              <Button
                variant="outline"
                className="bg-white/80 backdrop-blur-sm border-white text-black hover:bg-white hover:text-black transition-colors"
                asChild
              >
                <Link href="/professional">PROFESSIONAL</Link>
              </Button>
            </div>
          </div>

          <div id="about" className="space-y-4 max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-serif">Hello and Welcome</h1>
            <p className="text-lg text-muted-foreground">
              I'm Reese Koppel, a developer passionate about connecting our 
              world.<br />I enjoy crafting elegant solutions, optimizing
              efficiency, and playing bridge.<br />Welcome to my site.
            </p>
          </div>
        </div>

        <PhotoCarousel />

        <SocialLinks />
      </main>
    </>
  );
}
