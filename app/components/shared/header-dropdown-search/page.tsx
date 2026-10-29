"use client";

import LacosteSponsorDropdown from '@/public/Animations/imbracaminteSponsorDropDown.jpg';
import BirkenStockSponsorDropdown from '@/public/Animations/83-6a95535fae85c3.jpg';
import BossSponsorDropdown from '@/public/Animations/80-6a955344840303.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search } from 'lucide-react';







export default function HeaderDropdown() {

    const pathname = usePathname();
    const section = pathname.split('/')[1];
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




        //  Desktop UI

        <div className="relative mx-auto hidden md:flex h-[60px] w-[90%] max-w-[1600px] items-center gap-6 border-b border-[#eee]">

            <Link href="/new" className="cursor-pointer border-b border-transparent pb-2 font-['Euclid_Circular_A',sans-serif] text-sm text-[#111] no-underline hover:border-[#111]">
                Noutăți
            </Link>

            <div className="group static flex h-full items-center">
                <span className="cursor-pointer border-b border-transparent pb-2 font-['Euclid_Circular_A',sans-serif] text-sm text-[#111] no-underline hover:border-[#111]">
                    <Link href={`/${section}/clothing`}>Îmbrăcăminte</Link>
                </span>

                <div className="absolute left-0 top-full z-[100] hidden min-h-[380px] w-full grid-cols-[220px_220px_1fr] gap-x-10 group-hover:grid before:absolute before:inset-y-0 before:left-1/2 before:z-[-1] before:w-screen before:-translate-x-1/2 before:bg-white">
                    <ul className="m-0 flex list-none flex-col p-0 [&_li]:list-none [&_a]:block [&_a]:py-1.5 [&_a]:text-sm [&_a]:text-[#111] [&_a]:no-underline [&_a:hover]:underline">
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

                    <ul className="m-0 flex list-none flex-col p-0 [&_li]:list-none [&_a]:block [&_a]:py-1.5 [&_a]:text-sm [&_a]:text-[#111] [&_a]:no-underline [&_a:hover]:underline">
                        <li><span><a href="/pulovere">Pulovere și cardigane</a></span></li>
                        <li><span><a href="/sacouri">Sacouri și costume</a></span></li>
                        <li><span><a href="/sosete">Șosete</a></span></li>
                        <li><span><a href="/treninguri">Treninguri</a></span></li>
                        <li><span><a href="/tricouri">Tricouri</a></span></li>
                        <li><span><a href="/imbracaminte">Vezi toate</a></span></li>
                    </ul>

                    <div className="col-start-3 mr-5 h-[175px] w-[300px] justify-self-end">
                        <Image src={LacosteSponsorDropdown} alt='lacoste' className="mr-5 h-[175px] w-[300px] justify-self-end" />
                        <button className="absolute right-[230px] top-[145px] cursor-pointer border-none bg-white/85 px-2 py-1 text-[10px] text-[#111]">Sponsorizat ⓘ</button>
                    </div>
                </div>
            </div>

            <div className="group static flex h-full items-center">
                <span className="cursor-pointer border-b border-transparent pb-2 font-['Euclid_Circular_A',sans-serif] text-sm text-[#111] no-underline hover:border-[#111]">
                    <Link href={`/${section}/shoes`}>Încălțăminte</Link>
                </span>

                <div className="absolute left-0 top-full z-[100] hidden min-h-[380px] w-full grid-cols-[220px_220px_1fr] gap-x-10 group-hover:grid before:absolute before:inset-y-0 before:left-1/2 before:z-[-1] before:w-screen before:-translate-x-1/2 before:bg-white">
                    <ul className="m-0 flex list-none flex-col p-0 [&_li]:list-none [&_a]:block [&_a]:py-1.5 [&_a]:text-sm [&_a]:text-[#111] [&_a]:no-underline [&_a:hover]:underline">
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

                    <div className="col-start-3 mr-5 h-[175px] w-[300px] justify-self-end">
                        <Image src={BirkenStockSponsorDropdown} alt='lacoste' className="mr-5 h-[175px] w-[300px] justify-self-end" />
                        <button className="absolute right-[230px] top-[145px] cursor-pointer border-none bg-white/85 px-2 py-1 text-[10px] text-[#111]">Sponsorizat ⓘ</button>
                    </div>
                </div>
            </div>

            <div className="group static flex h-full items-center">
                <span className="cursor-pointer border-b border-transparent pb-2 font-['Euclid_Circular_A',sans-serif] text-sm text-[#111] no-underline hover:border-[#111]">
                    <Link href={`/${section}/accessories`}>Accesorii</Link>
                </span>

                <div className="absolute left-0 top-full z-[100] hidden min-h-[380px] w-full grid-cols-[220px_220px_1fr] gap-x-10 group-hover:grid before:absolute before:inset-y-0 before:left-1/2 before:z-[-1] before:w-screen before:-translate-x-1/2 before:bg-white">
                    <ul className="m-0 flex list-none flex-col p-0 [&_li]:list-none [&_a]:block [&_a]:py-1.5 [&_a]:text-sm [&_a]:text-[#111] [&_a]:no-underline [&_a:hover]:underline">
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

                    <ul className="m-0 flex list-none flex-col p-0 [&_li]:list-none [&_a]:block [&_a]:py-1.5 [&_a]:text-sm [&_a]:text-[#111] [&_a]:no-underline [&_a:hover]:underline">
                        <li><span><a href="/pulovere">In aer liber si turism</a></span></li>
                        <li><span><a href="/sacouri">Manusi</a></span></li>
                        <li><span><a href="/sosete">Ochelari de soare</a></span></li>
                        <li><span><a href="/treninguri">Portofele</a></span></li>
                        <li><span><a href="/tricouri">Rucsacuri</a></span></li>
                        <li><span><a href="/imbracaminte">Sticle si termosuri</a></span></li>
                        <li><span><a href="/imbracaminte">Umbrele</a></span></li>
                        <li><span><a href="/incaltaminte">Vezi toate</a></span></li>
                    </ul>

                    <div className="col-start-3 mr-5 h-[175px] w-[300px] justify-self-end">
                        <Image src={BossSponsorDropdown} alt='lacoste' className="mr-5 h-[175px] w-[300px] justify-self-end" />
                        <button className="absolute right-[230px] top-[145px] cursor-pointer border-none bg-white/85 px-2 py-1 text-[10px] text-[#111]">Sponsorizat ⓘ</button>
                    </div>
                </div>
            </div>

            <Link href={`/${section}/sport`} className="cursor-pointer border-b border-transparent pb-2 font-['Euclid_Circular_A',sans-serif] text-sm text-[#111] no-underline hover:border-[#111]">
                Sport
            </Link>

            <Link href={`/${section}/premium`} className="cursor-pointer border-b border-transparent pb-2 font-['Euclid_Circular_A',sans-serif] text-sm text-[#111] no-underline hover:border-[#111]">
                Premium
            </Link>

            <Link href={`/${section}/brands`} className="cursor-pointer border-b border-transparent pb-2 font-['Euclid_Circular_A',sans-serif] text-sm text-[#111] no-underline hover:border-[#111]">
                Branduri
            </Link>

            <Link href={`/${section}/sale`} className="cursor-pointer border-b border-transparent pb-2 font-['Euclid_Circular_A',sans-serif] text-sm text-[#e53935] no-underline hover:border-[#111]">
                Sale
            </Link>

            <Link href={`/${section}/backpacks`} className="cursor-pointer border-b border-transparent pb-2 font-['Euclid_Circular_A',sans-serif] text-sm text-[#111] no-underline hover:border-[#111]">
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

export function MobileNavLinks({ onClose }: { onClose: () => void }) {



    const pathname = usePathname();
    const section = pathname.split('/')[1];

    const links = [
        { href: '/new', label: "Noutăți" },
        { href: `/${section}/clothing`, label: "Îmbrăcăminte" },
        { href: `/${section}/shoes`, label: "Încălțăminte" },
        { href: `/${section}/accessories`, label: "Accesorii" },
        { href: `/${section}/sport`, label: "Sport" },
        { href: `/${section}/premium`, label: "Premium" },
        { href: `/${section}/brands`, label: "Branduri" },
        { href: `/${section}/sale`, label: "Sale" },
        { href: `/${section}/backpacks`, label: "Rucsacuri" }
    ]


    return (


        // MOBILE UI


        <div className="flex flex-col">

            {links.map((link) =>
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={"py-3 border-b border-[#eee] text-base text-[#111]"}
                >
                    {link.label}
                </Link>
            )}

        </div>
    );
}
