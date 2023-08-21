<template>
    <div class="h-full min-w-[56px] bg-secondary lg:w-[3%] border-r border-r-white/10 flex flex-col items-center space-y-2">
        <div class="w-full border-b border-b-white/10 py-2">
            <div class="cursor-pointer relative h-12 w-full py-2 px-2 flex justify-center items-center">
                <div class="h-9 w-full bg-success rounded-md flex items-center justify-center">
                    <svg class="fill-ice h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.713-.288T14 20v-5q0-.425-.288-.713T13 14h-2q-.425 0-.713.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.413-.588T4 19Z"/></svg>
                </div>            
                <div class="absolute h-full w-full border-r-[2px] border-r-success right-0 bg-gradient-to-l from-success/20">
                    
                </div>        
            </div>
            <div class="cursor-pointer relative h-12 w-full py-2 px-2 flex justify-center items-center">
                <div class="h-9 w-full bg-tertiary rounded-md flex items-center justify-center">
                    <svg class="fill-ice/50 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.25 3h8.25v18H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3Zm11.5 18H16v-5h5v1.75A3.25 3.25 0 0 1 17.75 21ZM21 14.5h-5v-5h5v5ZM16 8V3h1.75A3.25 3.25 0 0 1 21 6.25V8h-5ZM6 13.75c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75ZM7.25 6.5C6.56 6.5 6 7.06 6 7.75v2.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25h-3.5ZM7.5 10V8h3v2h-3ZM6 16.75c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75Z"/></svg>
                </div>            
                <!-- <div class="absolute h-full w-full border-r-[2px] border-r-success right-0 bg-gradient-to-l from-success/20">
                    
                </div>         -->
            </div>
            <div class="cursor-pointer relative h-12 w-full py-2 px-2 flex justify-center items-center">
                <div class="h-9 w-full bg-tertiary rounded-md flex items-center justify-center">
                    <svg class="fill-ice/50 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 21v-2h4v-3.1q-1.225-.275-2.188-1.038T7.4 12.95q-1.875-.225-3.138-1.637T3 8V7q0-.825.588-1.413T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.413 1.913T13 15.9V19h4v2H7Zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8Zm10 0q.9-.325 1.45-1.088T19 8V7h-2v3.8Z"/></svg>
                </div>            
                <!-- <div class="absolute h-full w-full border-r-[2px] border-r-success right-0 bg-gradient-to-l from-success/20">
                    
                </div>         -->
            </div>            
        </div>
        <div class="w-full h-full overflow-y-auto flex flex-col space-y-3" id="style-3">
            <div v-for="n in 20" class="cursor-pointer relative h-12 w-full py-2 px-2 flex justify-center space-y-4">
                <div class="h-fit w-full mb-2">
                    <img class="h-14 rounded-md" src="https://static3.mangalivre.net/capas/XSDyIvvgguN6BWfznGhGEw/2070/6247bea5d2c97_external_cover.jpg" alt="">
                </div>            
                <!-- <div class="absolute h-full w-full border-r-[2px] border-r-success right-0 bg-gradient-to-l from-success/20">
                    
                </div>         -->
            </div>    
        </div>
    </div>
</template>
<script setup>
</script>

<style scoped>
#style-3::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px #353940;
	background-color: transparent;
}

#style-3::-webkit-scrollbar
{
	width: 3px;
	background-color: transparent;
}

#style-3::-webkit-scrollbar-thumb
{
	background-color: #353940;
}
</style>