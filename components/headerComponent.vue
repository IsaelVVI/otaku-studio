<template>
    <div class="h-16 w-full flex justify-between bg-secondary border-b border-b-white/10">
        <div class="h-full min-w-[56px] lg:w-[3%] border-r border-r-white/10 flex justify-center items-center">
            <svg class="max-lg:block hidden h-8 w-8 fill-ice/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/></svg>
            <img class="hidden lg:block " src="https://cdn.discordapp.com/attachments/338040981322727437/1142874859861458954/OTAKU_STUDIO.png" alt="">
        </div>
        <div class="flex-1 hidden md:flex items-center justify-end px-4">
            <div class="h-10 md:w-[50%] lg:w-[22%] flex items-center p-2 bg-primary/90 rounded border border-white/10">
                <svg class="h-5 w-5 stroke-tertiary cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"/></svg>
                <input class="bg-transparent text-xs h-full outline-none text-ice flex-1" type="text" placeholder="Digite algo para pesquisar">                
            </div>
        </div>
        <div class="min-w-[158px] w-[10%] p-2 md:border-l md:border-l-white/10 flex gap-4 items-center justify-end md:justify-center">
            <div class="h-10 md:h-8 w-28 rounded-md border border-white/5 bg-tertiary flex justify-center items-center gap-2 cursor-pointer select-none hover:bg-tertiary/70 active:scale-95 transition-all">
                <svg class="fill-success h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M310.375 16.75L89.405 75.72l58.126 50.905L282.563 90.28l2.032-.53l25.78-73zm17.063 7.844l-27.157 76.812l91.69 91.875l95.624-8.78L327.438 24.594zm-41.813 12.062l-8.594 33.657c-.28-15.516-38.03-17.018-107.56-4.376l116.155-29.28zm51.063 14.625l123.5 123.407l-58.844 7.563c16.2-21.37-32.277-91.112-64.656-130.97zM74.75 87.72L15.594 308.405l79-31.47l37.28-139.155L74.75 87.72zm207.438 22l-133.032 35.81l-35.72 133.376l97.25 97.53l133.064-35.81l35.72-133.376l-97.283-97.53zm-201.72 5.686l32.844 30.5l-30.156 118.97l-39.03 15.812c50.817-30.543 65.667-130.132 36.343-165.282zm195.876 14.78L359 213.377l-30.156 113.81l-44.688 11.97c119.527-107.872-34.816-238.375-131.5-140.875l9.875-37.405l113.814-30.688zM490.564 203l-92.877 8.53l-35.968 134.19l71.342 71.842L490.563 203zm-17.283 13.875L444.03 333.03c6.73-68.874-.03-90.85-30.655-111.5l59.906-4.655zm-371.155 77.188L20.22 326.688l161.75 161.468l17.31-96.72l-97.155-97.373zm.094 20l78.124 82.437l-7.438 61.375c-5.23-44.565-28.34-85.92-70.687-143.813zm246.124 44.687l-130.53 35.125l-17.564 98.188l221.688-59.157l-73.594-74.156zm18.625 42.5l24.28 24.844l-115.22 32.72c61.28-26.446 83.34-37.418 90.94-57.564z"/></svg>
                <span class="font-Montserrat font-medium text-ice text-xs truncate">2345 CR</span>
            </div>
            <div class="relative h-10 md:h-8 w-10 md:w-8 rounded-md bg-tertiary border border-white/5 flex justify-center items-center cursor-pointer select-none hover:bg-tertiary/70 active:scale-95 transition-all">
                <span class="text-[0.6rem] font-Montserrat font-medium absolute">2</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/>
                        <path class="fill-success" d="M15 19a2 2 0 0 1-1.85 1.995L13 21h-2a2 2 0 0 1-1.995-1.85L9 19h6ZM12 2a7 7 0 0 1 6.996 6.76L19 9v3.764l1.822 3.644a1.1 1.1 0 0 1-.869 1.586l-.115.006H4.162a1.1 1.1 0 0 1-1.03-1.487l.046-.105L5 12.764V9a7 7 0 0 1 7-7Z"/>
                    </g>
                </svg>
            </div>
        </div>
        <div class="max-md:hidden md:border-l md:border-l-white/10 max-md:flex-1 min-w-[57px] lg:w-[3.67%] flex justify-center">
            <div class="w-full min-w-[50px] px-2 hidden md:flex justify-center items-center">                
                <div class="relative">
                    <div class="absolute z-40 -top-2 -left-2 h-5 w-5">
                        <div class="dsmask dsmask-hexagon relative z-20 h-5 w-5 bg-tertiary">                            
                            <div class="w-full water relative transition-all flex justify-center items-center">
                                <span class="font-Montserrat text-white absolute text-xs font-medium">2</span>
                            </div>
                        </div>
                    </div>
                    <img class="h-10 w-10 rounded-lg shadow drop-shadow cursor-pointer active:scale-95 transition-all" src="https://play-lh.googleusercontent.com/1_TsO5l6RzSG_PFR8zKZpUyCxo38zOPsi8D2Km9VBfqg2eoQeUWJmSJTutnb7rPmNnA" alt="">                    
                </div>
            </div>
        </div>
    </div>    
</template>

<script setup>
</script>

<style setup>
.water{
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 50%;
    /* border: #22ee22 solid 2px; */
    position: relative;
    box-shadow: inset 0 0 20px 0 #22ee22, 0 0 20px 0 #22ee22;
    overflow: hidden;
}
.water:before, .water:after{
    content:'';
    position: absolute;
    width: 180%;
    height: 180%;    
    left: 50%;
}
.water:before{
    border-radius: 45%;
    background: #353940;
    animation:wave 8s linear infinite;
}
.water:after{
    border-radius: 35%;
    /* background:rgba(255,255,255,.3); */
    animation:wave 8s linear infinite;
}
@keyframes wave{
    0%{
        transform: translate(-50%, -50%) rotate(0);
        top: -35%;
    }
    50%{
    	top: -40%;
    }
    100%{
        transform: translate(-50%, -50%)  rotate(360deg);
        top: -35%;
    }
}
</style>