import {RxCross2} from "react-icons/rx";
import {HiOutlineMenu} from "react-icons/hi";
import {useState} from "react";
import MenuOptions from "@/MenuOptions.tsx";

const Navbar = () => {

  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false);

  const openMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  }

  return (
    <>
      <div className='flex items-center justify-center w-full bg-primary sticky top-0 flex-col'>
        <div className='flex py-4 justify-between text-white md:w-3/4 w-11/12'>
          <span className='justify-start xl:w-1/3 md:w-1/2 w-1/3'>LOGO</span>
          <ul className='flex items-center justify-end xl:w-1/5 md:w-1/2 w-2/3'>
            <li>
              <button className='px-4 py-1 hover:text-black hover:bg-white hover:outline-2 transition-all duration-500 ease-in-out'>English</button>
            </li>
            <li>
              <button className='px-4 py-1 hover:text-black hover:bg-white hover:outline-2 transition-all duration-500 ease-in-out'>Sign In</button>
            </li>
            <li className='ml-4 cursor-pointer text-2xl' onClick={openMenu}>{menuIsOpened ? <RxCross2/> :
              <HiOutlineMenu/>}</li>
          </ul>
        </div>

        {menuIsOpened && <div className='w-full flex bg-gray-100 p-6 justify-center absolute top-full z-0 animate-fade shadow-xl'>
            <div className='xl:w-1/2 md:w-3/4'>
                <MenuOptions/>
            </div>
        </div>}
      </div>

    </>
  )
}

export default Navbar;