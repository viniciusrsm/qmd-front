'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageIndicator() {
    const pathname = usePathname();
   
    return (
        <div className='flex justify-center mt-4'>
            <div className='flex justify-center items-center border-primary border-2 rounded-full bg-gray-100'>
            {
                ['Dados', 'Devedores'].map((page, index) => (
                    <Link href={`/${page.toLowerCase()}`} key={index} className={`font-bold cursor-pointer rounded-full m-1 p-1 px-2 ${pathname === `/${page.toLowerCase()}` ? 'bg-primary text-white' : ''}`}>
                        {page}
                    </Link>
                ))
            }
            </div>
        </div>
    );
}