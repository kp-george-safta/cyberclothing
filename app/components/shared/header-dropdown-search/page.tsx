"use client";

import LacosteSponsorDropdown from '@/public/Animations/imbracaminteSponsorDropDown.jpg';
import BirkenStockSponsorDropdown from '@/public/Animations/83-6a95535fae85c3.jpg';
import BossSponsorDropdown from '@/public/Animations/80-6a955344840303.jpg';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../header/header.module.css';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search } from 'lucide-react';







export default function HeaderDropdown() {

    const pathname = usePathname();
    console.log('Current pathname:', pathname);

    const searchParams = useSearchParams();

    const { replace, push } = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);

        term
            ? params.set('query', term)
            : params.delete('query');
        replace(`${pathname}?${params.toString()}`);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const term = searchParams.get('query') ?? '';
        push(`/clothing?query=${term}`);

    }

    return (



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
                <span className={styles.dropdownLink}><a href="/shoes">Încălțăminte</a></span>

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
                <span className={styles.dropdownLink}><a href="/accessories">Accesorii</a></span>

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

            <Link href="/brands" className={styles.dropdownLink}>
                Branduri
            </Link>

            <Link href="/sale" className={styles.dropdownSale}>
                Sale
            </Link>

            <Link href="/backpacks" className={styles.dropdownLink}>
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

    )
}