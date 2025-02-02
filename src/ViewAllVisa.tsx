import Card from "@/Components/Card.tsx";

const ViewAllVisa = () => {
  return (
    <div className='h-auto w-full flex justify-center items-center my-4'>
      <div className='w-3/4'>
        <h1 className='text-2xl font-bold my-2'>All services</h1>
        <div className='h-auto grid grid-cols-3 gap-4'>
          <Card header={'Test'} desc={'test test ??? long test and long text... lets see how it performs'}/>
          <Card header={'Test'} desc={'test test ??? long test and long text... lets see how it performs'}/>
          <Card header={'Test'}
                desc={'test test ??? long test and long text... lets see how it performs test test ??? long test and long text... lets see how it performs test test ??? long test and long text... lets see how it performs test test ??? long test and long text...'}/>
          <Card header={'Test'}
                desc={'test test ??? long test and long text... lets see how it performs test test ??? long test and long text... lets see how it performs test test ??? long test and long text... lets see how it performs test test ??? long test and long text...'}/>
          <Card header={'Test'}
                desc={'test test ??? long test and long text... lets see how it performs test test ??? long test and long text... lets see how it performs test test ??? long test and long text... lets see how it performs test test ??? long test and long text...'}/>
        </div>
      </div>
    </div>
  )
}

export default ViewAllVisa;