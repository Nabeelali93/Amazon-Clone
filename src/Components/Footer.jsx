import React from 'react'
import logo from '../amaz/brand-removebg-preview (1).png'



function Footer() {

const scroll1 =()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });

}


  return (
    <div>
      
      {/* Back to top section */}
  <div
    class="bg-gray-600 text-white  p-3 text-center font-bold dark:bg-neutral-700 dark:text-neutral-200">
<button onClick={()=>scroll1()}>Back to top   
</button> 
  </div>


      <footer
  class="bg-gray-700  text-white   lg:text-left p-10">
  <div class="container p-6 ">
    <div class="grid md:grid-cols-2 lg:grid-cols-4">


      {/* <!--First links section--> */}
      








      <div class="mb-6 ">
        <h5
          class="mb-2.5 font-bold uppercase   dark:text-neutral-200">
                Get to Know Us

        </h5>

        <ul class="mb-0 list-none">
          <li>
            <a href="#!" class=" dark:text-neutral-200">Careers</a>
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200"  >Blog</a>
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200">About Amazon</a >
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200">Investor Relations</a >
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200"> Amazon Devices</a >
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200"> Amazon Science</a >
          </li>
         

        </ul>
      </div>

      {/* <!--Second links section--> */}
      <div class="mb-6">
        <h5
          class="mb-2.5 font-bold uppercase  dark:text-neutral-200">
Make Money with Us
        </h5>


	




        <ul class="mb-0 list-none">
          <li>
            <a href="#!" class=" dark:text-neutral-200" >Sell products on Amazon</a>
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200" >Sell on Amazon Business</a>
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200"  >Sell apps on Amazon</a >
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200" >Become an Affiliate</a >
          </li>

          <li>
            <a href="#!" class=" dark:text-neutral-200" >Advertise Your Products</a >
          </li>

          <li>
            <a href="#!" class=" dark:text-neutral-200" >Self-Publish with Us</a >
          </li>

          <li>
            <a href="#!" class=" dark:text-neutral-200" >Host an Amazon Hub</a >
          </li>

          <li>
            <a href="#!" class=" dark:text-neutral-200" >›See More Make Money with Us</a >
          </li>
        </ul>
      </div>

      {/* <!--Third links section--> */}
      <div class="mb-6">
        <h5
          class="mb-2.5 font-bold uppercase  dark:text-neutral-200">
        Amazon Payment Products
        </h5>

	







        <ul class="mb-0 list-none">
          <li>
            <a href="#!" class=" dark:text-neutral-200"  >Amazon Business Card</a >
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200" >Shop with Points</a>
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200">Reload Your Balance</a>
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200" >Amazon Currency Converter</a>
          </li>
        </ul>
      </div>

      {/* <!--Fourth links section--> */}
      <div class="mb-6">
        <h5
          class="mb-2.5 font-bold uppercase  dark:text-neutral-200">
        Let Us Help You
        </h5>

	








        <ul class="mb-0 list-none">
          <li>
            <a href="#!" class=" dark:text-neutral-200" >Amazon and COVID-19</a >
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200">Your Account</a >
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200" >Your Orders</a >
          </li>
          <li>
            <a href="#!" class=" dark:text-neutral-200"  >Shipping Rates & Policies</a >
          </li>

          <li>
            <a href="#!" class=" dark:text-neutral-200"  >Returns & Replacements</a >
          </li>

          <li>
            <a href="#!" class=" dark:text-neutral-200"  >Manage Your Content and Devices</a >
          </li>

          <li>
            <a href="#!" class=" dark:text-neutral-200"  >Amazon Assistant</a >
          </li>

          <li>
            <a href="#!" class=" dark:text-neutral-200"  >Help</a >
          </li>




        </ul>
      </div>
    </div>
  </div>

</footer>



<div className="bg-gray-600 flex     p-4 text-center font-bold justify-center">

<img className='w-24  ' src={logo} alt="" />

<div class="flex items-center ml-10 ">
            <button
              type="submit"
              class=" rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs  uppercase leading-normal text-white "
              data-te-ripple-init
              data-te-ripple-color="light">
              English
            </button>
            </div>

            <div class="flex items-center ml-5 ">
            <button
              type="submit"
              class=" rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs  uppercase leading-normal text-white "
              data-te-ripple-init
              data-te-ripple-color="light">
              $ USD-U.S. Doller 
            </button>
            </div>



            <div class="flex items-center ml-5 ">
            <button
              type="submit"
              class=" rounded border-2 flex border-neutral-50 px-6 pb-[6px] pt-2 text-xs  uppercase leading-normal text-white "
              data-te-ripple-init
              data-te-ripple-color="light">
                <svg height="18" viewBox="0 0 300 159" className='mr-1.5'  width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m0 .552h300v157.895h-300z" fill="#fff"/><path d="m0 .552h300v12.146h-300zm0 24.292h300v12.146h-300zm0 24.291h300v12.146h-300zm0 24.292h300v12.146h-300zm0 24.291h300v12.146h-300zm0 24.292h300v12.146h-300zm0 24.291h300v12.146h-300z" fill="#b22234"/><path d="m0 .552h120v85.02h-120z" fill="#3c3b6e"/><path d="m5.638 7.454 2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.092 3.361 2.859-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.534l-1.091-3.36-1.092 3.36zm19.894 0 2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.533l-1.092-3.36-1.092 3.36zm-89.527 8.527 2.859 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.092-3.36 2.859-2.077h-3.534l-1.091-3.361-1.092 3.361zm19.895 0 2.859 2.077-1.092 3.36 2.858-2.077 2.859 2.077-1.092-3.36 2.858-2.077h-3.533l-1.092-3.361-1.092 3.361zm19.895 0 2.859 2.077-1.092 3.36 2.858-2.077 2.859 2.077-1.092-3.36 2.858-2.077h-3.533l-1.092-3.361-1.092 3.361zm19.895 0 2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.092-3.36 2.859-2.077h-3.533l-1.092-3.361-1.092 3.361zm19.894 0 2.859 2.077-1.092 3.36 2.858-2.077 2.859 2.077-1.092-3.36 2.858-2.077h-3.533l-1.092-3.361-1.091 3.361zm-89.526 8.526 2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.092 3.361 2.859-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.534l-1.091-3.36-1.092 3.36zm19.894 0 2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.533l-1.092-3.36-1.092 3.36zm-89.281 8.555 2.858 2.077-1.091 3.36 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.076h-3.533l-1.092-3.361-1.092 3.361zm19.895 0 2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.076h-3.533l-1.092-3.361-1.092 3.361zm19.895 0 2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.076h-3.534l-1.091-3.361-1.092 3.361zm19.894 0 2.859 2.077-1.092 3.36 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.076h-3.533l-1.092-3.361-1.092 3.361zm19.895 0 2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.076h-3.533l-1.092-3.361-1.092 3.361zm-89.47 8.455 2.859 2.076-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.076h-3.533l-1.092-3.361-1.092 3.361zm19.895 0 2.858 2.076-1.092 3.361 2.859-2.077 2.858 2.077-1.091-3.361 2.858-2.076h-3.533l-1.092-3.361-1.092 3.361zm19.895 0 2.858 2.076-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.076h-3.533l-1.092-3.361-1.092 3.361zm19.894 0 2.859 2.076-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.859-2.076h-3.534l-1.092-3.361-1.091 3.361zm19.895 0 2.858 2.076-1.091 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.076h-3.533l-1.092-3.361-1.092 3.361zm19.895 0 2.858 2.076-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.076h-3.533l-1.092-3.361-1.092 3.361zm-99.287 16.782 2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.894 0 2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.091 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.091-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.894 0 2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.859-2.077h-3.534l-1.092-3.36-1.091 3.36zm19.895 0 2.858 2.077-1.091 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm-99.716 16.98 2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.534l-1.091-3.36-1.092 3.36zm19.894 0 2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.091 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.091-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.894 0 2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.859-2.077h-3.534l-1.092-3.36-1.091 3.36zm19.895 0 2.858 2.077-1.091 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm-89.467-25.455 2.858 2.077-1.091 3.36 2.858-2.077 2.859 2.077-1.092-3.36 2.858-2.077h-3.533l-1.092-3.361-1.092 3.361zm19.895 0 2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.091-3.36 2.858-2.077h-3.533l-1.092-3.361-1.092 3.361zm19.895 0 2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.092-3.36 2.859-2.077h-3.533l-1.092-3.361-1.092 3.361zm19.894 0 2.859 2.077-1.092 3.36 2.858-2.077 2.859 2.077-1.092-3.36 2.858-2.077h-3.533l-1.092-3.361-1.092 3.361zm19.895 0 2.858 2.077-1.092 3.36 2.859-2.077 2.858 2.077-1.091-3.36 2.858-2.077h-3.533l-1.092-3.361-1.092 3.361zm-79.638 16.953 2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.092 3.361 2.859-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.092-3.361 2.859-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.894 0 2.859 2.077-1.092 3.361 2.858-2.077 2.859 2.077-1.092-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36zm19.895 0 2.858 2.077-1.092 3.361 2.859-2.077 2.858 2.077-1.091-3.361 2.858-2.077h-3.533l-1.092-3.36-1.092 3.36z" fill="#fff"/></g></svg>
                United State
            </button>
            </div>



  </div>










    </div>
  )
}

export default Footer
