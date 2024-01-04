import React, { useEffect } from 'react';
import '@popperjs/core';
import 'flowbite/dist/flowbite.css';
import 'flowbite';


import HomeModavo from '../../assets/img/projects/modavo/home-modavo.png';
import DashboardModavo from '../../assets/img/projects/modavo/dashboard-modavo.png';
import CampanhaModavo from '../../assets/img/projects/modavo/campanha-modavo.png';
import ConsultaModavo from '../../assets/img/projects/modavo/consultacdr-modavo.png';

import CartCorgi from '../../assets/img/projects/corgishop/home-corgishop.png';
import CheckoutCorgiShop from '../../assets/img/projects/corgishop/checkout-corgishop.png';
import LoginCorgiShop from '../../assets/img/projects/corgishop/login-corgishop.png';
import CartCorgiShop from '../../assets/img/projects/corgishop/cart-corgishop.png';

import HomeFastSMS from '../../assets/img/projects/fastsms/home-fastsms.png';
import RegisterFastSMS from '../../assets/img/projects/fastsms/register-fastsms.png';
import UsersFastSMS from '../../assets/img/projects/fastsms/users-fastsms.png';
import BDFastSMS from '../../assets/img/projects/fastsms/bd-fastsms.png';

import HomeGestaoEscolar from '../../assets/img/projects/gestaoescolar/home-gestaoescolar.png';
import AlunosGestaoEscolar from '../../assets/img/projects/gestaoescolar/alunos-gestaoescolar.jpg';
import AddLalunoGestaoEscolar from '../../assets/img/projects/gestaoescolar/addlaluno-gestaoescolar.png';
import EscolaGestaoEscolar from '../../assets/img/projects/gestaoescolar/escola-gestaoescolar.png';


export default function Carousel({ img1, img2, img3, img4 }) {

    useEffect(() => {
        import('flowbite');
      }, []);

    return(  

    <div id="default-carousel" class="relative w-full p-2 h-60" data-carousel="slide">

        <div className="relative overflow-hidden h-64 bottom-4">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl " alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl" alt="..." />
            </div>
        </div>

        <div class="absolute flex top-70 -translate-x-1/2 left-1/2 space-x-4 rtl:space-x-reverse">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        </div>

        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/30 group-hover:bg-white/80 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/30 group-hover:bg-white/80 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>


    )

}