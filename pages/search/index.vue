<template>
    <div class="space-y-2 h-full">
        <div class="w-full h-20 bg-secondary p-2 space-y-1 rounded">
            <span class="text-ice font-Montserrat font-sm font-semibold">Categorias</span>
            <div class="w-full h-12 flex gap-2">
                <div class="h-8 px-2 w-max bg-tertiary rounded border border-white/5 text-ice font-bold text-sm flex items-center select-none cursor-pointer active:scale-95 transition-all">
                    <span>Ação</span>
                </div>
                <div class="h-8 px-2 w-max bg-tertiary rounded border border-white/5 text-ice font-bold text-sm flex items-center select-none cursor-pointer active:scale-95 transition-all">
                    <span>Aventura</span>
                </div>
                <div class="h-8 px-2 w-max bg-tertiary rounded border border-white/5 text-ice font-bold text-sm flex items-center select-none cursor-pointer active:scale-95 transition-all">
                    <span>Drama</span>
                </div>
            </div>
        </div>
        <div class="h-[84%] scrollbar w-full overflow-y-auto bg-secondary grid max-md:grid-cols-2 md:grid-cols-8 gap-2 py-2 px-2 max-md:pb-20">
            <div v-for="item in 20" class="relative h-full">
                <img class="aspect-[3/4] rounded" src="https://static3.mangalivre.net/capas/lRAq3QFSQQWlYp4-XojAOw/3364/6037ed57c7fd3external_cover.jpg" alt="">                
                <div class="w-full">
                    <span class="font-Montserrat text-ice text-sm">Kimetsu no Yaiba</span>
                    <div class="flex items-center gap-2">
                        <div class="cursor-pointer select-none active:scale-95 transition-all bg-tertiary h-8 w-16 rounded flex items-center justify-center">
                            <span class="text-ice text-xs">cap 200</span>
                        </div>                        
                        <div class="cursor-pointer select-none active:scale-95 transition-all bg-tertiary h-8 w-16 rounded flex items-center justify-center">
                            <span class="text-ice text-xs">cap 200</span>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    name: 'search'
})
</script>