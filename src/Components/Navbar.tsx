import {RxCross2} from "react-icons/rx";
import {HiOutlineMenu} from "react-icons/hi";
import Input from "@/Components/Input.tsx";
import {useState} from "react";

const Navbar = () => {

  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false);

  const openMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col w-full justify-center items-center'>
        <div className='w-3/4 flex bg-amber-400 py-6 justify-between'>
          <span className='w-1/3 justify-start'>LOGO</span>
          <ul className='flex items-center w-1/5 justify-end'>
            <li className='px-4'>English</li>
            <li className='px-4'>Sign In</li>
            <li className='pl-4 cursor-pointer text-2xl' onClick={openMenu}>{menuIsOpened ? <RxCross2/> :
              <HiOutlineMenu/>}</li>
          </ul>
        </div>
        <div
          className='flex items-center justify-center w-full border-t-2 border-t-gray-400 border-b-2 border-b-gray-400'>
          <div className='w-3/4 flex py-2'>
            <ul className='flex w-full py-2 items-center font-bold'>
              <li className='pr-8'>Visas</li>
              <li className='px-8'>Passports</li>
              <li className='px-8'>Contact</li>
            </ul>
            <div className='w-1/3 flex items-center'><Input placeholder='Search Anything'/></div>
          </div>

        </div>
        {menuIsOpened && <div className='w-full flex bg-gray-100 p-6 justify-center'>
            <div className='w-3/4 justify-center flex'>
                <div className='w-1/2'>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='font-semibold text-xl mb-6'>Service</h2>
                            <ul className='items-center'>
                                <li className='my-2'>Visas</li>
                                <li className='my-2'>Passport</li>
                                <li className='my-2'>Doc Authentication</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-semibold text-xl mb-6'>Solutions</h2>
                            <ul className='items-center'>
                                <li className='my-2'>For Travel</li>
                                <li className='my-2'>For Business</li>
                                <li className='my-2'>For Partners</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-semibold text-xl mb-6'>Information</h2>
                            <ul className='items-center'>
                                <li className='my-2'>About Us</li>
                                <li className='my-2'>VisaHQ Reviews</li>
                                <li className='my-2'>Knowledge</li>
                                <li className='my-2'>News</li>
                                <li className='my-2'>Terms of Service</li>
                                <li className='my-2'>Privacy Policy</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-semibold text-xl mb-6'>Contact Us</h2>
                            <ul className='items-center'>
                                <li className='my-2'>Our Offices</li>
                                <li className='my-2'>Call Me</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar;