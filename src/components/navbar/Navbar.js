import React, {useState} from 'react'

function Navbar() {
    const [click,setClick]=useState(false);

    const handleClick = () => setClick(!click);
    return (
        
    <>
      <div class="h-screen w-screen" class="block md:hidden h-screen bg-cover bg-center bg-no-repeat" style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/mobile/image-hero.jpg'})`,
 
 
}}>

    
    <div class=" justify-between  pt-16 text-white text-base font-bold">
        <div class="flex justify-between px-5 w-full"> 
    
            <div>
                <img src="/desktop/logo.svg"  alt="" />
            </div>
            <div onClick={handleClick} class="z-50 pl-4">
                {click ? <i className="fas fa-times fa-lg"></i>: <i className="fas fa-bars fa-lg "></i>}
            </div>
     </div>
     <div >
             
            <div  className={click ? 'nav-menu active' : 'nav-menu'}>

            <div class="nav-links " onClick={handleClick }>About</div>
            <div class="nav-links " onClick={handleClick} >Careers</div>
            <div class="nav-links " onClick={handleClick }>Events</div>
            <div class="nav-links " onClick={handleClick} >Products</div>
            <div class="nav-links " onClick={handleClick }>Support</div >
        </div>

   

     </div>
         </div>
    <div class="  mt-28  b-red-900 ">
    <div  class="border-2 mx-auto w-11/12   font-light   p-8 text-left text-4xl  text-white">  
        <div>IMMERSIVE</div>
        <div>EXPERIENCE</div>
        <div>THAT DELIVER</div>
    </div>


    </div>
   


    
    </div>      
            
  
    <div class="h-screen w-screen" class="hidden md:block h-screen bg-cover bg-center bg-no-repeat" style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/desktop/image-hero.jpg'})`,
 
 
}}>
     

    
  
    <div class="flex justify-between px-24 pt-16 text-white text-base font-bold">
        <div> 
    
            <img src="/desktop/logo.svg" class="lg:ml-24" alt="" />
        
     </div>
        <div class="hidden md:flex space-x-3 lg:space-x-8">
            <div class="nav-links">About</div>
            <div class="nav-links">Careers</div>
            <div class="nav-links">Events</div>
            <div class="nav-links">Products</div>
            <div class="nav-links">Support</div>
        </div>

    </div>
    <div class="lg:w-1/2 lg:h-1/2 md:w-2/3  mt-28  b-red-900 lg:ml-28 ">
    <div  class="border-2 mx-auto w-11/12  lg:h-9/12  lg:w-10/12 md:m-20    font-light   p-8 text-left text-4xl md:text-6xl text-white">  
        <div>IMMERSIVE</div>
        <div>EXPERIENCE</div>
        <div>THAT DELIVER</div>
    </div>


    </div>
   
</div>







    </>
    )
}

export default Navbar
