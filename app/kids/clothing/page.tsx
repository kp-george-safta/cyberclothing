"use client";
import { useState } from 'react';
import PageProducts from '../../components/shared/page-products/page';
import styles from '../../clothing/clothing.module.css';
import PageSidebar from '../../components/shared/page-sidebar/page';
import PageFilter from '../../components/shared/page-filters/page';



export interface Product {
    id: number;
    imgSrc: string;
    brand: string;
    name: string;
    price: string;
    category: string;
    type: string;
    color: string;
    material: string;
    hood: string;
    size: string;
}


export default function Imbracaminte() {

const [result, setResult] = useState<Product[]>([]);

    return (

        <div className={styles.container}>
            <PageSidebar />
            <div className={styles.content}>
                <div>
                    <PageFilter onResult={setResult} />
                    <PageProducts products={result} />
                </div>


            </div >
        </div>





    )
}