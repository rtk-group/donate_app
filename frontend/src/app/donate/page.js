import React from 'react'

function Page() {
  return (
    <div className='border flex '>
      {/* left section */}
      <div className='border w-[50%]'>left section</div>

      {/* right section */}
      <div className='border py-10 border w-[50%] px-7'>
      <form action="/submit" method="POST" className='flex flex-col gap-4'>
      <div className='flex justify-between border'>
          <label for="name">Name:</label>
        <input type="text" id="name" name="name" className='border w-70 h-10' required />
      </div>

      <div className='flex justify-between border'>
          <label for="phone">Phone:</label>
        <input type="number" id="phone" name="phone" className='border w-70 h-10' required />
      </div>
      <div className='flex justify-between border'>
          <label for="email">Email:</label>
        <input type="email" id="email" name="email" className='border w-70 h-10' required />
      </div>
      <div className='flex justify-between border'>
          <label for="amount">Amount:</label>
        <input type="number" id="amount" name="amount" className='border w-70 h-10' required />
      </div>

      <div className='flex justify-between border'>
          <label for="pan">PAN:</label>
        <input type="text" id="pan" name="pan" className='border w-70 h-10' required />
      </div>

      <div className='flex justify-between border'>
          <label for="donate_type">Donate Type:</label>
          <select id='donate_type' className='border w-70 h-10'>
            <option value=''>--Select--</option>
            <option value='Zakat'>Zakat</option>
            <option value='None-Zakat'>None-Zakat</option>
          </select>
      </div>

      <div className='flex justify-between border'>
          <label for="address">Address:</label>
        <input type="text" id="address" name="address" className='border w-70 h-10'  />
      </div>
        
        <button type="submit" className='border w-40 mx-auto'>Submit</button>
      </form>

    </div>
    </div>
  )
}

export default Page







