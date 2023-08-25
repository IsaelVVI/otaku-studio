<template>
    <div :class="side_message ? '': 'lg:w-[3.67%]'" class="md:border-l h-full md:border-l-white/10 max-md:flex-1 min-w-[57px] flex flex-col items-center transition-all duration-200">
        <div class="relative h-full bg-secondary w-full">
            <div @click="side_message = !side_message" :class="side_message ? 'scale-125 shadow-success/80 shadow-[0px_0px_2px]' : 'border border-white/10'" class="absolute -top-3 -left-3 h-5 w-5 rounded bg-tertiary cursor-pointer active:scale-95 transition-all z-50">
                <svg v-if="!side_message" class="stroke-ice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7l-5 5l5 5"/></svg>
                <svg v-else class="stroke-success animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7l-5 5l5 5"/></g></svg>
            </div>
            <div :class="side_message ? 'h-8' : 'h-7'" class="w-full flex justify-center items-center bg-primary/70 border-b border-b-white/10 px-2 select-none transition-all">
                <span v-if="!side_message" class="text-[0.55rem] font-Montserrat font-medium text-white">Mensagens</span>
                <div v-else class="w-full flex items-center">                    
                    <input class="bg-transparent text-xs h-full outline-none text-ice flex-1 pl-2" type="text" placeholder="Mensagens">                                    
                    <svg class="h-5 w-5 stroke-tertiary cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"/></svg>
                </div>
            </div>
            <div class="px-2">
                <div :class="side_message ? 'justify-start hover:bg-white/5' : 'justify-center'" class="h-12 w-full min-w-[50px] select-none cursor-pointer px-2 hidden md:flex items-center mt-2 rounded">
                    <div class="relative">
                        <div class="absolute z-40 -top-1 -left-2 h-5 w-5">
                            <div class="relative z-20 h-3 w-4 bg-success animate-pulse shadow rounded flex justify-center items-center">
                                <span class="text-xs font-semibold">1</span>
                            </div>
                        </div>
                        <div class="h-10 w-10 rounded-lg shadow drop-shadow cursor-pointer active:scale-95 transition-all bg-[url('https://images.alphacoders.com/131/1311951.jpg')] bg-no-repeat bg-cover bg-center">
                        </div>
                        <div class="h-3 w-3 rounded-full bg-success border border-zinc-950/10 absolute -right-1 -bottom-1">
                        </div>
                    </div>
                    <div v-if="side_message" class="w-44 h-10 pl-2 transition-all">
                        <div class="flex justify-between items-center">
                            <span class="text-white text-sm font-Montserrat font-medium">Fulano</span>
                            <span class="text-xs text-success">23 min</span>
                        </div>
                        <div class="truncate">
                            <span class="text-white/50 text-xs">e awe! fulano né teu nome?</span>                        
                        </div>
                    </div>
                </div>                     
                <div :class="side_message ? 'justify-start hover:bg-white/5' : 'justify-center'" class="h-12 w-full min-w-[50px] select-none cursor-pointer px-2 hidden md:flex items-center mt-2 rounded">
                    <div class="relative">
                        <div class="absolute z-40 -top-1 -left-2 h-5 w-5">
                            <div class="relative z-20 h-3 w-4 bg-success animate-pulse shadow rounded flex justify-center items-center">
                                <span class="text-xs font-semibold">1</span>
                            </div>
                        </div>
                        <div class="h-10 w-10 rounded-lg shadow drop-shadow cursor-pointer active:scale-95 transition-all bg-[url('https://criticalhits.com.br/wp-content/uploads/2022/04/My-Dress-Up-Darling-anime-manga.jpg')] bg-no-repeat bg-cover bg-center">
                        </div>
                        <div class="h-3 w-3 rounded-full bg-success border border-zinc-950/10 absolute -right-1 -bottom-1">
                        </div>
                    </div>
                    <div v-if="side_message" class="w-44 h-10 pl-2 transition-all">
                        <div class="flex justify-between items-center">
                            <span class="text-white text-sm font-Montserrat font-medium">Beltrano</span>
                            <span class="text-xs text-success">23 min</span>
                        </div>
                        <div class="truncate">
                            <span class="text-white/50 text-xs">Já leu o cap de ontem??</span>                        
                        </div>
                    </div>
                </div>                     
            </div>
        </div>
    </div>
</template>
<script setup>
const side_message = ref(false)
</script>