"use client"
import Navbar from "@/app/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState,useRef  } from "react";

import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { GiStarGate } from "react-icons/gi";
import { FaRegGrinStars } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";


import img from "../../../../public/image/man.png"
// icontwo
import icon1 from "../../../../public/icontwo/icon1.png";
import icon2 from "../../../../public/icontwo/icon2.png";
import icon3 from "../../../../public/icontwo/icon3.png";

// other icon
import inviteen from "../../../../public/othericon/inviteen.png";

// icon2

import icons1 from "../../../../public/iconthree/1.png";
import icons2 from "../../../../public/iconthree/2.png";
import icons3 from "../../../../public/iconthree/3.png";
import icons4 from "../../../../public/iconthree/4.png";
import icons5 from "../../../../public/iconthree/5.png";
import icons6 from "../../../../public/iconthree/6.png";


// map
import mapicon from '../../../../public/map/map-icon.png';




// logo
import logo from "../../../../public/logo/logo.png";




export default function MainHome() { 
 
    const [dataSlider, setDataSlider] = useState([])
    const [productData, setProductData] = useState([])
    const [productDataTwos, setProductDataTwos] = useState([])
 const [current, setCurrent] = useState(0);
const sliderRef = useRef(null);

    const sliderData = [
        {name: "JF Privezy Grass Wall", description: "The perfact Blend of Greenery", cardImage: "https://i.ibb.co.com/4nZ0Kztk/image.png"}, 
        {name: "JF Privezy Grass Wall", description: "The perfact Blend of Greenery", cardImage: "https://i.ibb.co.com/0R116qbw/image-1.png"}, 

        {name: "JF Privezy Grass Wall", description: "The perfact Blend of Greenery", cardImage: "https://i.ibb.co.com/0R116qbw/image-1.png"}
    ]

    // product Data
  const productDatas = [
        {name: "JF Barbed Wire- 270 GSM", price: "₹4,995.00", description: "The perfact Blend of Greenery", cardImage: "https://i.ibb.co.com/vCtzwV5c/Group-424.png"}, 
        {name: "FGC RustFree Fencing Poles", price: "₹499.00 – ₹1,589.00", description: "The perfact Blend of Greenery", cardImage: "https://i.ibb.co.com/XfXGJwXQ/image-5.png"}, 
        {name: "GI Poultry Mesh", price: "₹1,260.00 – ₹10,750.00", description: "The perfact Blend of Greenery", cardImage: "https://i.ibb.co.com/99DG2nwZ/image-4.png"},
                {name: "GI Poultry Mesh", price: "₹1,260.00 – ₹10,750.00", description: "The perfact Blend of Greenery", cardImage: "https://i.ibb.co.com/99DG2nwZ/image-4.png"},
        ]


    // product Data
  const productDataTwo = [
        {name: "Antiqo Fence", price: "₹10,024.00 – ₹14,984.82", description: "The perfact Blend of Greenery", cardImage: "https://i.ibb.co.com/67c5nkYn/image-1.png"}, 
        {name: "JF Australian Trellis", price: "₹6,962.00", description: "The perfact Blend of Greenery", cardImage: "https://i.ibb.co.com/JjJYGVtW/image-2.png"}, 
        {name: "JF Polyhex Mesh", price: "₹4,050.00 – ₹10,770.00", description: "The perfact Blend of Greenery", cardImage: "https://i.ibb.co.com/mQc08z3/image-3.png"},
        {name: "JF Privezy Grass Wall", price: "₹1,646.10 – ₹18,284.10", description: "The perfact Blend of Greenery", cardImage: "https://i.ibb.co.com/jPMdpbfM/image.png"}, ]






 useEffect( () => {
       setProductData(productDatas)
    }, [])



 useEffect( () => {
       const fetchData = () => {

setProductDataTwos(productDataTwo);

  };

  fetchData();
  
 
    }, [])




    const sliderDataAllu = [
    {
      id: 1,
      image: "https://i.ibb.co.com/vCtzwV5c/Group-424.png",
      image2: "https://i.ibb.co.com/PGX2yNTn/image-1.png",
      title: "JF Privezy Grass Wall",
      subtitle: "The perfact Blend of Greenery",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/vCtzwV5c/Group-424.png",
           image2: "https://i.ibb.co.com/PGX2yNTn/image-1.png",
      title: "Grow With Us",
      subtitle: "Your Success is Our Goal",
      buttonText: "Shop Now",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/vCtzwV5c/Group-424.png",
           image2: "https://i.ibb.co.com/PGX2yNTn/image-1.png",
      title: "Trusted by Many",
      subtitle: "Join Our Happy Clients Today",
      buttonText: "Shop Now",
    },
  ];




  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };


