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
      <div className='flex items-center justify-center w-full bg-sky-700 text-white sticky top-0 z-10 flex-col'>
        <div className='w-3/4 flex py-4 justify-between'>
          <span className='w-1/3 justify-start'>LOGO</span>
          <ul className='flex items-center w-1/5 justify-end'>
            <li className='px-4'>English</li>
            <li className='px-4'>Sign In</li>
            <li className='pl-4 cursor-pointer text-2xl' onClick={openMenu}>{menuIsOpened ? <RxCross2/> :
              <HiOutlineMenu/>}</li>
          </ul>
        </div>
      </div>
      {menuIsOpened && <div className='w-full flex bg-gray-100 p-6 justify-center absolute top-0 z-0'>
        <div className='w-3/4 justify-center flex'>
          <div className='w-1/2'>
            <MenuOptions/>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Navbar;