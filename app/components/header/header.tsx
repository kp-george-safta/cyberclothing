"use client";

import Image from 'next/image';
import Link from "next/link";
import styles from "./header.module.css";
import answearLogo from "@/public/Animations/logoAnswear_v2.svg";
import { usePathname } from 'next/navigation';
import HeaderDropdown from '../shared/header-dropdown-search/page';
import PromoHero from '../promo-hero/page';



export default function Header() {

    const pathname = usePathname();


    return (

        <nav className={styles.header}>

            <PromoHero />

            <div className={styles.logo}>
                <Image src={answearLogo} alt='Answear' className={styles.AnswearLogo} />
            </div>

            <div className={styles.Help_buttons}>
                <Link href="/answear-club" className={styles.Answear_Club}>
                    Answear Club
                </Link>

                <Link href="/journal" className={styles.Journal}>
                    Journal
                </Link>

                <Link href="/ajutor" className={styles.Help}>
                    Ajutor
                </Link>
            </div>

            <div className={styles.Categories}>
                <Link
                    href='/womens'
                    className={pathname === '/womens' ? `${styles.womensLink} ${styles.active}` : styles.womensLink}>
                    Femei
                </Link>

                <Link
                    href="/mens"
                    className={pathname === '/mens' ? `${styles.mensLink} ${styles.active}` : styles.mensLink}>
                    Bărbați
                </Link>

                <Link
                    href="/kids"
                    className={pathname === '/kids' ? `${styles.kidsLink} ${styles.active}` : styles.kidsLink}>
                    Copii
                </Link>

                <Link
                    href="/home"
                    className={pathname === '/home' ? `${styles.homeLink} ${styles.active}` : styles.homeLink}>
                    Home
                </Link>

            </div>



            <div className={styles.account_preferences}>
                <Link href="/contul-meu" className={styles.iconLink}>
                    <svg viewBox="0 0 32 32" fill="currentColor">
                        <g transform="translate(5 1)">
                            <path d="M11.1111 11.1111C8.04286 11.1111 5.55556 8.6238 5.55556 5.55556C5.55556 2.48731 8.04286 0 11.1111 0C14.1794 0 16.6667 2.48731 16.6667 5.55556C16.6631 8.62231 14.1779 11.1075 11.1111 11.1111ZM11.1111 2.22222C9.27016 2.22222 7.77778 3.71461 7.77778 5.55556C7.77778 7.39651 9.27016 8.88889 11.1111 8.88889C12.9521 8.88889 14.4444 7.39651 14.4444 5.55556C14.4424 3.71544 12.9512 2.22424 11.1111 2.22222Z" />
                            <path d="M11.1111 30C8.80487 29.9835 6.50593 29.7386 4.248 29.2687C3.85624 29.1833 3.54086 28.8935 3.42274 28.5104C3.30462 28.1272 3.4021 27.7101 3.6778 27.419C3.9535 27.1279 4.36466 27.0079 4.75367 27.105C6.84617 27.5337 8.97523 27.759 11.1111 27.7778C13.7511 27.7767 18.2834 27.3274 20 26.1474V24.4444C20 19.5352 16.0203 15.5556 11.1111 15.5556C6.20191 15.5556 2.22222 19.5352 2.22222 24.4444V26.6667C2.22222 27.2803 1.72476 27.7778 1.11111 27.7778C0.497461 27.7778 0 27.2803 0 26.6667V24.4444C0 18.3079 4.97461 13.3333 11.1111 13.3333C17.2476 13.3333 22.2222 18.3079 22.2222 24.4444V26.6667C22.2222 26.9613 22.1051 27.2439 21.8967 27.4522C19.4206 29.9283 11.9542 30 11.1111 30Z" />
                        </g>
                    </svg>
                </Link>

                <Link href="/wishlist" className={styles.iconLink}>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                    </svg>
                </Link>

                <Link href="/cart" className={styles.iconLink}>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M6 8h12l-1 12H7L6 8Z" />
                        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                    </svg>
                </Link>
            </div>

            <HeaderDropdown />
        </nav >
    )
}