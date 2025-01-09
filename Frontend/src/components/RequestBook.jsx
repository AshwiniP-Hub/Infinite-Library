import React from 'react'

const RequestBook = () => {
  return (
    <>
     <div className=" w-screen h-screen flex items-center justify-center p-4 ">
     {/* <div className=" max-w-80 mx-auto  p-4"> */}
    <form className="">
        {/* Fieldset with legend  */}
    <fieldset className="border border-gray-300 rounded-md p-4">
      <legend className="text-lg font-semibold text-gray-700 px-2">Request A Book</legend>
      <div className='mx-6 font-semibold '>Please fill up the form below to Request a Book. We will inform you as soon as the book is available.</div>
    
     <div className='flex my-2 mx-2'>
          <div className='mx-4'>
                <div><span>ISBN13:</span><br/>
                <input type="text" placeholder='' className='outline-none w-[400px] px-4 py-1 text-sm rounded-md border-[2px]' name="" id="" />
                </div>
                <div>
                <span>Email Id:</span><br/>
                <input type="text" placeholder='' className='outline-none w-[400px] px-4 py-1 text-sm rounded-md border-[2px]' name="" id="" />
                </div>
                <div>
                <span>Phone/Mobile:</span><br/>
                <input type="text" placeholder='' className='outline-none w-[400px] px-4 py-1 text-sm rounded-md border-[2px]' name="" id="" />
                </div>
                       
          </div>
          <div  >

                  <div>
                  <span>Author:</span><br/>
                  <input type="text" placeholder='' className='outline-none w-[400px] px-4 py-1 text-sm rounded-md border-[2px]' name="" id="" />  
                  </div>
                  <div>
                  <span>Book Title:</span><br/>
                  <input type="text" placeholder='' className='outline-none w-[400px] px-4 py-1 text-sm rounded-md border-[2px]' name="" id="" />
                  </div>
                  <div>
                  <span>Quantity:</span><br/>
                  <input type="text" placeholder='' className='outline-none w-[400px] px-4 py-1 text-sm rounded-md border-[2px]' name="" id="" />      
                 </div>
          </div>
     </div>
          <div className='p-2 flex justify-end '>
              <button className='bg-pink-500 hover:bg-violet-500 text-lg px-4 font-semibold py-2 rounded-lg'>Submit</button>
            </div>
     

    </fieldset>
  </form>
</div>

    </>
  )
}

export default RequestBook