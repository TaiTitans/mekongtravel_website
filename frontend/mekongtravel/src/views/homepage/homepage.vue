<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<RouterView />
<template>
    <header>
        <nav class="bg-white border-gray-200 py-2.5">
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" class="flex items-center">
                    <img src="../../assets/img/favicon.png" class="h-6 mr-3 sm:h-9" alt="MekongTravel Logo" />
                    <span
                        class="self-center text-xl font-semibold whitespace-nowrap dark:text-slate-600">MekongTravel</span>
                </a>
                <div class="flex items-center lg:order-2">
                    <div class="hidden mt-2 mr-4 sm:inline-block">
                        <span></span>
                    </div>

                    <div class="flex space-x-2">
    <a href="" class="text-white bg-cyan-500 hover:bg-cyan-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5">
        <router-link to='/login'>Đăng nhập</router-link>
    </a>
    <a href="" class="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5">
        <router-link to='/register'>Đăng ký</router-link>
    </a>
</div>

                    <button data-collapse-toggle="mobile-menu-2" type="button"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="true">
                        <span class="sr-only">Mở menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-slate-600 hover:underline"
                                aria-current="page">Trang chủ</a>
                        </li>
                        <li>
                            <a href="#"
                                class="hover:underline block py-2 pl-3 pr-4 text-gray-400 border-b border-gray-100 hover:text-slate-600 lg:hover:text-slate-600 lg:border-0 lg:hover:text-slate-600 lg:p-0">Địa
                                điểm</a>
                        </li>
                        <li>
                            <a href="#"
                                class="hover:underline block py-2 pl-3 pr-4 text-gray-400 border-b border-gray-100 hover:text-slate-600 lg:hover:text-slate-600 lg:border-0 lg:hover:text-slate-600 lg:p-0">Ẩm
                                thực</a>
                        </li>
                        <li>
                            <a href="#"
                                class="hover:underline block py-2 pl-3 pr-4 text-gray-400 border-b border-gray-100 hover:text-slate-600 lg:hover:text-slate-600 lg:border-0 lg:hover:text-slate-600 lg:p-0">Quà
                                tặng</a>
                        </li>
                        <li>
                            <a href="#"
                                class="hover:underline block py-2 pl-3 pr-4 text-gray-400 border-b border-gray-100 hover:text-slate-600 lg:hover:text-slate-600 lg:border-0 lg:hover:text-slate-600 lg:p-0">Khuyến
                                mãi</a>
                        </li>
                        <li>
                            <a href="#"
                                class="hover:underline block py-2 pl-3 pr-4 text-gray-400 border-b border-gray-100 hover:text-slate-600 lg:hover:text-slate-600 lg:border-0 lg:hover:text-slate-600 lg:p-0">Liên
                                hệ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
