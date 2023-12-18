import { Flex } from "antd";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Icons } from "../atomic/atoms/Icons";

export default function Header() {
  return (
    <nav className="sticky top-0 bg-black w-full py-[32px] px-[48px] justify-between flex z-10">

      <a href="/" className="flex gap-4">
        <h2 className="text-white text-2xl font-pacifico">
          Chinatown Tattoo
        </h2>
      </a>
      <Flex align="center" gap={10}>
        {
          NavIcons.map(element => {
            return <a href={element.link}>{element.name.length > 0 ? <Icons name={element.name} /> : element.icon}</a>
          })
        }
      </Flex>
    </nav>
  );
}

const NavIcons = [
  {
    name: '',
    icon: <FiInstagram size={20} color="#FFF" />,
    link: 'https://www.instagram.com/chinatowntattooles/?hl=en'
  },
  {
    name: '',
    icon: <FaFacebook size={20} color="#FFF" />,
    link: 'https://www.facebook.com/chinatowntattooles/'
  },
  {
    name: '',
    icon: <FaTiktok size={20} color="#FFF" />
  }
]