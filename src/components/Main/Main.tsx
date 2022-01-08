export const Main = () => {
  return (
    <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
      <div className="absolute h-40 w-40 bg-blue-500 bottom-0 right-0 -mr-20 -mb-20 rounded-full"></div>
      <div className="container px-4 mx-auto">
        <div>
          <div className="flex flex-wrap -mx-6 lg:-mx-8">
            <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-8 mb-20 lg:mb-0">
              <span className="flex mb-10 justify-center items-center w-full h-20 bg-blue-500 rounded-lg">
                <div className="text-white">Projet 1</div>
              </span>
              <div className="pb-px mb-12 bg-gray-500"></div>
              <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-center text-white">
                Backups
              </h3>
              <p className="text-lg text-center text-gray-200">
                The brown me quam, sagittis porttitor lorem vel, commodo
                fringilla nisl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
