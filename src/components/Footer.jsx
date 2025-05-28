import React, { useState } from "react";

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <p className="text-base leading-relaxed text-gray-600 mt-7">
            </p>
</div>
            

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Technical skills
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  C{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Java{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  html{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  sql{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Soft skills
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Communication{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Time management{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Decision making{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  problem solving{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Comment
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label for="email" className="sr-only">
                  Enter text
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter text"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-fane focus:border-blue-600 caret-blue-600"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          Thank you
        </p>
      </div>
    </section>
  );
};
export default Footer;
