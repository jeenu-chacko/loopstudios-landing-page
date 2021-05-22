import React from 'react'

function Gallery() {
    return (
        <>
            
    <div class="hidden lg:block p-20">
    <div class="flex lg:flex-row lg:justify-between flex-cols">
        <div class="text-2xl md:text-4xl">
      <h1>OUR CREATIONS</h1>
      
        </div>
        <div>
        <button class="border px-4 py-2 transition duration-200 transform hover:-translate-y-1 hover:scale-105 border-black">SEE ALL</button>
        </div>
    </div>
     <div class="hidden lg:grid lg:grid-cols-3 lg:gap-5 lg:p-10 mx-auto">
     
        <img src="/desktop/image-deep-earth.jpg" class="bg-auto transition duration-500 transform hover:-translate-y-1 hover:scale-110"/>
        <img src="/desktop/image-from-above.jpg" class="transition duration-500 transform hover:-translate-y-1 hover:scale-110"/>
        <img src="/desktop/image-night-arcade.jpg" class="transition duration-500 transform hover:-translate-y-1 hover:scale-110"/> 
        <img src="/desktop/image-pocket-borealis.jpg" class="transition duration-500 transform hover:-translate-y-1 hover:scale-110"/>
        <img src="/desktop/image-soccer-team.jpg" class="transition duration-500 transform hover:-translate-y-1 hover:scale-110"/>
        <img src="/desktop/image-curiosity.jpg" class="transition duration-500 transform hover:-translate-y-1 hover:scale-110"/>
      
    </div>

    
    
    
    </div>
    <div class="text-xl p-2 lg:hidden">
      <h1>OUR CREATIONS</h1>
      
        </div>
   <div class="grid gap-4 justify-center grid-flow-row lg:hidden p-3">

        <img src="/mobile/image-deep-earth.jpg" 
        class="transition duration-500 transform hover:-translate-y-1 hover:scale-110"/> 
        <img src="/mobile/image-from-above.jpg" class="transition duration-500 transform hover:-translate-y-1 hover:scale-110"/> 

        <img src="/mobile/image-night-arcade.jpg" class="transition duration-500 transform hover:-translate-y-1 hover:scale-110"/>

        <img src="/mobile/image-soccer-team.jpg" class="transition duration-500 transform hover:-translate-y-1 hover:scale-110"/>
        <img src="/mobile/image-curiosity.jpg" class="transition duration-500 transform hover:-translate-y-1 hover:scale-110"/>

        <img src="/mobile/image-grid.jpg" class="transition duration-500 transform hover:-translate-y-1 hover:scale-110"/>
        <img src="/mobile/image-fisheye.jpg" class="transition duration-500 transform hover:-translate-y-1 hover:scale-110"/>
    

    <div class="p-4">
      <button class="border px-4 py-2 transition duration-200 transform hover:-translate-y-1 hover:scale-105 border-black">SEE ALL</button>
    </div>
 </div>


        </>
    )
}
export default Gallery
