"use client"

import { useRouter } from 'next/navigation'

const Banner = () => {
    const router = useRouter();
    return (
        <div className="banner">
            <img src="/banner-img.jpeg" alt="Banner" className="banner-image" />
            <button 
                className="banner-button" 
                onClick={() => router.push('/collections/all')}
            >
                Shop All
            </button>
        </div>
    )
}

export default Banner;