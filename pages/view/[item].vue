<template>
    <div class="flex flex-col items-center space-y-4 ">
        <div class="h-full w-full md:w-[70%] md:h-72 bg-zinc-800 bg-opacity-80 rounded relative flex justify-center items-center overflow-hidden">
            <div class="w-full h-[80%] z-10 flex items-center px-4 md:px-14 gap-4">
                <div class="max-md:hidden h-60 w-48 rounded z-10">
                    <img class="h-full w-full rounded" src="https://static3.mangalivre.net/capas/XSDyIvvgguN6BWfznGhGEw/2070/6247bea5d2c97_external_cover.jpg" alt="">
                </div>
                <div class="h-full w-full bg-primary/20 rounded">
                    <div class="select-none w-full h-14 flex items-center px-2 gap-2">
                        <div class="bg-primary/80 rounded flex items-center py-1 px-2 gap-1">
                            <span class="font-Montserrat font-bold text-success text-xs">140</span>
                            <span class="font-Montserrat text-ice font-bold text-xs">LIKES</span>
                        </div>
                        <div class="bg-red-600 rounded flex items-center px-2 gap-1">                            
                            <span class="font-Montserrat text-ice font-bold text-xs">Ação</span>
                        </div>
                        <div class="bg-green-600 rounded flex items-center px-2 gap-1">                            
                            <span class="font-Montserrat text-ice font-bold text-xs">Aventura</span>
                        </div>
                        <div class="bg-blue-600 rounded flex items-center px-2 gap-1">                            
                            <span class="font-Montserrat text-ice font-bold text-xs">Shounen</span>
                        </div>
                    </div>
                    <div class="w-full -translate-y-4 flex flex-col space-y-3">
                        <span class="dsstat-value text-ice">Dragon Ball Super</span>
                        <p class="text-ice text-sm">Nova série e continuação direta do clássico! Nessa nova serialização os Sayajins irão enfrentar mais uma vez novos inimigos com o mesmo poder de Bills ou até mesmo superiores!!!</p>
                        <div class="w-full h-20 flex items-end justify-between">
                            <div class="h-12 w-24 bg-success rounded flex items-center justify-center shadow-[0px_0px_10px_#22ee22] select-none cursor-pointer active:scale-95 transition-all">
                                <span class="font-Montserrat font-bold text-ice">Favoritar</span>
                            </div>
                            <div class="h-14 w-64 flex flex-col items-end px-4 space-y-2">
                                <span class="text-ice font-Montserrat font-medium text-xs">Encontrou algum erro?</span>
                                <div class="h-8 w-20 rounded-sm bg-tertiary border border-white/5 flex justify-center items-center cursor-pointer select-none active:scale-95 transition-all">
                                    <span class="text-ice font-Montserrat text-xs">reportar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img class="select-none absolute md:-top-[38rem] opacity-10 grayscale w-full" src="https://static3.mangalivre.net/capas/XSDyIvvgguN6BWfznGhGEw/2070/6247bea5d2c97_external_cover.jpg" alt="">
        </div>
        <div class="h-[30rem] md:h-[34rem] scrollbar overflow-y-auto w-full md:w-[70%] bg-secondary border border-white/5 rounded relative">
            <div class="w-full border-b border-b-white/5 flex items-center gap-2 sticky top-0 bg-secondary shadow drop-shadow">
                <div class="h-10 md:max-w-[10rem] rounded-tl bg-tertiary flex justify-center items-center gap-2 select-none px-2">
                    <span class="font-Montserrat text-ice font-bold bg-success/60 px-2 rounded">3562</span>
                    <span class="font-Montserrat text-ice font-bold max-md:hidden">Capítulos</span>
                </div>
                <div class="h-8 bg-tertiary rounded-tl rounded-br border border-white/5 px-2 flex items-center select-none cursor-pointer active:scale-95 transition-all">
                    <span class="text-white font-Montserrat text-xs">Ler Primeiro Capítulo</span>
                </div>
                <div class="h-8 bg-tertiary rounded-tl rounded-br border border-white/5 px-2 flex items-center select-none cursor-pointer active:scale-95 transition-all">
                    <span class="text-white font-Montserrat text-xs">Ler Último Capítulo</span>
                </div>
            </div>
            <div v-for="item in 20" class="h-12 w-full flex items-center px-2 gap-2 border-b border-b-white/5">
                <div class="h-8 px-2 bg-tertiary rounded border border-white/5 flex items-center justify-center">
                    <span class="text-ice font-Montserrat text-xs font-medium">17/08/23</span>
                </div>
                <span class="text-ice font-Montserrat text-sm">Capítulo 96</span>
                <div class="h-7 w-12 bg-tertiary rounded flex items-center justify-center select-none border border-white/5 active:scale-95 transition-all cursor-pointer">
                    <span class="text-ice font-Montserrat text-xs ">Ler</span>
                </div>
                <div class="h-7 w-7 bg-tertiary rounded flex items-center justify-center">
                    <svg class="fill-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"/></svg>
                </div>
            </div>
        </div>
        <!-- <div class="w-full h-96 bg-white">            
        </div> -->
    </div>
</template>

<script setup>
definePageMeta({
    name: 'view'
})
</script>