import { FaSquareXTwitter, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa6";
import MenuOptions from "@/MenuOptions.tsx";

const Footer = () => {
  return (
    <div>
      <div className='w-full bg-gray-100 flex items-center justify-center'>
        <div className='py-6 flex justify-center xl:w-3/4 md:w-3/4'>
          <div className='w-full xl:w-1/2'>
            <MenuOptions />
          </div>
        </div>
      </div>
      <div className='w-full bg-sky-200 flex items-center justify-center'>
        <div className='py-6 flex justify-center xl:w-3/4 md:w-3/4'>
          <div className='flex justify-center xl:w-1/2 md:w-full'>
            <div className='w-[70%]'>&copy; Its our Immigration mf</div>
            <div className='w-[30%] flex justify-end items-center'>

              <ul className='flex'>
                <li className='mr-4 text-2xl'><FaSquareXTwitter /></li>
                <li className='mr-4 text-2xl'><FaFacebook /></li>
                <li className='mr-4 text-2xl'><FaYoutube /></li>
                <li className=' text-2xl'><FaLinkedin /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;