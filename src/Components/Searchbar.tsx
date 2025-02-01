import Input from "@/Components/Input.tsx";

const Searchbar = () => {

  return (
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
  )
}

export default Searchbar;