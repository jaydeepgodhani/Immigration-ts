
const optionClass = 'border-b-2 border-transparent hover:border-b-sky-700 hover:text-sky-700  transition-all duration-300 ease-in-out';

const MenuOptions = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <h2 className='font-semibold text-xl mb-6'>Service</h2>
        <ul className='items-center'>
          <li className='my-2'><a href='https://localhost' className={optionClass}>Visas</a></li>
          <li className='my-2'><a href='https://localhost' className={optionClass}>Passport</a></li>
          <li className='my-2'><a href='https://localhost' className={optionClass}>Doc Authentication</a></li>
        </ul>
      </div>
      <div>
        <h2 className='font-semibold text-xl mb-6'>Solutions</h2>
        <ul className='items-center'>
          <li className='my-2'><a href='https://localhost' className={optionClass}>For Travel</a></li>
          <li className='my-2'><a href='https://localhost' className={optionClass}>For Business</a></li>
          <li className='my-2'><a href='https://localhost' className={optionClass}>For Partners</a></li>
        </ul>
      </div>
      <div>
        <h2 className='font-semibold text-xl mb-6'>Information</h2>
        <ul className='items-center'>
          <li className='my-2'><a href='https://localhost' className={optionClass}>About Us</a></li>
          <li className='my-2'><a href='https://localhost' className={optionClass}>VisaHQ Reviews</a></li>
          <li className='my-2'><a href='https://localhost' className={optionClass}>Knowledge</a></li>
          <li className='my-2'><a href='https://localhost' className={optionClass}>News</a></li>
          <li className='my-2'><a href='https://localhost' className={optionClass}>Terms of Service</a></li>
          <li className='my-2'><a href='https://localhost' className={optionClass}>Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h2 className='font-semibold text-xl mb-6'>Contact Us</h2>
        <ul className='items-center'>
          <li className='my-2'><a href='https://localhost' className={optionClass}>Our Offices</a></li>
          <li className='my-2'><a href='https://localhost' className={optionClass}>Call Me</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MenuOptions;