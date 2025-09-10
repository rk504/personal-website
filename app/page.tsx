import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { PhotoCarousel } from "@/components/photo-carousel";
import { SocialLinks } from "@/components/social-links";
import { WebringWidget } from "@/components/webring-widget";
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  return (
    <>
      <Script
        data-goatcounter="https://reekopp.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></Script>
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
            <h1 className="text-4xl font-serif">Greetings</h1>
            <p className="text-lg text-muted-foreground">
            I'm Reese. I build <Link href="/personal/projects" className="underline text-blue-600 hover:text-blue-800">websites</Link> that save time and bring people together so we can make the most of the  <s />
  <a
    href="https://mainfacts.com/time-life-countdown-timer"
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-blue-600 hover:text-blue-800"
  >
    limited time we have
  </a>
  . <br />Welcome to my site.
            </p>
          </div>
        </div>

        <PhotoCarousel />

        <SocialLinks />
      </main>
      
      <WebringWidget />
    </>
  );
}
