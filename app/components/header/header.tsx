"use client";

import LacosteSponsorDropdown from '@/public/Animations/imbracaminteSponsorDropDown.jpg';
import BirkenStockSponsorDropdown from '@/public/Animations/83-6a95535fae85c3.jpg';
import BossSponsorDropdown from '@/public/Animations/80-6a955344840303.jpg';
import Image from 'next/image';
import Link from "next/link";
import styles from "./header.module.css";
import answearLogo from "@/public/Animations/logoAnswear_v2.svg";
import xMark from '@/public/Animations/xmark-solid-full.svg';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export default function Header() {
    const [showPromo, setShowPromo] = useState(true);

    const pathname = usePathname();


    const searchParams = useSearchParams();

    const { replace, push  } = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);

        term
            ? params.set('query', term)
            : params.delete('query');
        replace(`${pathname}?${params.toString()}`);
    }


    console.log('Current pathname:', pathname);

    function handleSubmit(e) {
        e.preventDefault();
        const term = searchParams.get('query') ?? '';
        push(`/imbracaminte?query=${term}`);
        
    }


    return (

        <nav className={styles.header}>

            {showPromo && (
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
            )}

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
                    href="/"
                    className={pathname === '/' ? `${styles.homeLink} ${styles.active}` : styles.homeLink}>
                    Home
                </Link>

            </div>

            <div className={styles.search_bar}></div>

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

            <div className={styles.dropdown_meniu}>

                <Link href="/new" className={styles.dropdownLink}>
                    Noutăți
                </Link>

                <div className={styles.dropdown}>
                    <span className={styles.dropdownLink}><a href="/clothing">Îmbrăcăminte </a></span>

                    <div className={styles.dropdownContent}>
                        <ul className={styles.dropdownColumn}>
                            <li><span><a href="/bluze-si-hanorace">Bluze și hanorace</a></span></li>
                            <li><span><a href="/camasi">Cămăși</a></span></li>
                            <li><span><a href="/compleuri">Compleuri</a></span></li>
                            <li><span><a href="/costume-de-baie">Costume de baie</a></span></li>
                            <li><span><a href="/geci">Geci</a></span></li>
                            <li><span><a href="/ingrijirea-imbracantei">Îngrijirea îmbrăcămintei</a></span></li>
                            <li><span><a href="/jeans">Jeans</a></span></li>
                            <li><span><a href="/lenjerie">Lenjerie</a></span></li>
                            <li><span><a href="/lenjerie-tehnica">Lenjerie tehnică</a></span></li>
                            <li><span><a href="/paltoane">Paltoane</a></span></li>
                            <li><span><a href="/pantaloni">Pantaloni</a></span></li>
                            <li><span><a href="/pantaloni-scurti">Pantaloni scurți</a></span></li>
                        </ul>

                        <ul className={styles.dropdownColumn}>
                            <li><span><a href="/pulovere">Pulovere și cardigane</a></span></li>
                            <li><span><a href="/sacouri">Sacouri și costume</a></span></li>
                            <li><span><a href="/sosete">Șosete</a></span></li>
                            <li><span><a href="/treninguri">Treninguri</a></span></li>
                            <li><span><a href="/tricouri">Tricouri</a></span></li>
                            <li><span><a href="/imbracaminte">Vezi toate</a></span></li>
                        </ul>

                        <div className={styles.dropdownBanner}>
                            <Image src={LacosteSponsorDropdown} alt='lacoste' className={styles.SponsorDropdown} />
                            <button className={styles.sponsorButton}>Sponsorizat ⓘ</button>
                        </div>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <span className={styles.dropdownLink}><a href="/incaltaminte">Încălțăminte</a></span>

                    <div className={styles.dropdownContent}>
                        <ul className={styles.dropdownColumn}>
                            <li><span><a href="/cizme-de-cauciuc">Cizme de cauciuc</a></span></li>
                            <li><span><a href="/cizme-de-zapada">Cizme de zăpadă</a></span></li>
                            <li><span><a href="/espadrile">Espadrile</a></span></li>
                            <li><span><a href="/ghete">Ghete</a></span></li>
                            <li><span><a href="/mocasini-si-pantofi">Mocasini si pantofi</a></span></li>
                            <li><span><a href="/pantofi-de-trekking">Pantofi de trekking</a></span></li>
                            <li><span><a href="/pantofi-sport">Pantofi sport</a></span></li>
                            <li><span><a href="/papuci-de-casa">Papuci de casa</a></span></li>
                            <li><span><a href="/papuci-si-sandale">Papuci si sandale</a></span></li>
                            <li><span><a href="/produse-ingrijire-incaltaminte">Produse ingrijire incaltaminte</a></span></li>
                            <li><span><a href="/sneakers">Sneakers</a></span></li>
                            <li><span><a href="/tenesi">Tenesi</a></span></li>
                            <li><span><a href="/incaltaminte">Vezi toate</a></span></li>
                        </ul>

                        <div className={styles.dropdownBanner}>
                            <Image src={BirkenStockSponsorDropdown} alt='lacoste' className={styles.SponsorDropdown} />
                            <button className={styles.sponsorButton}>Sponsorizat ⓘ</button>
                        </div>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <span className={styles.dropdownLink}><a href="/accesorii">Accesorii</a></span>

                    <div className={styles.dropdownContent}>
                        <ul className={styles.dropdownColumn}>
                            <li><span><a href="/cizme-de-cauciuc">Accesorii inot</a></span></li>
                            <li><span><a href="/cizme-de-zapada">Bijuterii</a></span></li>
                            <li><span><a href="/espadrile">Borsete si genti mici</a></span></li>
                            <li><span><a href="/ghete">Caciuli si sepci</a></span></li>
                            <li><span><a href="/mocasini-si-pantofi">Ceasuri</a></span></li>
                            <li><span><a href="/pantofi-de-trekking">Cravate si papioane</a></span></li>
                            <li><span><a href="/pantofi-sport">Curele</a></span></li>
                            <li><span><a href="/papuci-de-casa">Echipament sport</a></span></li>
                            <li><span><a href="/papuci-si-sandale">Fulare si esarfe</a></span></li>
                            <li><span><a href="/produse-ingrijire-incaltaminte">Genti cosmetice</a></span></li>
                            <li><span><a href="/sneakers">Genti si valize</a></span></li>
                            <li><span><a href="/tenesi">Huse si coperti</a></span></li>

                        </ul>

                        <ul className={styles.dropdownColumn}>
                            <li><span><a href="/pulovere">In aer liber si turism</a></span></li>
                            <li><span><a href="/sacouri">Manusi</a></span></li>
                            <li><span><a href="/sosete">Ochelari de soare</a></span></li>
                            <li><span><a href="/treninguri">Portofele</a></span></li>
                            <li><span><a href="/tricouri">Rucsacuri</a></span></li>
                            <li><span><a href="/imbracaminte">Sticle si termosuri</a></span></li>
                            <li><span><a href="/imbracaminte">Umbrele</a></span></li>
                            <li><span><a href="/incaltaminte">Vezi toate</a></span></li>
                        </ul>

                        <div className={styles.dropdownBanner}>
                            <Image src={BossSponsorDropdown} alt='lacoste' className={styles.SponsorDropdown} />
                            <button className={styles.sponsorButton}>Sponsorizat ⓘ</button>
                        </div>
                    </div>
                </div>

                <Link href="/sport" className={styles.dropdownLink}>
                    Sport
                </Link>

                <Link href="/premium" className={styles.dropdownLink}>
                    Premium
                </Link>

                <Link href="/branduri" className={styles.dropdownLink}>
                    Branduri
                </Link>

                <Link href="/sale" className={styles.dropdownSale}>
                    Sale
                </Link>

                <Link href="/rucsacuri" className={styles.dropdownLink}>
                    Rucsacuri
                </Link>

                <form
                    role="search"
                    onSubmit={handleSubmit}
                    className="ml-auto flex items-center w-64 border-b border-black pb-1"
                >
                    <input
                        type="search"
                        placeholder="aici ai the answear."
                        className=" flex-1 bg-transparent min-w-0 outline-none text-sm text-black placeholder:text-black"
                        onChange={(e) => handleSearch(e.target.value)}
                        defaultValue={searchParams.get('query')?.toString()}
                    />

                    <button
                        type="submit"
                        className="flex cursor-pointer shrink-0">
                        <Search
                            size={19}
                        />
                    </button>
                </form>

            </div>
        </nav >)
}