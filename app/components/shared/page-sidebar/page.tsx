"use client";
import styles from '../../../clothing/clothing.module.css';
import { useState } from 'react';

export default function PageSidebar() {
    
    
    const [isOpen, setIsOpen] = useState(null);
    const handleSelectedStatus = (isVisible) => {
        setIsOpen((current) => (current === isVisible ? null : isVisible));
    }
    return (

         <nav className={styles.navBar}>

                <span className="cursor-pointer text-sm mb-6 -ml-2 font-bold py-2 px-0"> Bărbați </span>

                <div className={styles.dropdown}>
                    <span
                        className="cursor-pointer text-sm font-medium py-3 px-1"
                        onClick={() => handleSelectedStatus("imbracaminte")}
                    >
                        <b>Îmbrăcăminte</b>
                    </span>

                    <div className={styles.dropdownContent}>
                        {isOpen === "imbracaminte" ? (
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
                                <li><span><a href="/pulovere">Pulovere și cardigane</a></span></li>
                                <li><span><a href="/sacouri">Sacouri și costume</a></span></li>
                                <li><span><a href="/sosete">Șosete</a></span></li>
                                <li><span><a href="/treninguri">Treninguri</a></span></li>
                                <li><span><a href="/tricouri">Tricouri</a></span></li>

                            </ul>
                        ) : null}
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <span
                        className="cursor-pointer text-sm font-medium py-3 px-1"
                        onClick={() => handleSelectedStatus("incaltaminte")}
                    >

                        <b>Încălțăminte</b>

                    </span>

                    <div className={styles.dropdownContent}>
                        {isOpen === "incaltaminte" ? (
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
                            </ul>
                        ) : null}

                    </div>
                </div>

                <div className={styles.dropdown}>
                    <span
                        className="cursor-pointer text-sm font-medium py-3 px-1"
                        onClick={() => handleSelectedStatus("accesorii")}
                    >
                        <b>Accesorii</b>
                    </span>

                    <div className={styles.dropdownContent}>
                        {isOpen === "accesorii" ? (
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
                                <li><span><a href="/pulovere">In aer liber si turism</a></span></li>
                                <li><span><a href="/sacouri">Manusi</a></span></li>
                                <li><span><a href="/sosete">Ochelari de soare</a></span></li>
                                <li><span><a href="/treninguri">Portofele</a></span></li>
                                <li><span><a href="/tricouri">Rucsacuri</a></span></li>
                                <li><span><a href="/imbracaminte">Sticle si termosuri</a></span></li>
                                <li><span><a href="/imbracaminte">Umbrele</a></span></li>
                            </ul>
                        ) : null}
                    </div>
                </div>
            </nav >
    )
}