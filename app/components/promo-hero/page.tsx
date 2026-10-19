"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../header/header.module.css";
import xMark from '@/public/Animations/xmark-solid-full.svg';


export default function PromoHero() {


    const [showPromo, setShowPromo] = useState(true);


    if (!showPromo) return null;


    return (

        <div className={styles.b2school_promotion}

        >
            <Link href='/back-to-school'>
                <div className={styles.text_CTA}>
                    <h4>BACK TO SCHOOL până la -25% la noul sezon</h4>
                    <h4>Descoperă</h4>
                </div>
            </Link>
            <div className={styles.close_b2school_promotion}
                onClick={() => setShowPromo(false)}
            >
                <Image src={xMark} alt='xMark' className={styles.xMark_Icon} />
            </div>
        </div>




    )
}