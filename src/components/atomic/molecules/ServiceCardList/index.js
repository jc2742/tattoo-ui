import ServiceCard from "../../atoms/ServiceCard"


const ServiceCardList = ({ serviceCards = [] }) => {


  return (
    <div className="flex gap-4 pt-10 bg-black flex-wrap px-10 justify-center w-full">
      {serviceCards.map(ele => {
        return <ServiceCard title={ele.title} img={ele.img} description={ele.description} />
      })}
    </div>

  )
}

export default ServiceCardList