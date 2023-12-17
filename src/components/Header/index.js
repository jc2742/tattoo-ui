import { Flex } from "antd";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Icons } from "../atomic/atoms/Icons";

export default function Header() {

  return (
    <nav className="sticky top-0 bg-black w-full py-[32px] px-[48px] justify-between flex">
      <h2 className="text-white text-xl font-pacifico">
        Chinatown Tattoo
      </h2>
      <Flex align="center" gap={10}>
        {
          NavIcons.map(element => {
            return element.name.length > 0 ? <Icons name={element.name} /> : element.icon
          })
        }
      </Flex>
    </nav>
  );
}

const NavIcons = [
  {
    name: '',
    icon: <FiInstagram size={20} color="#FFF" />
  },
  {
    name: '',
    icon: <FaFacebook size={20} color="#FFF" />
  },
  {
    name: '',
    icon: <FaTiktok size={20} color="#FFF" />
  }
]