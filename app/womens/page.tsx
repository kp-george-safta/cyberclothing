"use client";

import styles from "./womens-page.module.css";
import Link from "next/link";
import Adidas from '@/public/Animations/adidas-logo.png';
import Boss from '@/public/Animations/Boss-logo.png';
import Calvin_Klein_Jeans from '@/public/Animations/Calvin-Klein-Jeans-logo.png';
import Calvin_Klein_Underwear from '@/public/Animations/Calvin-Klein-Underwear-logo.png';
import Coach from '@/public/Animations/Coach-logo.png';
import GANT from '@/public/Animations/GANT-logo.png';
import Guess from '@/public/Animations/Guess-logo.png';
import Colombia from '@/public/Animations/Colombia-logo.png';
import Emporio_Armani from '@/public/Animations/Emporio-Armani-logo.png';
import GEOX from '@/public/Animations/GEOX-logo.png';
import Karl_Langerfield from '@/public/Animations/Karl-Langerfeld-logo.png';
import Polo from '@/public/Animations/Polo-logo.png';
import NewBalance from '@/public/Animations/New Balance-logo.png';
import Levi from '@/public/Animations/Levi-logo.png';
import TheNorthFace from '@/public/Animations/The-North-Face-logo.png';
import TommyHilfiger from '@/public/Animations/Tommy-Hilfiger-logo.png';
import UGG from '@/public/Animations/UGG-logo.png';
import TommyJeans from '@/public/Animations/Tommy-Jeans-logo.png';
import Image from 'next/image';
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Womens() {

  const brands = [
    { src: Adidas, alt: "Adidas" },
    { src: Boss, alt: "Boss" },
    { src: Calvin_Klein_Jeans, alt: "Calvin Klein Jeans" },
    { src: Calvin_Klein_Underwear, alt: "Calvin Klein Underwear" },
    { src: Coach, alt: "Coach" },
    { src: GANT, alt: "GANT" },
    { src: Guess, alt: "Guess" },
    { src: Colombia, alt: "Colombia" },
    { src: Emporio_Armani, alt: "Emporio Armani" },
    { src: GEOX, alt: "GEOX" },
    { src: Karl_Langerfield, alt: "Karl Lagerfeld" },
    { src: Polo, alt: "Polo" },
    { src: NewBalance, alt: "New Balance" },
    { src: Levi, alt: "Levi's" },
    { src: TheNorthFace, alt: "The North Face" },
    { src: TommyHilfiger, alt: "Tommy Hilfiger" },
    { src: UGG, alt: "UGG" },
    { src: TommyJeans, alt: "Tommy Jeans" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.Top_content}>
        <div className={styles.b2school_promo}>
          <video
            className={styles.promoBannerB2School}
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/Animations/b2school-banner.mp4"
              type="video/mp4"
            />
          </video>

          <div className={styles.promoContent}>
            <h1>
              BACK TO SCHOOL
              <br />
              PÂNĂ LA -25%
            </h1>

            <Link href="/back-to-school" className={styles.promoButton}>
              Vezi Promoția
            </Link>
          </div>
        </div>

          <Carousel
            className={styles.brandsSection}
            opts={{ loop: true }}

          >
            <CarouselContent className="-ml-6">
              {brands.map((brand) => (
                <CarouselItem
                  key={brand.alt}
                  className="basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/8 xl:basis-1/10 pl-6"
                >
                  <div className="flex h-40 items-center justify-center px-400">
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      className={styles.BrandLogo}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 top-8/20  h-10 w-10 border border-gray-300 bg-white text-gray-900 shadow-md hover:bg-gray-100" />
            <CarouselNext className="right-0 top-8/20  h-10 w-10 border border-gray-300 bg-white text-gray-900 shadow-md hover:bg-gray-100" />
          </Carousel>
      </div>

      <div className={styles.Mid_content}></div>
      <div className={styles.Bottom_conent}></div>
      <div className={styles.Footer}></div>
    </div>
  );
}