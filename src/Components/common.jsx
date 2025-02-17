import React from "react";

export default function Jobspage(props) {
  return (
    <>
      <div className="max-h-screen bg-white gap-7 text-black flex flex-wrap w:pl-14 w:pr-14 w-full pt-3">
        {/* Left section  */}
        <div className="md:w-[35%] w-full flex flex-col gap-2 ">
          {/* <div className="flex justify-between">
            <p>78 Web Developer jobs in Bhopal</p>
            <select name="" id="">
                <option value="">Filter</option>
            </select>
           </div> */}
          <div className="w-full flex flex-col gap-2  ">
            <div className="border border-gray-500 rounded-xl flex flex-col h-auto w-full gap-1 p-4">
              <p className="text-xs ">Act Connect 3.7*</p>
              <h3 className=" text-xl font-medium ">Web Developer</h3>
              <p>Bhopal</p>
              <div className="flex justify-between ">
                <p>$12T [Employee Est]</p>
                <p>30d+</p>
              </div>
            </div>
            <div className="border border-gray-500 rounded-xl flex flex-col h-auto w-full gap-1 p-4">
              <p className="text-xs ">Act Connect 3.7*</p>
              <h3 className=" text-xl font-medium ">Web Developer</h3>
              <p>Bhopal</p>
              <div className="flex justify-between ">
                <p>$12T [Employee Est]</p>
                <p>30d+</p>
              </div>
            </div>
            <div className="border border-gray-500 rounded-xl flex flex-col h-auto w-full gap-1 p-4">
              <p className="text-xs ">Act Connect 3.7*</p>
              <h3 className=" text-xl font-medium ">Web Developer</h3>
              <p>Bhopal</p>
              <div className="flex justify-between ">
                <p>$12T [Employee Est]</p>
                <p>30d+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section  */}
        <div className="md:w-[60%] w-full border border-gray-400 rounded-xl overflow-hidden ">
          <div className="w-full ">
            {/* JD Header  */}
            <div className="w-full h-auto flex justify-between items-center text-left border-b-2 p-3  ">
              {/* jd Info  */}
              <div className=" md:flex  md:flex-col flex-wrap ">
                <div className="font-semibold tracking-wide">
                  Act T Connect 3.7*
                </div>
                <div className="text-2xl">Web Developer</div>
                <div className="">Bhopal</div>
              </div>
              <div className="flex flex-wrap h-auto">
                <button className=" border-2  pl-4 pr-4 pt-1 pb-1 cursor-pointer bg-[#2B308B] text-white">
                  Apply
                </button>
              </div>
            </div>

            {/* jd discription  */}
            <div className="w-full flex flex-wrap md:flex-col p-3 md:gap-8 border-b-2 border">
              <p className=" text-left font-medium">
                Web Development services help create all types of web-based
                software and ensure great experience for web users
              </p>
              <div className="flex gap-1">
                <details id="">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores totam accusamus magnam cupiditate facilis soluta
                    voluptate hic libero. Odit, animi.
                  </p>
                </details>
              </div>
            </div>

            {/* Salary info  */}

            <div className="flex flex-col felx-wrap md:flex-col p-3 justify-center gap-2 ">
              <div className="self-start">
                <h1 className="text-2xl font-semibold ">Base Pay</h1>
              </div>
              <div className="border-2  p-3 m-2 ">
                <div className="text-2xl mb-2">
                  Salary <span className="text-sm">/mo(Employer est)</span>
                </div>
                <p>Bhopal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
