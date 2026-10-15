
import HomeBanner from '@/public/Animations/home-banner.jpg';
import { promises as fs } from 'fs';
import Image from 'next/image';
import Link from "next/link";
import styles from "./home-page.module.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import path from 'path';
import BrandsSlider from './components/shared/brands-slider/page';

interface Product {
  id: number;
  imgSrc: string;
  brand: string;
  name: string;
  price: string;
  currency: string;
  tag?: string;
}

export default async function Home() {

  const filePath = path.join(process.cwd(), "public", "/products.json");
  const products = JSON.parse(await fs.readFile(filePath, "utf-8")) as Product[];



  return (
    <div className={styles.container}>

      <div className={styles.Top_content}>

        <div className={styles.b2school_promo}>

          <Image src={HomeBanner} alt='HomeBanner' className={styles.promoBannerB2School} />
          <div className={styles.promoContent}>
            <h1>
              BACK TO SCHOOL
              <br />
              PÂNĂ LA -25%
            </h1>
            <Link href='/back-to-school' className={styles.promoButton}>
              Vezi
            </Link>
          </div>
        </div>
        <BrandsSlider />
      </div>

      <div className={styles.Mid_content}>
        <div className={styles.productBox1}>

          <Carousel
            className={styles.brandsSection}
          >
            <CarouselContent className="-ml-6">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="basis-1/4 sm:basis-1/4 md:basis-1/4 lg:basis-1/4 xl:basis-1/4 pl-6"
                >
                  <div className="flex flex-col items-center justify-center gap-2 px-4">
                    <Image
                      width={320}
                      height={500}
                      quality={100}
                      src={product.imgSrc}
                      alt={product.name}
                      className={styles.BrandLogo}
                    />

                    <div className="flex flex-col items-left text-left px-3">
                      <p className="font-bold text-sm">{product.brand}</p>
                      <p className="text-xs">{product.name}</p>
                      <p className="text-sm" > <br />{product.price} {product.currency}</p>

                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bottom-1/20  h-10 w-10 border border-gray-300 bg-white text-gray-900 shadow-md hover:bg-gray-100" />
            <CarouselNext className="right-0 bottom-1/20  h-10 w-10 border border-gray-300 bg-white text-gray-900 shadow-md hover:bg-gray-100" />
          </Carousel>

        </div>
      </div>
      <div className={styles.Bottom_conent}></div>
      <div className={styles.Footer}></div>
    </div >
  );
}