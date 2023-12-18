
const ServiceCard = ({ img = '', title = '', description = '' }) => {
  return (
    <div className="flex flex-col justify-center w-[30%] bg-black text-white p-4 overflow-hidden min-w-[300px] max-h-fit">

      <div className="overflow-hidden h-[50%]">
        <img src={img} alt="Tattoo Designs" className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
      </div>

      <div className="px-6 py-4 flex flex-col items-center">
        <p className="font-bold text-4xl my-4 font-pacifico text-center">
          {title}
        </p>

        <p className="text-lg text-center m-0">
          {description}
        </p>
      </div>

    </div>
  );
}

export default ServiceCard