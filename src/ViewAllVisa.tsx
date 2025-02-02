import Card from "@/Components/Card.tsx";

const ViewAllVisa = () => {
  return (
    <div className='h-auto w-full flex justify-center items-center my-8'>
      <div className='w-3/4'>
        <h1 className='text-3xl font-bold my-2 font-heading mb-6'>All services</h1>
        <div className='h-auto grid gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1'>
          <Card header={'Test test'} desc={'test test ??? long test and long text... lets see how it performs'}/>
          <Card header={'Test jaydeep'} desc={'test test ??? long test and long text... lets see how it performs'}/>
          <Card header={'Test hardik'}
                desc={'test test ??? long test and long text... lets see how it performs test test ??? long test and long text... lets see how it performs test test ??? long test and long text... lets see how it performs test test ??? long test and long text...'}/>
          <Card header={'Test alpesh'}
                desc={'test test ??? long test and long text... lets see how it performs test test ??? long test and long text... lets see how it performs test test ??? long test and long text... lets see how it performs test test ??? long test and long text...'}/>
          <Card header={'Test'}
                desc={'test test ??? long test and long text... lets see how it performs test test ??? long test and long text... lets see how it performs test test ??? long test and long text... lets see how it performs test test ??? long test and long text...'}/>
        </div>
      </div>
    </div>
  )
}

export default ViewAllVisa;