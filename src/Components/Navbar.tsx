import {RxCross2} from "react-icons/rx";
import {HiOutlineMenu} from "react-icons/hi";
import Input from "@/Components/Input.tsx";
import {useState} from "react";
import MenuOptions from "@/MenuOptions.tsx";

const Navbar = () => {

  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false);

  const openMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  }

  return (
    <div className='flex justify-center items-center relative flex-col'>
      <div className='flex items-center justify-center w-full bg-sky-700 text-white sticky top-0 z-10'>
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

      <div className='flex items-center justify-center w-full border-b-2 border-b-gray-100'>
        <div className='w-3/4 flex py-2'>
          <ul className='flex w-full py-2 items-center font-bold'>
            <li className='pr-8'>Visas</li>
            <li className='px-8'>Passports</li>
            <li className='px-8'>Contact</li>
          </ul>
          <div className='w-1/3 flex items-center'><Input placeholder='Search Anything'/></div>
        </div>

      </div>
    </div>
  )
}

export default Navbar;