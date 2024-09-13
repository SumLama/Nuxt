<script setup>
</script>
<template>
    <div class="h-full">
        <div class="grid grid-cols-2 justify-items-center my-4 -z-10 h-90 w-full items-center">
            <div class="text-white justify-self-end pr-32">
                <h1 class="text-2xl">Hello, I'm Lorem Ipsum,</h1>
                <h1 class="text-2xl">Web Developer</h1>
            </div>
            <div class="justify-self-start">
                <div class="h-80 w-80 bg-slate-900 bg-transparent border-4 color absolute top-40">
                </div>
                <div class="h-40 w-40 color border-2 relative top-15 left-[100%] z-20 overflow-clip">
                    <img src="https://images.pexels.com/photos/28082020/pexels-photo-28082020/free-photo-of-man-standing-in-green-jacket.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        class="object-fit">
                </div>
                <div class="h-24 w-24 color background relative z-10 -top-20 left-[160%] rounded-full border-2">
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center mt-56">
            <h1 class="text-2xl text-center text-white mb-8">Projects</h1>
            <div class="grid grid-cols-2 gap-20 justify-center">
                <div v-for="i in 6"  class=" h-[400px] w-[350px] overflow-clip border-[1px] rounded-md border-blue-50 text-white">
                    <ul class="p-6 pt-7">
                        <li>
                            <img src="https://images.pexels.com/photos/6827340/pexels-photo-6827340.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </li>
                        <li>
                            <h2 class="text-xl text-bold">Furniture store landing page</h2>
                        </li>
                        <li class="" >
                            <p>Responsive HTML/CSS layout for online furniture store</p>
                        </li>
                        
                        <li class="flex gap-5 item items-end">
                            <LivePreviewBtn/>
                        
                      
                            <GitHubLinkBtn/>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

