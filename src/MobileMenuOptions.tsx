import Options from "@/Interfaces/Footer.tsx";
import {useState} from "react";

const optionClass = 'border-b-2 border-transparent hover:border-b-primary hover:text-primary transition-all duration-300 ease-in-out';

const MobileMenuOptions = () => {

  const [expanded, setExpanded] = useState<boolean[]>(new Array(Options.length).fill(false));

  const expandMenu = (index: number) => {
    if(expanded[index]) {
      setExpanded(new Array(Options.length).fill(false));
    } else {
      const newArr: boolean[] = new Array(Options.length).fill(false);
      newArr[index] = true;
      setExpanded(newArr);
    }
  }

  return (
    <>
      <div className='flex justify-between md:flex-row flex-col'>
        {Options.map((option, index) => <div key={option.header}>
          <h2 className='font-semibold text-xl md:mb-6 my-2' onClick={() => expandMenu(index)}>{option.header}</h2>
          {expanded[index] && <ul className='items-center'>
            {option.services.map(service => <li className='my-2' key={service}><a href='https://localhost'
                                                                                    className={optionClass}>{service}</a></li>)}
          </ul>}
        </div>)
        }
      </div>
    </>
  )
}

export default MobileMenuOptions;