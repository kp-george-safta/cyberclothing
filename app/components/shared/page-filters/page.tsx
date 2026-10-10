"use client";
import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';


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

const filterGroups = [
    { key: "category", label: "Categorie" },
    { key: "brand", label: "Brand" },
    { key: "color", label: "Culoare" },
    { key: "size", label: "Dimensiuni generale" }
] as const;

type Key = "category" | "size" | "brand" | "color";

type Filters = { category: string[]; brand: string[]; color: string[]; size: string[] };

const empty: Filters = { category: [], brand: [], color: [], size: [] };
const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"]; // strings from array


export default function PageFilters({onResult} : {onResult: (product: Product[]) => void}) {



    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        let isMounted = true;

        fetch('/products.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (isMounted) {
                    setProducts(data);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    setProducts(err.message);
                }
            });
        return () => {
            isMounted = false;
        };
    }, []);


    //search

    const searchParams = useSearchParams();
    const search = searchParams.get('query')?.toLowerCase() ?? '';



    //filter

    const [draft, setDraft] = useState<Filters>(empty);
    const [applied, setApplied] = useState<Filters>(empty);


    function toggle(key: Key, value: string) {
        setDraft((current) => ({
            ...current,
            [key]: current[key].includes(value)
                ? current[key].filter((isSet) => isSet !== value)
                : [...current[key], value],
        }));
        console.log("A mers cacatul asta");
    }


    function accept() {
        setApplied(draft);
        console.log("Merge");
    }

    const result = useMemo(() => products.filter((produs) =>{
        return (
            filterGroups.every(({ key }) => {
                if
                    (applied[key].length === 0) return true;


                const value = produs[key];


                if (Array.isArray(value)) {
                    return value.some((inputSize) => applied[key].includes(inputSize));
                }


                return applied[key].includes(String(value));
            })
            &&
            (search === '' || produs.brand.toLowerCase().includes(search) || produs.name.toLowerCase().includes(search))
        );

    }), [products, applied, search]);



    //for reuse in other components
    useEffect(() => {
        onResult (result);
    }, [result, onResult]);


    return (



        <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4 px-4">
                <p className="text-2xl"><b>Îmbrăcăminte Bărbați </b></p> <p className="text-sm"> Numărul de produse selectate: {result.length} ⓘ</p>
            </div>
            <div className="grid grid-cols-4 gap-y-4 gap-x-25 px-4 mb-6">
                <details className="group relative" name="filters">

                    <summary className="cursor-pointer list-none flex items-center gap-1.5 [&::-webkit-details-marker]:hidden">
                        <span className="underline">Categorie</span>
                        <span className="text-xs transition-transform group-open:rotate-180">⌄</span>
                    </summary>

                    <ul className="absolute top-full left-0 z-50 mt-2 w-65 bg-white border-gray-200 shadow-lg p-3 flex flex-col gap-4">
                        {[...new Set(products.map((product) => product.category))]
                            .filter(Boolean)
                            .map((category) => (
                                <li key={category}>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            value={category}
                                            checked={draft.category.includes(category)}
                                            onChange={() => toggle("category", category)}
                                            className="w-4 h-4 cursor-pointer"
                                        />

                                        <span>{category}</span>
                                    </label>
                                </li>

                            ))}
                        <button onClick={accept} className="w-full mt-4 py-4 bg-gray-500 text-white text-xl cursor-pointer">
                            Acceptă
                        </button>
                    </ul>
                </details>

                <details className="group relative" name="filters">
                    <summary className="cursor-pointer list-none flex items-center gap-1.5 [&::-webkit-details-marker]:hidden">
                        <span className="underline">Dimensiuni generale</span>
                        <span className="text-xs transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <ul className="absolute top-full left-0 z-50 mt-2 w-65 bg-white border-gray-200 shadow-lg p-3 flex flex-col gap-2">

                        <li>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={draft.size.includes("XXS")}
                                    onChange={() => toggle("size", "XXS")}

                                    className="w-4 h-4 cursor-pointer"
                                />

                                <span>XXS</span>
                            </label></li>



                        <li>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={draft.size.includes("XS")}
                                    onChange={() => toggle("size", "XS")}

                                    className="w-4 h-4 cursor-pointer"
                                />

                                <span>XS</span>
                            </label></li>



                        <li>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={draft.size.includes("S")}
                                    onChange={() => toggle("size", "S")}

                                    className="w-4 h-4 cursor-pointer"
                                />

                                <span>S</span>
                            </label></li>




                        <li>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={draft.size.includes("M")}
                                    onChange={() => toggle("size", "M")}

                                    className="w-4 h-4 cursor-pointer"
                                />

                                <span>M</span>
                            </label></li>




                        <li>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={draft.size.includes("L")}
                                    onChange={() => toggle("size", "L")}

                                    className="w-4 h-4 cursor-pointer"
                                />

                                <span>L</span>
                            </label></li>



                        <li>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={draft.size.includes("XL")}
                                    onChange={() => toggle("size", "XL")}

                                    className="w-4 h-4 cursor-pointer"
                                />

                                <span>XL</span>
                            </label></li>



                        <li>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={draft.size.includes("XXL")}
                                    onChange={() => toggle("size", "XXL")}

                                    className="w-4 h-4 cursor-pointer"
                                />

                                <span>XXL</span>
                            </label></li>


                        <li>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={draft.size.includes("XXXL")}
                                    onChange={() => toggle("size", "XXXL")}

                                    className="w-4 h-4 cursor-pointer"
                                />

                                <span>XXXL</span>
                            </label></li>


                        <li>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={draft.size.includes("XXXXL")}
                                    onChange={() => toggle("size", "XXXXL")}

                                    className="w-4 h-4 cursor-pointer"
                                />

                                <span>XXXXL</span>
                            </label></li>
                        <button onClick={accept} className="w-full mt-4 py-4 bg-gray-500 text-white text-xl cursor-pointer">

                            Acceptă
                        </button>
                    </ul>

                </details>

                <details className="group relative" name="filters">
                    <summary className="cursor-pointer list-none flex items-center gap-1.5 [&::-webkit-details-marker]:hidden">
                        <span className="underline">Brand</span>
                        <span className="text-xs transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <ul className="absolute top-full left-[-80] z-50 mt-2 w-65 bg-white border-gray-200 shadow-lg p-3 flex flex-col gap-4">
                        {[...new Set(products.map((product) => product.brand))]
                            .filter(Boolean)
                            .map((brand) => (
                                <li key={brand}>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            value={brand}
                                            checked={draft.brand.includes(brand)}
                                            onChange={() => toggle("brand", brand)}
                                            className="w-4 h-4 cursor-pointer"
                                        />

                                        <span>{brand}</span>
                                    </label>
                                </li>

                            ))}

                        <button onClick={accept} className="w-full mt-4 py-4 bg-gray-500 text-white text-xl cursor-pointer">

                            Acceptă
                        </button>
                    </ul>
                </details>

                <details className="group relative" name="filters">
                    <summary className="cursor-pointer list-none flex items-center gap-1.5 [&::-webkit-details-marker]:hidden">
                        <span className="underline">Culoare</span>
                        <span className="text-xs transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <ul className="absolute top-full left-[-80] z-50 mt-2 w-65 bg-white border-gray-200 shadow-lg p-3 flex flex-col gap-4">
                        {[...new Set(products.map((product) => product.color))]
                            .filter(Boolean)
                            .map((color) => (
                                <li key={color}>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            value={color}
                                            checked={draft.color.includes(color)}
                                            onChange={() => toggle("color", color)}
                                            className="w-4 h-4 cursor-pointer"
                                        />

                                        <span>{color}</span>
                                    </label>
                                </li>

                            ))}
                        <button onClick={accept} className="w-full mt-4 py-4 bg-gray-500 text-white text-xl cursor-pointer">

                            Acceptă
                        </button>
                    </ul>
                </details>

            </div>
        </div>



    );
}