<template>
    <div :data-theme="theme" class="h-screen bg-primary">
        <div class="relative h-full overflow-hidden">
            <HeaderComponent />
            <div class="flex h-full w-full justify-center">
                <sidemenuComponent class="hidden lg:block" />
                <div class="flex-1 p-1 md:p-2">
                    <NuxtPage />                    
                </div>
                <mobileMenuComponent class="md:hidden fixed bottom-0"/>
                <sidemessageComponent class="hidden md:block" />
            </div>
        </div>
    </div>
</template>

<script setup>
    const theme = 'mytheme'
</script>