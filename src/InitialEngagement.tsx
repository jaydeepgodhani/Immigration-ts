const InitialEngagement = () => {
  return (
      <div className='h-auto w-full flex justify-center items-center'>
        <div className='h-auto w-full m-4 items-center justify-center flex flex-col p-4'>
          <h1 className='text-2xl font-bold m-2 mt-20'>Travel Visa Requirement</h1>
          <span>Sometimes a journey of a thousand miles begins with a visa.</span>
          <span>Check your destination and apply online for any visa in the world.</span>
          <div className='w-1/2 flex items-center justify-center flex-col mt-4'>
            <div className='w-full flex items-center justify-center h-[70px]'>

              <div className='w-1/3 flex items-center justify-between flex-col h-full'>
                <div className='w-full'>For citizens of</div>
                <select className='w-full h-[40px]'>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <div className='flex w-1/3 items-center justify-between flex-col h-full'>
                <div className='w-full'>Travelling to</div>
                <select className='w-full h-[40px] '>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>

              <button className='w-1/3 flex items-center justify-center h-full text-xl bg-sky-700 ml-2 text-white'>
                Check Requirements
              </button>

            </div>
            <div className='w-full h-[70px] flex items-center justify-center'>Need help? Call us 7 days a week
              +91-xxx-xxx-xxxx
            </div>
          </div>
        </div>


      </div>
  )
}

export default InitialEngagement;