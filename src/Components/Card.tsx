const Card = ({ header, desc}: {header: string, desc: string} ) => {
  return (
    <div className='border-2 border-sky-700 p-2 h-56 shadow-xl hover:bg-sky-100 overflow-clip'>
      <p className='text-2xl flex justify-start m-2 mb-3 underline underline-offset-8 decoration-sky-500 decoration-8'>{header}</p>

      <div className='flex justify-start m-2'>{desc}</div>
    </div>
  );
}

export default Card;