const Input = ({placeholder} : {placeholder: string}) => {
  return (
      <input type='text' placeholder={placeholder} className='w-full p-1 pl-2 border-2 border-black focus:rounded-none focus:outline-none focus:border-blue-500'/>
  )
}

export default Input;