import React from "react";


function Home() {
    return (
        <div class="py-10 h-screen bg-gray-300 px-2">
    <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
        <div class="md:flex">
            <div class="w-full p-4">
                <div class="relative"> <input type="text" class="w-full h-12 rounded focus:outline-none px-3 focus:shadow-md" placeholder="Search..."/>  </div>
                <ul>
                    <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/aq39RMA.jpg" width="40" height="40" class="rounded-full"/>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Jessica Koel</span> <span class="text-sm text-gray-400 truncate w-32">Hey, Joel, I here to help you out please tell me</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-300">11:26</span> </div>
                    </li>
                    <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/eMaYwXn.jpg" width="40" height="40" class="rounded-full"/>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Komeial Bolger</span> <span class="text-sm text-gray-400 truncate w-32">I will send you all documents as soon as possible</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-300">12:26</span> </div>
                    </li>
                    <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/zQZSWrt.jpg" width="40" height="40" class="rounded-full"/>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Tamaara Suiale</span> <span class="text-sm text-gray-400 truncate w-32">Are you going to business trip next week</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-300">8:26</span> </div>
                    </li>
                    <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/agRGhBc.jpg" width="40" height="40" class="rounded-full"/>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Sam Nielson</span> <span class="text-sm text-gray-400 truncate w-32">I suggest to start new business soon</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-300">7:16</span> </div>
                    </li>
                    <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/uIgDDDd.jpg" width="40" height="40" class="rounded-full"/>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Caroline Nexon</span> <span class="text-sm text-gray-400 truncate w-32">We need to start new reseatch center.</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-300">9:26</span> </div>
                    </li>
                    <li class="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
                        <div class="flex ml-2"> <img src="https://i.imgur.com/tT8rjKC.jpg" width="40" height="40" class="rounded-full"/>
                            <div class="flex flex-col ml-2"> <span class="font-medium text-black">Patrick Koeler</span> <span class="text-sm text-gray-400 truncate w-32">May be yes</span> </div>
                        </div>
                        <div class="flex flex-col items-center"> <span class="text-gray-300">3:26</span> </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    )
}

export default Home