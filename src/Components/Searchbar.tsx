import Input from "@/Components/Input.tsx";

const liClass = 'md:mr-8 mr-4 border-b-2 border-transparent hover:border-b-primary hover:text-primary transition-all duration-300 ease-in-out';

const Searchbar = () => {

  return (
      <div className='flex items-center justify-center w-full border-b-2 border-b-gray-100 box-border'>
        <div className='md:w-3/4 w-11/12 flex my-2'>
          <ul className='flex w-full my-2 items-center font-bold'>
            <li className={liClass}><a href='https://localhost'>Visas</a></li>
            <li className={liClass}><a href='https://localhost'>Passports</a></li>
            <li className={liClass}><a href='https://localhost'>Contact</a></li>
          </ul>
          <div className='flex items-center xl:w-1/3 md:w-1/2 w-full'><Input placeholder='Search Anything'/></div>
        </div>
      </div>
  )
}

export default Searchbar;