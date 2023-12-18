import { Button, Flex } from "antd";


const HomeContainer = () => {
  const bgImgUrl = 'https://chinatowntattoo.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1564426622559-5af68da63b96%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHw3fHxUYXR0b298ZW58MHx8fHwxNzAwMjU3MzkzfDA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90'

  return (
    <>
      <div className="w-full  h-[calc(100vh_-_90px)] bg-cover bg-center relative" style={{ backgroundImage: `url(${bgImgUrl})` }}>
        <div class="absolute bg-black opacity-75 top-0 right-0 bottom-0 left-0" />

        <Flex gap={10} vertical={true} justify="center" className="relative h-[80%] mx-20 py-20 text-white">
          <h2 className="font-pacifico leading-[54px] text-[50px] mb-2">
            Ink Your Story
          </h2>
          <p className="text-lg">
            Express yourself with unique and expertly crafted tattoos at Chinatown Tattoo
          </p>
          <Button className="rounded-none py-[12px] px-[16px] bg-white h-fit w-fit" >
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

export default HomeContainer;
