<template>
    <div class="px-2 space-y-1">
        <div class="w-full md:mt-6">
            <span class="text-white font-Montserrat font-semibold">Últimos</span>
        </div>
        <div class="w-full flex gap-2 overflow-auto scrollbar" id="style-4">
            <div v-for="cap in 6" class="w-72 h-64 rounded-md border border-white border-opacity-10 flex flex-col items-center">
                <div class="w-full h-32 p-2 relative overflow-hidden flex justify-center items-center">
                    <div class="h-[98%] w-full rounded flex relative overflow-hidden">
                        <div class="h-4 px-2 rounded-full bg-red-600 top-0 z-10 left-0 mx-1 mt-1 flex items-center">
                            <span class="text-white text-xs font-medium font-Montserrat">Ação</span>
                        </div>
                        <div class="h-4 px-2 rounded-full bg-green-600 top-0 z-10 left-0 mx-1 mt-1 flex items-center">
                            <span class="text-white text-xs font-medium font-Montserrat">Aventura</span>
                        </div>
                        <img class="absolute -top-14" src="https://static3.mangalivre.net/capas/zEwfcCzNfElqgwy2MzwDJQ/7739/63aaf88b0eaf6_external_cover.jpg" alt="">
                    </div>
                </div>
                <div class="relative w-full -space-y-1 -mt-2">
                    <div class="w-full text-start px-2">
                        <span class="text-white font-Montserra font-semibold">Chainsaw Man</span>
                    </div>
                    <div class="w-full text-start px-2 flex items-center gap-2">
                        <span class="text-white/40 text-xs">Por: Fujimoto, Tatsuki</span>
                        <span class="rounded-full bg-success text-xs px-2 font-black text-primary font-Montserrat select-none">HOJE</span>                        
                    </div>
                    <div class=" absolute right-0 top-2 flex justify-end items-center">
                        <div class="h-full hover:w-20 hover:shadow-[-2px_0px_8px_#22ee22] transition-all w-10 select-none cursor-pointer group p-2 bg-success flex items-center justify-center rounded-l">
                            <span class="text-primary font-Montserrat font-bold text-sm group-hover:text-white group-hover:animate-pulse">Ler</span>
                        </div>
                    </div>
                </div>
                <div class="w-full space-y-0">
                    <div class="w-full h-10 flex items-center justify-center border-t border-t-white border-opacity-5 mt-4 px-2 gap-2">
                        <div v-for="item in 4" class="h-8 w-14 border border-white/5 hover:bg-success transition-all rounded-lg flex items-center justify-center cursor-pointer">
                            <span class="text-xs text-ice">140</span>
                        </div>
                    </div>
                    <div class="select-none w-full h-12 rounded-b-md bg-secondary border-t border-t-white border-opacity-5 mt-4 flex items-center justify-end px-2">
                        <div class="h-8 w-24 bg-tertiary border border-white border-opacity-5 rounded flex justify-center items-center cursor-pointer hover:bg-success hover:shadow-[-2px_0px_8px_#22ee22] transition-all hover">
                            <span class="font-Montserrat text-white/90 font-medium">Ver Todos</span>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style >
#style-4::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px #353940;
	background-color: transparent;
}

#style-4::-webkit-scrollbar
{
	width: 3px;
    height: 4px;
	background-color: transparent;
}

#style-4::-webkit-scrollbar-thumb
{
	background-color: #353940;
}
</style>