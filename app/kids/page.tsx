"use client";

import styles from "./kids-page.module.css";
import Link from "next/link";
import BrandsSlider from "../components/shared/brands-slider/page";
import xMark from '@/public/Animations/xmark-solid-full.svg';
import Image from 'next/image';
import { useState } from 'react';
import * as React from "react"


export default function Kids() {


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
              src="/Animations/b2school-kids-banner.mp4"
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
    </div >
  );
}