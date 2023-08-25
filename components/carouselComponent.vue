<template>
    <div class="select-none h-full">
        <Swiper :slidesPerView="'auto'" :spaceBetween="30" :pagination="{
            clickable: true,
        }" :modules="[SwiperPagination]" :autoplay="{
            delay: 2000,
            disableOnInteraction: true,
        }" class="h-full w-full">
            <Swiper-slide>
                <div class="flex h-36 md:h-full gap-2">
                    <div class="bg-no-repeat bg-cover w-full md:w-[65.5%] md:max-h-[384px] bg-[url('https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b5de387d9b810e125fd674589819aa16.jpe')]">
                    </div>
                    <div class="max-md:hidden h-full flex-1 space-y-2">
                        <div class="relative cursor-pointer h-[50%] w-full rounded-md flex flex-col">
                            <div class="absolute rounded z-0 h-full w-full bg-cover opacity-90 bg-no-repeat bg-[url('https://sucodemanga.com.br/wp-content/uploads/2023/03/The-Girl-I-Like-Forgot-Her-Glasses-thumb.jpg')]">                                
                            </div>
                            <div class="h-full rounded bg-zinc-900/70 backdrop-blur-sm w-full z-10 p-2">
                                <span class="dsstat-value text-white">The Girl I Like Forgot</span>
                                <p class="text-white font-Montserrat">A série foi publicada pela primeira vez na conta do Twitter de Fujichika em abril de 2018 antes de ser publicada na revista Monthly Gangan Joker da Square Enix em novembro do mesmo ano.</p>                                
                            </div>
                        </div>
                        <div class="relative h-[50%] w-full rounded-md flex flex-col">
                            <div class="absolute rounded z-0 h-full w-full bg-cover opacity-90 bg-tertiary">
                            </div>
                            <div class="h-full rounded bg-zinc-900/70 backdrop-blur-sm w-full z-10 px-2">
                                <div class="w-full flex justify-start">
                                    <span class="dsstat-value text-[1.8rem] text-white">Ultimos Capitulos</span>
                                </div>
                                <div class="flex justify-start items-center w-full mt-1 gap-8">
                                    <div class="relative h-24 w-16" v-for="item in 5">
                                        <div class="-top-2 -right-3 rounded w-11 h-7 bg-primary absolute flex items-center justify-center select-none">
                                            <span class="text-white font-Montserrat font-semibold">15</span>                                            
                                        </div>
                                        <img class="rounded" src="https://cdn.kobo.com/book-images/f0b48d44-abe9-4812-a421-51e29855143d/1200/1200/False/the-girl-i-like-forgot-her-glasses-06.jpg" alt="">                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Swiper-slide>
            <!-- <Swiper-slide>
                <div class="bg-no-repeat bg-contain h-full w-full bg-[url('https://static.crunchyroll.com/fms/desktop_large/1050x350/69232114-9605-4289-bd73-de8f7138821c.png')]">
                </div>
            </Swiper-slide>
            <Swiper-slide>
                <div class="bg-no-repeat bg-contain h-full w-full bg-[url('https://static.crunchyroll.com/fms/desktop_large/1050x350/e098eceb-9338-46d0-8e36-b09a63b77b13.png')]">
                </div>
            </Swiper-slide> -->
        </Swiper>
    </div>
</template>
<script setup>
</script>