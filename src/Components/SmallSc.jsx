import React from "react";

export default function SmallSc({ jobs }) {
  return (
    <div className="max-h-screen w-full p-7 felx felx-col ">
      {jobs.map((job, idx) => (
        <div
          key={idx}
          className=" h-[70%] w-full border border-gray-400 hover:scale-105 cursor-pointer  transition duration-300 mb-6 rounded-xl overflow-hidden"
        >
          <div className="w-full">
            {/* JD Header */}
            <div className="w-full h-auto flex justify-between items-center text-left border-b-2 p-3">
              {/* Job Info */}
              <div className="md:flex md:flex-col flex-wrap">
                <div className="font-semibold tracking-wide">
                  {job.company_name}
                </div>
                <div className="text-2xl">{job.role}</div>
                <div>{job.location}</div>
              </div>
              <div className="flex flex-wrap h-auto">
                <button className="border rounded-xl  hover:bg-[#5A81FA] pl-4 pr-4 pt-1 pb-1 cursor-pointer bg-[#2B308B] text-white">
                  <span className="font-bold">Apply</span>
                </button>
              </div>
            </div>

            {/* Job Description */}
            <div className="w-full flex flex-wrap md:flex-col p-3 md:gap-8 border-b-2 border">
              <p className="text-left font-medium">{job.discrip}</p>
              <div className="flex gap-1">
                <details>
                  <summary className="cursor-pointer text-blue-500">
                    Read More
                  </summary>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores totam accusamus magnam cupiditate facilis soluta
                    voluptate hic libero. Odit, animi.
                  </p>
                </details>
              </div>
            </div>

            {/* Salary Info */}
            <div className="flex flex-col flex-wrap md:flex-col p-3 justify-center gap-2">
              <div className="self-start">
                <h1 className="text-2xl font-semibold">Base Pay</h1>
              </div>
              <div className="border-2 p-3 m-2">
                <div className="text-2xl mb-2">
                  {job.salary}{" "}
                  <span className="text-sm">/mo (Employer est)</span>
                </div>
                <p>{job.location}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
