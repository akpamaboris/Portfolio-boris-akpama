import GITLOGO from "../../ressources/Footer/images/gitlogo.png";
import LINLOGO from "../../ressources/Footer/images/linlogo.png";

export const Footer = () => {
  return (
    <section className="py-20 2xl:py-40 bg-gray-800 ">
      <div className="border-t  mb-[120px] container border-gray-400 ml-auto mr-auto"></div>
      <div className="container px-4  mx-auto">
        <div className="flex flex-wrap -mx-4 pb-24 mb-16 border-b border-gray-400">
          <div className=" ml-auto mr-auto  px-4 mb-16  lg:mb-0">
            <h2 className="max-w-sm text-5xl text-white text-center font-bold font-heading">
              Thank you for your time
            </h2>
          </div>
        </div>
        <div className="md:flex justify-between">
          <p className="text-lg text-gray-200 mb-8 md:mb-0">
            © Akpama Boris. All rights reserved.
          </p>
          <div className="flex items-center">
            <a
              className="inline-block mr-2"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/akpamaboris#"
            >
              <img className="h-12" src={GITLOGO} alt="" />
            </a>
            <a
              className="inline-block mr-2"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/borisakpama/"
            >
              <img className="h-12" src={LINLOGO} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
