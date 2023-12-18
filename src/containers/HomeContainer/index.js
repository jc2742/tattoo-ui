import { Button, Flex } from "antd";
import tats from '../../assets/images/arm_tats.jpg'
import led from '../../assets/images/led.jpg'
import bird_tat from '../../assets/images/bird_tat.jpg'
import back_tat from '../../assets/images/back_tat.jpg'
import red_led from '../../assets/images/red_led.jpg'
import tattooing from '../../assets/images/tattooing.jpg'
import wrist_tat from '../../assets/images/wrist_tat.jpg'
import zoom_in from '../../assets/images/zoom_in.jpg'


import ServiceCardList from "../../components/atomic/molecules/ServiceCardList";



const HomeContainer = () => {

  return (
    <>
      <div className="w-full  h-[calc(100vh_-_90px)] bg-cover bg-center relative z--1" style={{ backgroundImage: `url(${zoom_in})` }}>
        <div class="absolute bg-black opacity-75 top-0 right-0 bottom-0 left-0" />

        <Flex gap={15} vertical={true} justify="center" className="relative h-[80%] mx-20 py-20 text-white">
          <h2 className="font-pacifico leading-[86px] text-[74px] mb-2">
            Ink Your Story
          </h2>
          <p className="text-xl">
            Express yourself with unique and expertly crafted tattoos at Chinatown Tattoo
          </p>
          <Button className="rounded-none py-[12px] px-[16px] bg-white h-fit w-fit" onClick={() => { window.location = 'https://calendly.com/chinatowntattooles' }}>
            <p className="text-xl m-0">
              Book Now
            </p>
          </Button>
        </Flex>

        <div className="relative h-[20%]">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="41,100 87,0 100,100 0,100 23,0" fill='black' />
          </svg>
        </div>
      </div>

      <ServiceCardList serviceCards={ServiceCardInfo} />

      <div className="w-full  h-[calc(100vh_-_90px)] bg-cover bg-center relative z--1 mt-[-96px]" style={{ backgroundImage: `url(${back_tat})` }}>
        <div class="absolute bg-black opacity-75 top-0 right-0 bottom-0 left-0" />

        <Flex gap={15} vertical={true} align="center" justify="center" className="relative h-[80%] mx-20 py-20 text-white">
          <h2 className="font-pacifico leading-[86px] text-[74px] mb-2">
            Experience It Now
          </h2>
          <p className="text-xl">
            Located at 673 58th St, Brooklyn, NY 11220
          </p>
          <Button className="rounded-none py-[12px] px-[16px] bg-white h-fit w-fit" onClick={() => { window.location = 'https://calendly.com/chinatowntattooles' }}>
            <p className="text-xl m-0">
              Book Now
            </p>
          </Button>
        </Flex>

        <div className="relative h-[20%]">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="41,100 87,0 100,100 0,100 23,0" fill='black' />
          </svg>
        </div>
      </div>


    </>
  )
}

const ServiceCardInfo = [
  {
    img: tats,
    title: 'Unique Tattoo Designs',
    description: `Creating custom, one-of-a-kind tattoo designs that reflect each client's unique personality and style.`
  },
  {
    img: led,
    title: 'Tattoo Cover-Up Solutions',
    description: 'Expertly covering up old or unwanted tattoos with creative and innovative designs, offering a fresh start.',
  },
  {
    img: bird_tat,
    title: 'Realistic Portrait Tattoos',
    description: 'Capturing the essence and likeness of loved ones or idols with highly detailed and lifelike portrait tattoos.'
  },
  {
    img: red_led,
    title: 'Colorful Sleeve Masterpieces',
    description: 'Crafting vibrant and stunning full sleeve tattoos, combining artistic vision and technical skill.'
  },
  {
    img: wrist_tat,
    title: 'Fine Line Minimalistic Tattoos',
    description: 'Delivering precise and minimalist tattoos, transforming simple concepts into elegant and impactful designs.'
  },
  {
    img: tattooing,
    title: 'Tattoo Aftercare Guidance',
    description: 'Providing comprehensive aftercare advice to ensure tattoos heal properly, preserving their beauty and longevity.'
  },
]

export default HomeContainer;
