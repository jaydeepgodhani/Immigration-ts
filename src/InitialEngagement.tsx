const InitialEngagement = () => {
  return (
    <div
      className="w-full flex items-center justify-center bg-gradient-to-r to-white from-10%  from-sky-500 to-100%">
      <div className='h-auto flex flex-col mb-16 md:w-3/4 w-11/12'>
        <h1 className='text-3xl font-bold mt-20 font-heading mb-6'>Travel Visa Requirement</h1>
        <span>Sometimes a journey of a thousand miles begins with a visa.</span>
        <span>Check your destination and apply online for any visa in the world.</span>
        <div className='xl:w-1/2 md:w-full flex items-center justify-center flex-col mt-4'>
          <div className='w-full flex items-center justify-center h-max md:flex-row flex-col'>

            <div className='md:w-2/3 w-full flex flex-row justify-end h-[50px]'>
              <div className='w-1/2 flex items-center justify-between flex-col md:h-full'>
                <div className='w-full'>For citizens of</div>
                <select className='w-full md:h-max h-auto'>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <div className='flex w-1/2 items-center justify-between flex-col md:h-full'>
                <div className='w-full'>Travelling to</div>
                <select className='w-full md:h-max h-auto'>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
            </div>
            <button className='md:w-1/3 w-full flex items-center justify-center h-[50px] py-2 text-xl bg-sky-700 text-white'>
              Check Requirements
            </button>

          </div>
          <div className=' mt-6 w-full md:h-[70px] h-auto flex items-center justify-center bg-sky-700/30'>Need help? Call us 7
            days a week
            +91-xxx-xxx-xxxx
          </div>
        </div>
      </div>
    </div>
  )
}

export default InitialEngagement;