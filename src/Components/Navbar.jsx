import React from 'react'

import logo from '../amaz/brand.png'
import basket from '../amaz/basket cart.png'



function Navbar() {
  return (
    <>

<div className='bg-black container-fluid w-full'>
<div className="main flex items-center  ">
    {/* logo div */}
    <div className="image"><img src={logo} alt="" className='w-24' /></div>

{/* country div */}
<div >
    <p  className='text-gray-400 text-sm text-center ml-3'>Deliver to </p>
  

    <h5 className='text-white text-lg font-bold flex' > <span>
<svg className='fill-white flex' width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>  Pakistan</h5>
</div>


{/* inp field */}

<div className='ml-5'>

<div class="dropdown flex">
  <button className="bg-gray-300  rounded-l-md  p-1.5 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  All
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Computer</a></li>
    <li><a class="dropdown-item" href="#">Laptop</a></li>
    <li><a class="dropdown-item" href="#">Electronics</a></li>
  </ul>
<input type="text" className='h-9 ' placeholder=' Search Amazon' style={{width:"40rem"}} name="" id="" />
<i>
<svg  viewBox="0 0 24 24"  className='h-9 w-12 p-1 rounded-r-md  bg-yellow-500 ' xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path d="m15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/></svg></i>
</div>




</div>

{/* inp close */}

{/* country flag start */}

<div class="dropdown flex mt-2">
<i>
<svg  viewBox="0 0 301 201"  className='h-6 w-6 mt-1.5 ml-6 ' xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m.5.5h300v200h-300z" fill="#fff"/><path d="m75.5.5h225v200h-225z" fill="#01411c"/><circle cx="188" cy="100.5" fill="#fff" r="60"/><circle cx="203.337" cy="86.868" fill="#01411c" r="55"/><path d="m209.879 55.603 25.274 28.433-37.16-8.147 34.852-15.251-19.232 32.824z" fill="#fff"/></g></svg>
</i>
  <button className="text-white font-bold  rounded-l-md  p-1.5 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
Pk
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Arabic</a></li>
    <li><a class="dropdown-item" href="#">Urdu</a></li>
    <li><a class="dropdown-item" href="#">Chineses</a></li>
  </ul>

</div>



{/* country flag close */}


{/* Acount Itmes Start */}


<div  className='ml-3'>
    <p  className='text-white  text-sm text-left'>Hello,Sign in <br /> <span className='text-white text-md font-bold flex  leading-3	' >
    
    
    <div class="dropdown ">

  <button className="text-white font-bold  rounded-l-md   dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Account & List
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Arabic</a></li>
    <li><a class="dropdown-item" href="#">Urdu</a></li>
    <li><a class="dropdown-item" href="#">Chineses</a></li>
  </ul>

</div>
    
    </span>  </p>
  
</div>


{/* Account Itmes End */}


{/* order  section start */}


<div  className='ml-3'>
    <p  className='text-white  text-sm text-left'>Returns <br /> <span className='text-white text-md font-bold flex leading-3	 ' >
    
    &Orders
    
    </span>  </p>
  
</div>

{/* Order section end */}

{/* basket section */}

<i className='flex '>
<svg height="32" className='fill-white ml-5 ' viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m31.739 8.875c-.186-.264-.489-.422-.812-.422h-21.223l-1.607-5.54c-.63-2.182-2.127-2.417-2.741-2.417h-4.284c-.549 0-.993.445-.993.993s.445.993.993.993h4.283c.136 0 .549 0 .831.974l5.527 20.311c.12.428.511.724.956.724h13.499c.419 0 .793-.262.934-.657l4.758-14.053c.11-.304.064-.643-.122-.907zm-6.269 13.631h-12.046l-3.161-12.066h19.253zm-1.97 3.998c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5zm-9 0c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5z"/></svg>
<p className='text-white mt-2 font-bold'>Cart</p>
</i>

{/* basket section End */}





</div>
</div>




      
    </>
  )
}

export default Navbar
