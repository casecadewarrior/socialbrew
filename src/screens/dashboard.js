import React from 'react';
import Header from './../components/header';

const dashboardItems = [
    {
        id: 1,
        name: 'Public Recipes',
        verb: 'View',
        href: '/public-recipes',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "#",
        comingSoon: true,
    },
    {
        id: 2,
        name: 'Social',
        verb: 'Gather',
        href: '/social',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "#",
        comingSoon: true, 
    },
    {
        id: 3,
        name: 'Calculators',
        verb: 'Understand',
        href: '/calculators',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "#",
        comingSoon: true, 
    },
  ]
  
export default function Dashboard() {
    return (
    <main>
        <Header/>
    
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {dashboardItems.map((item) => (
                    <div key={item.id} className="relative shadow-lg md:mb-2 bg-dashboard-item bg-cover bg-center h-56 w-full flex flex-col sm:mx-8">
                        <a href={item.href} className="w-full flex items-center justify-center flex-col h-56">
                            <h3 className="text-xl text-red bg-white py-3 px-5">
                                {item.name}
                            </h3>
                            <h4 className="text-sm text-white bg-red inline p-2">
                                {item.verb}
                            </h4>
                        </a>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </main>
    )
}