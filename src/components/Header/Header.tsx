//IMPORT THE IMAGES

import IMAGE1 from "../../ressources/Header/images/Sans-titre.png";
import IMAGE2 from "../../ressources/Header/images/Sans-titre2.png";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section className="bg-gray-800 py-20 2xl:py-40">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xl mb-14 lg:mb-28">
            <span className="text-lg text-blue-400 font-semibold">My work</span>
            <h2 className="mt-8 text-3xl text-white font-bold font-heading">
              React.js + TypeScript + JavaScript + Python + Node.js + React
              Native
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="w-full lg:w-1/2 p-4">
              <img className="w-full h-96 object-cover" src={IMAGE1} alt="" />
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <img className="w-full h-96 object-cover" src={IMAGE2} alt="" />
            </div>
          </div>
          <div className="mt-20 text-center">
            <Link
              className="inline-block py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full"
              to="/projects"
            >
              See all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
