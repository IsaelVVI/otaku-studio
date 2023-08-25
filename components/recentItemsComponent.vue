<template>
    <div class="w-full">
        <div class="w-full flex items-center justify-between">
            <span class="text-white font-semibold font-Montserrat">Populares</span>
            <span class="text-ice font-Montserrat">ver mais</span>
        </div>
        <Swiper :slidesPerView="quantitySliders()" :spaceBetween="30" class="h-full w-full">
            <Swiper-slide class="select-none" v-for="item in 20" :key="item">
                <div class="w-full rounded bg-cover bg-no-repeat">
                    <img class="rounded cursor-pointer hover:grayscale hover:scale-95 hover:animate-pulse hover:shadow-[0px_0px_5px_#22ee22]"
                        src="https://static3.mangalivre.net/capas/XSDyIvvgguN6BWfznGhGEw/2070/6247bea5d2c97_external_cover.jpg"
                        alt="">
                </div>
            </Swiper-slide>
        </Swiper>
    </div>
</template>
<script setup>


const quantitySliders = () => {
    if (useDevice().isMobile) {
        return 3
    } else {
        return 10
    }
}
</script>