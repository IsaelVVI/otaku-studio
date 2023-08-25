<template>
    <div class="h-full w-full bg-primary flex flex-col space-y-2">
        <div class="md:h-80 w-full">
            <carouselComponent/>            
        </div>
        <div class="h-56 px-2">
            <RecentItemsComponent />
        </div>
        <div class="h-full w-full">
            <LastItemsComponents />
        </div>
    </div>    
</template>
<script setup>
definePageMeta(() => {
    
})
</script>