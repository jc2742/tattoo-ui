
export default function Header() {
  return (
    <></>
    // <nav className="sticky bg-white top-0 min-h-[90px] h-[90px] px-9 flex justify-between items-center gap-9 border-b border-b-gray-200 shadow-[0px_3px_16px_0px_rgba(58,_121,_216,_0.10)] z-[1]">
    //   <Link to='/'><img className="h-8 w-auto" src={Logo} alt="Company Logo" /></Link>
    //   <div className='ml-auto flex items-center gap-6'>
    //     {navItems.map((item) =>
    //       <Link to={item.link} className="flex items-center gap-1 text-sm text-dark hover:text-primary">
    //         {item.icon || null}
    //         {item.title}
    //       </Link>
    //     )}
    //   </div>
    //   <div className="flex items-center gap-4">
    //     <RiUser3Fill />
    //     <Button>Logout</Button>
    //   </div>
    // </nav>
  );
}

const navItems = [

  {
    title: 'About',
    link: '#/'
  },
  {
    title: 'Help',
    link: '#/'
  },
  {
    title: 'Admin',
    link: '#/'
  },
]