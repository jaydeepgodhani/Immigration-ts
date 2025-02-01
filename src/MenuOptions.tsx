const MenuOptions = () => {
  return (
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
  )
}

export default MenuOptions;