const next = () => {

const dataTotal = productData.length;



console.log(dataTotal)

}




    return(<div>
      

    
   {/* Navbar start*/}
   <Navbar></Navbar>
  {/* Navbar end */}   





  
<div className="xl:mx-[240px] lg:mx-[240px] md:mx-[100px] mx-[10px]">
  <div className="relative w-full mx-auto">
    {/* Scrollable Container */}
    <div
      ref={sliderRef}
      className="flex gap-6 overflow-x-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory px-6 py-8"
    >
      {sliderDataAllu?.map((slide) => (

        <div
          key={slide.id}
          className="xl:min-w-[700px] md:min-w-[1300px] min-w-[130px] h-[500px] flex-shrink-0 snap-center bg-[#F2F4F6] rounded-xl shadow-md p-6 flex items-center gap-6"
        >
          {/* Left Side: Image */}
          <div className="flex-1 relative left-0">
            
            <Image
              src={slide?.image2}
              alt={slide.title}
              width={350}
              height={250}
              className="rounded-md h-[250px] object-cover"
            />
            <Image
              src={slide?.image}
              alt={slide.title}
              width={340}
              height={550}
              className="rounded-md h-[230px] absolute left-1 top-3 right-0 object-cover"
            />

          </div>

          {/* Right Side: Text + Button */}
          <div className="flex-1 flex flex-col justify-center gap-2">
            <h1 className="xl:text-2xl lg:text-xl md:text-[15px]  font-bold text-gray-900 my-1 text-[60px]">{slide.title}</h1>
            <p className="text-gray-600 my-2">{slide.subtitle}</p>
            <button className="mt-2 px-6 py-2 bg-[#B0DD1D] font-semibold w-max  text-white rounded-full">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Prev/Next Buttons */}
    <button
      onClick={scrollLeft}
      className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#B0DD1D] text-white px-3 py-2 cursor-pointer rounded-full"
    >
      ◀
    </button>
    <button
      onClick={scrollRight}
      className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#B0DD1D] text-white px-3 py-2 cursor-pointer rounded-full"
    >
      ▶
    </button>
  </div>
</div>






    {/*Agricultural Product Section*/}
 
 <div className="xl:mx-[240px] lg:mx-[240px] md:mx-[100px] mx-[10px] my-2 relative left-0">

  <h2 className="font-semibold text-[25px] mt-12 mb-4">Agricultural Products</h2>

<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 w-full">
{
  productDatas?.map((data, item) => {

    console.log(data)
return(<div key={item}>

<div className="space-y-4 bg-[#F2F4F680] p-2 rounded-2xl">
  <Image className="object-fill h-[230px] w-full" src={data?.cardImage} width={200} height={300} alt="product" priority></Image>
<div className="space-y-2">
  <h2>{data?.name}</h2>
<p>{data?.price}</p>
</div>
<button className="bg-[#B0DD1D] px-3 py-2 font-semibold text-[14px] rounded-full">Shop Now</button>
</div>

</div>)

  })
}

<div className="absolute left-0 top-50 border-1 p-2 rounded-full">
 <GrFormPrevious />  
</div>

<div className="absolute right-0 top-50 border-1 p-2 rounded-full">
    <button className="cursor-pointer" onClick={() => next()}><GrFormNext /></button>
</div>

</div>
 </div>
{/* Agricultural Product Section End */}




 {/* Landscape Products */}
 <div className="xl:mx-[240px] lg:mx-[240px] md:mx-[100px] mx-[10px] my-2 relative left-0">

  <h2 className="font-semibold text-[25px] mt-12 mb-4">Landscape Products</h2>

<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full">
{
  productDataTwos?.map((data, item) => {

    console.log(data)
return(<div key={item}>

<div className="space-y-4 bg-[#F2F4F680] p-2 rounded-2xl">
  <Image className="object-fill h-[230px] w-full" src={data?.cardImage} width={200} height={300} alt="product" priority></Image>
<div className="space-y-2">
  <h2>{data?.name}</h2>
<p>{data?.price}</p>
</div>
<button className="bg-[#B0DD1D] px-3 py-2 font-semibold text-[14px] rounded-full">Shop Now</button>
</div>

</div>)

  })
}

<div className="absolute left-0 top-50 border-1 p-2 rounded-full">
 <GrFormPrevious />  
</div>

<div className="absolute right-0 top-50 border-1 p-2 rounded-full">
    <GrFormNext />
</div>

</div>
 </div>
 {/* Landscape Products End */}


{/* Trusted by over 6K+ customers */}


 <div className="xl:mx-[240px] lg:mx-[240px] md:mx-[100px] mx-[10px] my-8 relative left-0 z-0">


<div className="colorss  p-4 rounded w-full h-[500px] flex justify-center items-center">

<div className="">
<div>
<h2 className="text-center font-semibold text-white text-[35px] py-10">Trusted by over 6K+ customers</h2>
</div>




<div className="flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap flex-wrap justify-center items-center gap-x-20">
  

  
<div className="text-[#fff] flex  gap-2 items-center z-0">
  <GiStarGate className="text-[35px] bg-amber-50 rounded-full text-black p-2 z-40"></GiStarGate>
 <div>
   <h2>Premimun</h2>
  <p>Product</p>
 </div>
</div>

<div className="text-[#fff] flex gap-2 items-center">
<FaRegGrinStars className="text-[35px] bg-amber-50 rounded-full text-black p-2 z-40"></FaRegGrinStars>
<div>
    <h2>Premimun</h2>
  <p>Product</p>
</div>
</div>

<div className="text-[#fff] flex gap-2 items-center">
<CiDeliveryTruck className="text-[35px] bg-amber-50 rounded-full text-black p-2 z-40"></CiDeliveryTruck>
<div>
    <h2>Premimun</h2>
  <p>Product</p>
</div>
</div>

</div>
</div>
</div>


<div className="blures w-full absolute top-30 z-40 left-0 bottom-0"></div>
 </div>

 {/* Trusted by over 6K+ customers */}

<div className="xl:mx-[240px] lg:mx-[240px] md:mx-[100px] mx-[10px] my-8">
<div className="text-center mb-[100px]">
  <h2 className="text-[30px] font-semibold my-2">Why Us</h2>
  <p className="my-4">We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.</p>
</div>


 {/* Trusted by over 6K+ customers end*/}

<div className="flex xl:flex-nowrap  flex-wrap justify-center gap-8 h-full">

  <div className="w-[400px] h-max space-y-4 bg-[#F2F4F6] rounded-md p-10">
  <Image className="" src={icon1} width={70} height={70} alt="image"></Image>

  <h2 className="xl:text-[25px] lg:text-[20px] md:text-[18px] text-[15px]  font-semibold">Unmatched Durability with Corrosion-Free Technology</h2>
  <p className="xl:text-[15px] lg:text-[15px] md:text-[14px] text-[12px]">Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.</p>
</div>

<div className="w-[400px] h-max space-y-4 color2 rounded-md p-10 xl:mt-[-50px] mt-[10px]  text-white">
  <Image className="text-[40px] text-white" src={icon3} width={70} height={70} alt="image"></Image>
  <h2 className=" font-semibold xl:text-[17px] lg:text-[17px] md:text-[18px] text-[15px] ">Unmatched Durability with Corrosion-Free Technology</h2>
  <p className="xl:text-[15px] lg:text-[15px] md:text-[14px] text-[12px] ">Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.</p>
</div>

<div className="w-[400px] h-max space-y-4 bg-[#F2F4F6] rounded-md p-10 ">
 <Image className=" text-white" src={icon2} width={70} height={70} alt="image"></Image>
  <h2 className="xl:text-[25px] lg:text-[17px] md:text-[18px] text-[15px] font-semibold">Unmatched Durability with Corrosion-Free Technology</h2>
  <p className="xl:text-[15px] lg:text-[15px] md:text-[14px] text-[12px] ">Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.</p>
</div>

</div>

{/* button */}

<div className="flex xl:flex-nowrap lg:flex-nowrap flex-wrap justify-center">
  <button className="px-3 cursor-pointer py-2 font-medium text-[18px] my-4 bg-[#B0DD1D] rounded-full">Contact us</button>
</div>

</div>
 {/* Trusted by over 6K+ customers end */}  


{/* Why Customers Love ❤️ Us? */}

<div className="xl:mx-[240px] lg:mx-[240px] md:mx-[100px] mx-[10px] mt-8">


  <h2 className="xl:text-[30px] lg:text-[20px] md:text-[15px] text-[15px] text-center my-4">Why Customers Love ❤️ Us?</h2>



<div className="flex xl:flex-nowrap lg:flex-nowrap flex-wrap-reverse justify-center items-center gap-6 my-10">



<div className="w-[881px]  lg:h-[500px] h-max  bg-[#F2F4F6] p-4 rounded-md flex justify-center items-center">
   <div>

<div>
<Image src={inviteen} width={80} height={80} alt="image" priority></Image>
 <p className="xl:text-[22px] lg:text-[20px] md:text-[15px] text-[14px]">"I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product</p> 
</div>

<div className="flex justify-between items-center">
  <h2 className="xl:text-[28px] lg:text-[20px] md:text-[15px] text-[14px] font-semibold my-2">- Samuel Varughese</h2>
<div className="space-x-2">
  <button className="border-1 rounded-full p-3 cursor-pointer">  <GrFormPrevious /></button>
    <button className="border-1 rounded-full p-3 cursor-pointer"><GrFormNext /></button>
    

</div>
  
</div>
   </div>

</div>

<div>
   <Image className="h-[500px] object-center" src={img} width={300} height={668} alt="image" priority></Image>
</div>

 </div>
</div>

{/* Why Customers Love ❤️ Us? end */}


{/* Our Branches section */}



<div className="xl:mx-[240px] lg:mx-[240px] md:mx-[100px] mx-[10px] my-4 border-1 border-[#ddd] rounded-md p-2">

  <h2 className="bg-[#B0DD1D] w-max rounded-full text-center mx-auto p-2 text-[16px] font-semibold mt-[-20px]">Our Branches</h2>


  <div className="flex xl:flex-nowrap lg:flex-nowrap flex-wrap gap-x-10 justify-center my-4 text-center items-center">

    <div className="bg-[#B0DD1D1A] rounded-md p-4 border-1 border-[#D5ED88] space-y-2">  
   <Image className="h-[80px] w-[80]" src={icons1} width={80} height={80} alt="image" priority></Image>
      <button>Coimbatore</button>
    </div>

    <div>  
   <Image className="h-[80px] w-[80]" src={icons2} width={100} height={100} alt="image" priority></Image>
      <button>chennai</button>
    </div>


    

     <div>  
   <Image className="h-[80px] w-[80]" src={icons3} width={100} height={100} alt="image" priority></Image>
      <button>hyderabad</button>
    </div>


    <div>  
   <Image className="h-[80px] w-[80]" src={icons4} width={100} height={100} alt="image" priority></Image>
      <button>goa</button>
    </div>

    <div>  
   <Image  className="h-[80px] w-[80]"src={icons5} width={100} height={100} alt="image" priority></Image>
      <button>Kochi</button>
    </div>

    <div>  
   <Image className="h-[80px] w-[80]" src={icons6} width={100} height={100} alt="image" priority></Image>
      <button>Mumbai</button>
    </div>

  </div>



<div className="flex xl:flex-nowrap lg:flex-nowrap flex-wrap gap-x-4 justify-center items-center">

    <div className="rounded-md bg-[#002B55]  w-full  text-center h-[500px] flex justify-center items-center relative">
<div className="w-full px-10 rounded-md space-y-4">
    <h2 className="text-[30px] font-semibold text-[#fff]">Contact Us</h2>
 <div>
   <input className=" outline-0 placeholder-[#fff] rounded-md bg-[#1A4166] text-white p-2 w-full" type="text" placeholder="Your Name" />
 </div>
  <div><input className=" placeholder-[#fff] outline-0 rounded-md bg-[#1A4166] text-white p-2 w-full" type="text" placeholder="Email" /></div>
  <div><input className="placeholder-[#fff]  outline-0 rounded-md bg-[#1A4166] text-white p-2 w-full" type="text" placeholder="Phone *" /></div>
<textarea className=" placeholder-[#fff] outline-0 rounded-md bg-[#1A4166] text-white p-2 w-full" placeholder="Write message"></textarea>
<div>
  <button className="px-4 py-2  cursor-pointer bg-[#B0DD1D] rounded-full font-semibold text-[18px]">Submit</button>
</div>
</div>



<div className="blures absolute bottom-0">

</div>
</div>




<div className="w-full relative">

 <Image className="h-[500px] w-[100%] object-center" src={mapicon} width={100} height={100} alt="image" priority></Image> 

<div className="bg-[#fff] shadow-2xl rounded-2xl absolute bottom-0 m-3 p-4">
  
 <div className="flex xl:flex-nowrap lg:flex-nowrap flex-wrap gap-x-3 items-center ">
  <Image className="h-[70px] w-[70] object-center" src={mapicon} width={100} height={100} alt="image" priority></Image>

  <h2 className="font-medium">JRR Towers (2nd Floor), Pattalamma Temple Rd, Basavangudi, Bangalore, 560004</h2>
 </div>
</div>


</div>


</div>


</div>

{/* Our Branches f section end*/}


{/* Join Our JF Products*/}


<div className="bg-[#002B55] m-5 rounded-md  h-max xl:p-20 lg:p-20 md:p-10 p-5">

  <div className="xl:mx-[140px] lg:mx-[140px] md:mx-[100px] mx-[10px]">


  <div className="flex xl:flex-nowrap  flex-wrap gap-x-10 w-full h-full justify-center items-baseline  my-10">



  <div className="w-full">

<div className="text-white space-y-8 my-4">
  <h2 className="font-semibold">Join Our JF Products</h2>
  <p>We’ll tell you about store updates and discounts</p>
</div>

<div className="space-y-6">
  
   <div>
    <input className="placeholder-[#fff]  outline-0 rounded-md bg-[#1A4166] text-white p-2 w-full" type="text" placeholder="Enter your email" />
    </div>

<div className="flex gap-x-2"><input type="checkbox" name="" id="check" /><label for="check" className="text-white">Yes, subscribe me to your newsletter.</label>


</div>

<div>
  <button className="bg-[#fff] rounded-full px-8 py-2 font-semibold w-full">Join Now</button>
</div>


</div>

</div>




  <div className=" text-white w-full flex justify-center my-5">

  <div className="w-full flex justify-center">
      <div className="space-y-7 ">
      <h2 className="my-2 font-extrabold">Information</h2>
    
    <div>
      <Link href="">Home</Link>
    </div>
     <div>
      <Link href="">Shop</Link>
    </div>
    <div>
      <Link href="">Our Story</Link>
    </div>
     <div>
      <Link href="">Blogs</Link>
    </div>

    <div>
      <Link href="">Contact</Link>
    </div>
    </div>
  </div>
 <div className="w-full flex justify-center">

   <div className="space-y-7">
      <h2 className="my-2 font-extrabold">Helpful</h2>
    
    <div>
      <Link href="">FAQs</Link>
    </div>
     <div>
      <Link href="">Terms & Conditions</Link>
    </div>
    <div>
      <Link href="">Privacy Policy</Link>
    </div>
     <div>
      <Link href="">Shipping Policy</Link>
    </div>

    <div>
      <Link href="">My Account</Link>
    </div>

  </div>
 </div>
    

  </div>
  






</div>






<div className=" h-full  flex xl:flex-nowrap lg:flex-nowrap   flex-wrap xl:justify-between  justify-center gap-x-4 my-10 items-center">

 <div className="flex xl:flex-nowrap lg:flex-nowrap flex-wrap justify-center items-center gap-x-10">
   <Image src={logo} width={100} height={100} alt="logo"></Image>

  <div className="font-medium space-y-2 text-white xl:text-left lg:text-left md:text-left sm:text-left my-3 text-center">
    <h2>Our Branches
</h2>
<p className="text-white">Coimbatore, Chennai, Hyderabad, Goa, Kochi</p>
  </div>
 </div>



  <div>
  <button className="px-4 py-2  cursor-pointer bg-[#B0DD1D] rounded-full font-semibold text-[18px] my-2">Contact us</button>
</div>


</div>



</div>




</div>

    </div>)

}
