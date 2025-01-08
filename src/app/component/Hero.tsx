import React from "react";
import Image from "next/image"; 
import line from '../assets/line.png';
const FifthPag = () => {
  return (
    <div className="flex items-center justify-center min-h-screen pt-[70px]">
      <div className="flex flex-col sm:flex-row items-center justify-around p-6 w-full sm:w-[1050px] sm:h-[550px] bg-[#c4ebe1] rounded">

        {/* Left Side: Image */}
        <div className="sm:w-1/2 sm:pr-4 mb-6 sm:mb-0 order-2 sm:order-1 mt-5">
          <Image
            src="/watch1.webp"
            alt="Image"
            width={400}  // Increased image width
            height={400} // Adjusted height to maintain aspect ratio
          
            className="w-[250px] h-[340px] sm:w-[220px] sm:h-[340px] lg:h-[430px] lg:w-[280px] lg:mt-[100px] "
          />
        </div>



        {/* Right Side: Text Content */}
        <div className="sm:w-1/2 text-center sm:text-left sm:pl-4 order-1 sm:order-2 ">
          <h2 className="text-xl font-bold text-[#333] ">The Watches</h2>
          <h3 className="text-2xl sm:text-[58px] text-[#333] mt-4 font-semibold leading-[70px] uppercase">
          Explore the 
          Rolex collection
          </h3>
          <p className="text-base text-[#333] mt-4 text-[14px]">
          The Rolex collection offers a wide range of prestigious, high-precision timepieces, from Professional to Classic models to suit any wrist.


          </p>

          {/* Apply Now and Add to Cart buttons in a row */}
          <div className="flex mt-7 justify-center sm:justify-start gap-4">
            <div className="border-2 py-2 px-3 border-[#33d827] text-[15px] text-[#115528] font-semibold rounded-lg  text-center">
              READ MORE
            </div>
            <button className="py-2 px-3 bg-[#64da7b] text-[15px] text-white rounded-lg hover:bg-green-400 ">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FifthPag;
