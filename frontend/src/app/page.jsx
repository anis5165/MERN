//rafce
import React from 'react'

const page = () => {

  //other functions

  return (
    <div>
      <h2> <header class="">
        <nav class="bg-[black] flex justify-between items-center font-semibold text-xl p-4 text-white">
            <div class="ml-24 text-3xl">Swipe <span class="text-[#179BAE]">Up</span></div>
            <ul class="flex gap-5">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div class="mr-24 bg-[#179BAE] p-2 rounded-full "><button>Sign Up</button></div>
        </nav>
        <div class="container mt-16 text-center font-semibold max-w-[65rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <pre class="p-3 border border-gray-200 rounded-full"><button>PRO release - Join to waitlist</button> <i class="fa-solid fa-arrow-right"></i></pre>
            <div class="main text-7xl font-bold">Let's Build <span class="text-[#179BAE]">Together</span></div>
            <p class="text-2xl mt-5">Preline UI is an open-source set of prebuilt UI components, ready-to-use examples and Figma design system based on the utility-first Tailwind CSS framework.</p>
            <div><button class="mt-5 mr-5 bg-[#179BAE] p-3 rounded-lg">Get Started <i class="fa-solid fa-chevron-right"></i></button> <button class="p-2.5 border border-gray-200 rounded-lg">$ npm i preline <i class="fa-regular fa-clipboard"></i></button></div>
        </div>
    </header></h2>
    </div>
  )
}

export default page