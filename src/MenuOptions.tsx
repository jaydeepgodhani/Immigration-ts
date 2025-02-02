import {useMediaQuery} from 'react-responsive';
import MobileMenuOptions from "@/MobileMenuOptions.tsx";
import Options from "@/Interfaces/Footer.tsx";

const optionClass = 'border-b-2 border-transparent hover:border-b-sky-700 hover:text-sky-700  transition-all duration-300 ease-in-out';

const MenuOptions = () => {
  const isMobile: boolean = useMediaQuery({query: '(max-width: 767px)'});
  console.log('mobile check... ', isMobile);

  return (
    isMobile ? <MobileMenuOptions/> :
      <div className='flex justify-between md:flex-row flex-col'>
        {Options.map((option) => <div key={option.header}>
          <h2 className='font-semibold text-xl md:mb-6'>{option.header}</h2>
          <ul className='items-center'>
            {option.services.map(service => <li className='my-2' key={service}><a href='https://localhost'
                                                                    className={optionClass}>{service}</a></li>)}
          </ul>
        </div>)
        }
      </div>
  )
}

export default MenuOptions;