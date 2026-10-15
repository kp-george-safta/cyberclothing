"use client";

import { Product } from "@/app/clothing/page";
import { Heart } from 'lucide-react';
import Image from 'next/image';

export interface Product {
    id: number;
    imgSrc: string;
    brand: string;
    name: string;
    price: string;
    category: string;
    currency: string;
    type: string;
    color: string;
    material: string;
    hood: string;
    size: string;
}

interface PageProductsProps {
    products: Product[];
}


export default function PageProducts({ products }: PageProductsProps) {
    console.log(products);
    return (
        <div className="grid grid-cols-4 gap-x-5 gap-y-8 px-4">
            {products.map((product) => (
                <div key={product.id}
                    className="min-w-0">
                    <div className="relative w-full aspect-3/4 shrink-0">
                        <Image
                            width={474}
                            height={717}
                            quality={100}
                            src={product.imgSrc}
                            alt={product.name}
                            className="object-cover object-top"
                        />
                        <button className="top-2 right-2 absolute cursor-pointer ">
                            <Heart
                                width={24}
                                height={24}
                            />
                        </button>
                        <div className="min-w-0">
                            <p className="font-bold text-sm truncate">{product.brand}</p>
                            <p className="text-xs truncate">{product.name}</p>
                            <p className="text-sm" > <br />{product.price} {product.currency}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}