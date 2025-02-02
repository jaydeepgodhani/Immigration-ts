import Input from "@/Components/Input.tsx";

const Searchbar = () => {

  return (
      <div className='flex items-center justify-center w-full border-b-2 border-b-gray-100 box-border'>
        <div className='w-3/4 flex my-2'>
          <ul className='flex w-full my-2 items-center font-bold'>
            <li className='mr-8 border-b-2 border-transparent hover:border-b-sky-700 hover:text-sky-700 transition-all duration-300 ease-in-out'><a href='https://localhost'>Visas</a></li>
            <li className='mr-8 border-b-2 border-transparent hover:border-b-sky-700 hover:text-sky-700 transition-all duration-300 ease-in-out'><a href='https://localhost'>Passports</a></li>
            <li className='mr-8 border-b-2 border-transparent hover:border-b-sky-700 hover:text-sky-700 transition-all duration-300 ease-in-out'><a href='https://localhost'>Contact</a></li>
          </ul>
          <div className='w-1/3 flex items-center'><Input placeholder='Search Anything'/></div>
        </div>
      </div>
  )
}

export default Searchbar;