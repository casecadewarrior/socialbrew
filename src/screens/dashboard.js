import React from 'react';
import Header from './../components/header';

const dashboardItems = [
    {
        id: 1,
        name: 'Public Recipes',
        verb: 'View',
        href: '/public-recipes',
        imageSrc: 'https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
        id: 2,
        name: 'My Recipes',
        verb: 'Work Out',
        href: '/my-recipes',
        imageSrc: 'https://images.unsplash.com/photo-1615332579037-3c44b3660b53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        imageAlt: "#", 
    },
    {
        id: 3,
        name: 'Social',
        verb: 'Gather',
        href: '/social',
        imageSrc: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
        imageAlt: "#", 
    },
    {
        id: 4,
        name: 'Calculators',
        verb: 'Work Out',
        href: '/brewing-calculators',
        imageSrc: 'https://images.unsplash.com/photo-1615332579037-3c44b3660b53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        imageAlt: "#",
    },
  ]
  
export default function Dashboard() {
    return (
    <main>
        <Header/>
        <div className="bg-white">
            {dashboardItems.map((item) => (
            <div key={item.id} className="relative shadow-lg md:mb-2 bg-cover bg-center h-64 w-full flex flex-col" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.imageSrc})`,backgroundSize: 'cover',backgroundPosition: 'centre centre' }}>
                <a href={item.href} className="w-full flex items-center justify-center flex-col h-64">
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
    </main>
    )
}