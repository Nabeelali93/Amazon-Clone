import React from "react";
// Initialization for ES Users
import { Carousel, initTE } from "tw-elements";


import Slider1 from "react-slick";




import image1 from "./assets/WhatsApp Image 2023-08-09 at 04.10.33.jpg";
import image2 from "./assets/WhatsApp Image 2023-08-09 at 04.12.45.jpg";
import image3 from "./assets/WhatsApp Image 2023-08-09 at 04.13.51.jpg";

function Slider() {
  initTE({ Carousel });


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };



  return (
    <>
      <div className=" relative bg-gray-100">
        {/* slider Start */}

        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>

          <button
            class="carousel-control-prev mb-44"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <svg
              class="carousel-control-prev-icon  "
              aria-hidden="true"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m34.52 239.03 194.35-194.34c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9l-154.03 154.74 154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0l-194.34-194.35c-9.37-9.37-9.37-24.57 0-33.94z" />
            </svg>

            <span class="visually-hidden">Previous</span>
          </button>

          <button
            class="carousel-control-next mb-44"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <svg
              class="carousel-control-next-icon"
              aria-hidden="true"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m285.476 272.971-194.344 194.343c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901l154.021-154.746-154.021-154.745c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0l194.343 194.343c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        {/* slider end */}

        <div className="grid grid-cols-4 ml-7  " style={{ height: "38rem" }}>
          <div className="w-72 h-96 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 relative bottom-60">
            <h1 className="text-xl font-bold  ml-6 mt-1">Gaming accessories</h1>
            <div className="  place-content-around grid gap-4 grid-cols-2  ">
              <div className="bg">
                <a href="#">
                  <img
                    className=" w-52 h-24  m-auto mt-2"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
                    alt=""
                  />
                </a>
                <p className="ml-5">headset</p>
              </div>
              <div className="">
                <a href="#">
                  <img
                    className=" w-52 h-24  m-auto mt-2"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                    alt=""
                  />
                </a>
                <p className="ml-5">Keyboard</p>
              </div>
              <div className="">
                <a href="#">
                  <img
                    className=" w-52 h-24   m-auto mt-2"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
                    alt=""
                  />
                </a>
                <p className="ml-5">Computer Mice</p>
              </div>
              <div className="">
                <a href="#">
                  <img
                    className="  w-52 h-24   m-auto mt-2"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
                    alt=""
                  />
                </a>
                <p className="ml-5">Chairs</p>
              </div>
              <a href="/" className=" mt-72 ml-6 absolute text-blue-400">
                {" "}
                shop now
              </a>
            </div>
          </div>

          <div className="w-72 h-96 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 relative bottom-60  ">
            <h1 className="text-xl font-bold  ml-4">Toys Under $30</h1>
            <a href="#">
              <img
                className=" w-60 h-72  m-auto mt-2"
                src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg"
                alt=""
              />
            </a>
            <a href="/" className="ml-6 mt-2 absolute text-blue-400">
              {" "}
              shop now
            </a>
          </div>

          <div className="w-72 h-96 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 relative bottom-60">
            <h1 className="text-xl font-bold  ml-4">Health & Personal Care</h1>
            <a href="#">
              <img
                className=" w-60 h-72  m-auto mt-2"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
                alt="."
              />
            </a>
            <a href="/" className="ml-6 mt-2 absolute text-blue-400">
              {" "}
              shop now
            </a>
          </div>

          {/* èidt work */}

          <div className="w-72 h-96 ">
            <div className="grid grid-cols-1 w-72 h-96 relative  ">
              <div className="w-72 h-32 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 relative bottom-60   ">
                <h1 className="text-xl p-2 font-bold">
                  Sign in for the best <br /> experience
                </h1>

                <center>
                  {" "}
                  <button className="bg-yellow-400 w-60 rounded-md m-2 p-1 ">
                    Sign in securely
                  </button>
                </center>
              </div>
              <div className="absolute bottom-60">
                <img
                  className=""
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* eidt work  */}

          <div className="w-72 h-96 bg-white border border-gray-200 mt-5  shadow dark:bg-gray-800 dark:border-gray-700 relative  bottom-60  ">
            <h1 className="text-xl font-bold  ml-6">Electronics</h1>
            <a href="#">
              <img
                className=" w-96 h-72  m-auto mt-2"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                alt=""
              />
            </a>
            <a href="/" className="ml-6 mt-2 absolute text-blue-400">
              {" "}
              shop now
            </a>
          </div>

          <div className="w-72 h-96 bg-white border border-gray-200  mt-5   shadow dark:bg-gray-800 dark:border-gray-700 relative bottom-60   ">
            <h1 className="text-xl font-bold  ml-4">
              Home & Kitchen Under $30
            </h1>
            <a href="#">
              <img
                className=" w-60 h-72  m-auto mt-2"
                src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg"
                alt=""
              />
            </a>
            <a href="/" className="ml-6 mt-2 absolute text-blue-400">
              {" "}
              shop now
            </a>
          </div>

          <div className="w-72 h-96 bg-white border border-gray-200  mt-5   shadow dark:bg-gray-800 dark:border-gray-700 relative bottom-60   ">
            <h1 className="text-xl font-bold  ml-6">Beauty picks</h1>
            <a href="#">
              <img
                className=" w-60 h-72  m-auto mt-2"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
                alt=""
              />
            </a>
            <a href="/" className="ml-6 mt-2 absolute text-blue-400">
              {" "}
              shop now
            </a>
          </div>

          <div className="w-72 h-96 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 relative bottom-60 mt-5">
            <h1 className="text-xl font-bold  ml-6 mt-1">
              Shop deals in Fashion
            </h1>
            <div className="  m-2 grid gap-2 grid-cols-2  ">
              <div className="bg">
                <a href="#">
                  <img
                    className=" w-52 h-28  m-auto mt-2"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg"
                    alt=""
                  />
                </a>
                <p className="ml-4 text-gray-400 text-sm">jeans under $50</p>
              </div>
              <div className="">
                <a href="#">
                  <img
                    className=" w-52 h-28  m-auto mt-2"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg"
                    alt=""
                  />
                </a>
                <p className="ml-4 text-gray-400 text-sm">Tops under $25</p>
              </div>
              <div className="">
                <a href="#">
                  <img
                    className=" w-52 h-28   m-auto mt-2"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg"
                    alt=""
                  />
                </a>
                <p className="ml-4 text-gray-400 text-sm ">Dresses under $30</p>
              </div>
              <div className="">
                <a href="#">
                  <img
                    className="  w-52 h-28   m-auto mt-2"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg"
                    alt=""
                  />
                </a>
                <p className="ml-4 text-gray-400 text-sm">Shoes under $35</p>
              </div>
              <a href="/" className=" mt-72 ml-6 absolute text-blue-400">
                {" "}
                see all deals
              </a>
            </div>
          </div>
        </div>

        {/* long slider  */}

        <div
          id="carouselExampleIndicators"
          class="carousel slide bg-white"
          data-bs-ride="carousel"
        >
              <h1 className=" text-2xl font-bold ml-10">Popular products in PC internationally</h1>

          <div class="carousel-indicators">
          </div>
          <div class="carousel-inner">

            <div class="carousel-item active ">
              <div className="flex overflow-scroll  p-2 gap-3 bg-white">

                <img
                  src="https://m.media-amazon.com/images/I/81L3oXKJFFL._AC_SY200_.jpg"
                  class="d-block h-60 w-60 object-contain"
                  alt="..."
                />
                <img
                  src="https://m.media-amazon.com/images/I/81arw1UlcrS._AC_SY200_.jpg"
                  class="d-block h-60 w-60 object-contain"
                  alt="..."
                />
                <img
                  src="https://m.media-amazon.com/images/I/81tVtJijo0L._AC_SY200_.jpg"
                  class="d-block h-60 w-60 object-contain"
                  alt="..."
                />

                <img
                  src="https://m.media-amazon.com/images/I/61ZL9Qpo1-L._AC_SY200_.jpg"
                  class="d-block h-60 w-60  object-contain "
                  alt="..."
                />
                <img
                  src="https://m.media-amazon.com/images/I/71V5mS+FNnL._AC_SY200_.jpg"
                  class="d-block h-60 w-60 object-contain"
                  alt="..."
                />
                <img
                  src="https://m.media-amazon.com/images/I/7178dKrh3RL._AC_SY200_.jpg"
                  class="d-block h-60 w-60 object-contain"
                  alt="..."
                />
                <img
                  src="https://m.media-amazon.com/images/I/71CuCyXIaOL._AC_SY200_.jpg"
                  class="d-block h-60 w-60 object-contain"
                  alt="..."
                />
                <img
                  src="https://m.media-amazon.com/images/I/61UE1gGlJjL._AC_SY200_.jpg"
                  class="d-block h-60 w-60 object-contain"
                  alt="..."
                />
                <img
                  src="https://m.media-amazon.com/images/I/71dpms8gexL._AC_SY200_.jpg"
                  class="d-block h-60 w-60 object-contain"
                  alt="..."
                />
                <img
                  src="https://m.media-amazon.com/images/I/81wwLOgkLgL._AC_SY200_.jpg"
                  class="d-block h-60 w-60 object-contain"
                  alt="..."
                />
                <img
                  src="https://m.media-amazon.com/images/I/71tK21fYkDL._AC_SY200_.jpg"
                  class="d-block h-60 w-60 object-contain"
                  alt="..."
                />
                <img
                  src="https://m.media-amazon.com/images/I/719ZXZP+5LL._AC_SY200_.jpg"
                  class="d-block h-60 w-60 object-contain"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>

          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        {/* long slider and  */}

        {/* second slider loong  start*/}

        <div
          id="carouselExampleInterval"
          class="carousel slide mt-11 bg-white"
          data-bs-ride="carousel"
        >
                                <h1 className=" text-2xl font-bold ml-10 mt-10 ">Exciting deals 
                                 <a href="/" className="text-sm p-3">see all details</a>

                                </h1>


          <div class="carousel-inner ">
            <div
              class="carousel-item active overflow-scroll "
              data-bs-interval="10000"
            >
              <img src={image1} class=" w-100 " alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={image2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={image3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        {/* second slider loong  and*/}




        <div className="overflow-hidden"> 
        <h1 className="text-2xl font-bold">  Deals Under $25</h1>
        <Slider1 {...settings}>
          
          
          {/* first Slide */}

          <div  className="d-flex gap-3">



          <div class="card  w-52">
            <div class="w-44 bg-gray-300  m-auto">  
            <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/61qaVLCKzcL._AC_SY200_.jpg" alt="Card image cap"/>

            </div>

  <button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
  <div class="card-body">
    <p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
  </div>
</div>







<div class="card  w-52">
            <div class="w-44 bg-gray-300  m-auto">  
            <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/41sqLzx4nYL._AC_SY200_.jpg" alt="Card image cap"/>

            </div>

  <button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
  <div class="card-body">
    <p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
  </div>
</div>




<div class="card  w-52">
            <div class="w-44 bg-gray-300  m-auto">  
            <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/41NClesl9OL._AC_SY200_.jpg" alt="Card image cap"/>

            </div>

  <button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
  <div class="card-body">
    <p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
  </div>
</div>





<div class="card  w-52">
            <div class="w-44 bg-gray-300  m-auto">  
            <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/31wfiW4FATL._AC_SY200_.jpg" alt="Card image cap"/>

            </div>

  <button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
  <div class="card-body">
    <p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
  </div>
</div>




<div class="card  w-52">
            <div class="w-44 bg-gray-300  m-auto">  
            <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/61qaVLCKzcL._AC_SY200_.jpg" alt="Card image cap"/>

            </div>

  <button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
  <div class="card-body">
    <p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
  </div>
</div>





<div class="card  w-52">
            <div class="w-44 bg-gray-300  m-auto">  
            <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/41oBg+FqIcL._AC_SY200_.jpg" alt="Card image cap"/>

            </div>

  <button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
  <div class="card-body">
    <p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
  </div>
</div>
          </div>


{/* first Slide End */}
            
            {/* Secomd Slide Start */}


            <div  className="d-flex gap-3">



<div class="card  w-52">
  <div class="w-44 bg-gray-300  m-auto">  
  <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/51Aw8Yw6KdL._AC_SY200_.jpg" alt="Card image cap"/>

  </div>

<button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
<div class="card-body">
<p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
</div>
</div>







<div class="card  w-52">
  <div class="w-44 bg-gray-300  m-auto">  
  <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/41sqLzx4nYL._AC_SY200_.jpg" alt="Card image cap"/>

  </div>

<button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
<div class="card-body">
<p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
</div>
</div>




<div class="card  w-52">
  <div class="w-44 bg-gray-300  m-auto">  
  <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/31tmnCWw3RL._AC_SY200_.jpg" alt="Card image cap"/>

  </div>

<button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
<div class="card-body">
<p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
</div>
</div>





<div class="card  w-52">
  <div class="w-44 bg-gray-300  m-auto">  
  <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/41G5OaZMbzL._AC_SY200_.jpg" alt="Card image cap"/>

  </div>

<button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
<div class="card-body">
<p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
</div>
</div>




<div class="card  w-52">
  <div class="w-44 bg-gray-300  m-auto">  
  <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/515PRUI32tS._AC_SY200_.jpg" alt="Card image cap"/>

  </div>

<button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
<div class="card-body">
<p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
</div>
</div>





<div class="card  w-52">
  <div class="w-44 bg-gray-300  m-auto">  
  <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/411B+9Nj91L._AC_SY200_.jpg" alt="Card image cap"/>

  </div>

<button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
<div class="card-body">
<p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
</div>
</div>
</div>







{/* second slide end */}


{/* Third Slide Start */}


<div  className="d-flex gap-3 ">



<div class="card  w-52">
  <div class="w-44 bg-gray-300  m-auto">  
  <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/3117ipnlQvL._AC_SY200_.jpg" alt="Card image cap"/>

  </div>

<button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
<div class="card-body">
<p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
</div>
</div>







<div class="card  w-52">
  <div class="w-44 bg-gray-300  m-auto">  
  <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/51XSDo5lkbL._AC_SY200_.jpg" alt="Card image cap"/>

  </div>

<button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
<div class="card-body">
<p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
</div>
</div>




<div class="card  w-52">
  <div class="w-44 bg-gray-300  m-auto">  
  <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/517yep7ExLL._AC_SY200_.jpg" alt="Card image cap"/>

  </div>

<button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
<div class="card-body">
<p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
</div>
</div>





<div class="card  w-52">
  <div class="w-44 bg-gray-300  m-auto">  
  <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/51ph7kmCg1L._AC_SY200_.jpg" alt="Card image cap"/>

  </div>

<button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
<div class="card-body">
<p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
</div>
</div>




<div class="card  w-52">
  <div class="w-44 bg-gray-300  m-auto">  
  <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/61qaVLCKzcL._AC_SY200_.jpg" alt="Card image cap"/>

  </div>

<button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
<div class="card-body">
<p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
</div>
</div>





<div class="card  w-52">
  <div class="w-44 bg-gray-300  m-auto">  
  <img className="object-contain m-auto h-44" src="https://m.media-amazon.com/images/I/61alKaYn7hL._AC_SY200_.jpg" alt="Card image cap"/>

  </div>

<button className="bg-pink-600 text-white w-16 m-2 mt-3 ">22% off </button> 
<div class="card-body">
<p class="card-text text-lg ">$17.19 <span className="text-sm text-gray-500">List Price : <del>$22:00</del></span></p>
</div>
</div>
</div>


{/* Third Slide End */}
        </Slider1>
      </div>
























      </div>
    </>
  );
}

export default Slider;
