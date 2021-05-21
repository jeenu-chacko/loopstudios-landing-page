import React from 'react'

function ContentSection() {
    return (
        <>
     
     <div class="p-10 lg:p-28 ">
           <div class="ml-16 hidden lg:block">
            <img src="/desktop/image-interactive.jpg" alt=""/>
    </div>

    

    <div class="hidden lg:flex justify-between">
        <div>   </div>
            <div class="w-1/2 text-left z-50  bg-white   p-20 -mt-80">
        <div class="text-4xl ">THE LEADER IN <br/>INTERACTIVE VR</div><br/>
          <p class="text-gray-600 font-medium">
          Founded in 2011, Loopstudios has been producing world-class virtual reality 
          projects for some of the best companies around the globe. Our award-winning 
          creations have transformed businesses digital experiences that bind 
          to their brand.
        </p>
    </div>

    </div>



        <div class="flex flex-col lg:hidden justify-between">
      <img src="/mobile/image-interactive.jpg" alt=""/>
            <div class=" text-left pt-5  bg-white  ">
        <div class="text-2xl ">THE LEADER IN INTERACTIVE VR</div>
          <p class="pt-5 text-gray-600 font-medium">
          Founded in 2011, Loopstudios has been producing world-class virtual reality 
          projects for some of the best companies around the globe. Our award-winning 
          creations have transformed businesses digital experiences that bind 
          to their brand.
        </p>
    </div>

    </div>




     </div>

  


           
        </>
    )
}

export default ContentSection
