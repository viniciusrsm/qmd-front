'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageIndicator() {
    const pathname = usePathname();
    const mapNameToPath = {
        'Dívidas': '/dividas',
        'Devedores': '/devedores'
    };
   
    return (
        <div className='flex justify-center mt-4'>
            <div className='flex justify-center items-center border-primary border-2 rounded-full bg-gray-100'>
            {
                Object.keys(mapNameToPath).map((page) => (
                    <Link 
                        href={mapNameToPath[page as keyof typeof mapNameToPath]} 
                        key={page} 
                        className={`font-bold cursor-pointer rounded-full m-1 p-1 px-2 ${pathname === mapNameToPath[page as keyof typeof mapNameToPath] ? 'bg-primary text-white' : ''}`}
                    >
                        {page}
                    </Link>
                ))
            }
            </div>
        </div>
    );
}