"use client";

import styles from "./womens-page.module.css";
import Link from "next/link";
import Image from 'next/image';
import * as React from "react"

import BrandsSlider from "../components/shared/brands-slider/page";

export default function Womens() {

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

<BrandsSlider />
      </div>

      <div className={styles.Mid_content}></div>
      <div className={styles.Bottom_conent}></div>
      <div className={styles.Footer}></div>
    </div>
  );
}