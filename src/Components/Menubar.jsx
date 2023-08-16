import React from 'react'

function Menubar() {
  return (
    <>
      
<div className='bg-gray-800  '>

<div className='flex items-center p-2.5 '>

    <div className=' hover:border border-white-2 flex items-center ' data-bs-toggle="offcanvas"  data-bs-target="#offcanvasExample"   aria-controls="offcanvasExample">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='fill-white ' viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"/></svg>
    <p className='text-white ml-2   ' type="button" >
 All
    
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header bg-gray-800 w-full container-fluid">
  <h1 className=' text-2xl ml-5  text-bold  '>Hello sign in</h1>

    <button type="button" className="btn-close text-white text-2xl mb-2" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
  </div>
  <div class="offcanvas-body">

    <div className="">

<h1 className=' text-2xl ml-5 text-black p-2' >Digital contact & devices</h1>
 <ul className='text-black leading-10 ml-8'>
    <li>Amozon music</li>
    <li>Kindle E-reders & book</li>
    <li>Amozon  Appstore</li>

</ul>
<h1 className=' text-2xl ml-5 text-black p-2' >Digital contact & devices</h1>
 <ul className='text-black leading-10 ml-8'>
    <li>Amozon music</li>
    <li>Kindle E-reders & book</li>
    <li>Amozon  Appstore</li>

</ul>
<h1 className=' text-2xl ml-5 text-black p-2' >Programs & Features</h1>
 <ul className='text-black leading-10 ml-8'>
    <li>Gift & Cards</li>
   

</ul>

    </div>
    
  </div>
</div>
    
    
    
    </p>



    </div>


    <ul className='text-white flex ml-10 gap-4 font-normal'>
        <li>Today's Deal</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Card</li>
        <li>Sell</li>
    </ul>
</div>




</div>














    </>
  )
}

export default Menubar
