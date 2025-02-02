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
      <div className='flex items-center justify-center w-full bg-sky-700 sticky top-0 flex-col'>
        <div className='w-3/4 flex py-4 justify-between text-white'>
          <span className='w-1/3 justify-start'>LOGO</span>
          <ul className='flex items-center w-1/5 justify-end'>
            <li>
              <button className='px-4 py-1 hover:text-black hover:bg-white hover:outline-2'>English</button>
            </li>
            <li>
              <button className='px-4 py-1 hover:text-black hover:bg-white hover:outline-2'>Sign In</button>
            </li>
            <li className='ml-4 cursor-pointer text-2xl' onClick={openMenu}>{menuIsOpened ? <RxCross2/> :
              <HiOutlineMenu/>}</li>
          </ul>
        </div>

        {menuIsOpened && <div className='w-full flex bg-gray-100 p-6 justify-center absolute top-full z-0'>
            <div className='w-1/2'>
                <MenuOptions/>
            </div>
        </div>}
      </div>

    </>
  )
}

export default Navbar;