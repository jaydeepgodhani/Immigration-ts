import { FaSquareXTwitter, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className='w-full bg-gray-200 flex items-center justify-center'>
        <div className='w-3/4 py-6 flex justify-center'>
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
      <div className='w-full bg-blue-200 flex items-center justify-center'>
        <div className='w-3/4 py-6 flex justify-center'>
          <div className='w-1/2 flex justify-center'>
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