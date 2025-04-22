import React from 'react'
import GoogleIcon from '../../public/GoogleIcon.png'

function Login() {
  return (
    <>
      <div className="bg-[url('/Bg.png')] bg-no-repeat w-full  flex justify-center items-center bg-cover bg-center h-screen ">

        <div className=' border border-black/12 bg-white rounded-2xl px-10 py-12 shadow'>
          <div className='text-center mb-4'>
            <h1 className='font-medium text-3xl mb-2'>Hisobingizga kiring</h1>
            <p className='text-[#686868] text-lg font-light'>Xusg kelibsiz! Quyidegilar orqali <br /> hisobingiga kiring</p>
          </div>
          <div className=' mb-3'>
            <button className='btn border-none bg-white w-full shadow'> 
              <img src={GoogleIcon} className='w-4' alt="" />Google</button>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <hr className="flex-grow border-[#F5F5F5]" />
            <p className="text-[#686868] text-center text-xs">Yoki</p>
            <hr className="flex-grow border-[#F5F5F5]" />
          </div>



          <div className='mb-3'>
            <p className='text-xs font-medium mb-1 '>Emailingizni kiriting</p>
            <label className="input w-full border-none bg-[#F7F8F9]">
              <i class="bi bi-envelope text-[#686868]"></i>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <div>
            <p className='text-xs font-medium mb-1'>Parolni kiriting</p>
            <label className="input w-full border-none bg-[#F7F8F9]">
              <i class="bi bi-lock text-[#686868]"></i>
              <input type="search" className="grow" placeholder="Parol" />
              <kbd className=""><i class="bi bi-eye-slash text-[#686868]"></i></kbd>
            </label>
          </div>


          <div className=' flex justify-between mt-4 '>
            <div className='flex '>
              <input type="checkbox" defaultChecked className="checkbox text-[#686868] border border-[#686868] w-4.5 h-4.5 mr-1.5 rounded-sm " />
              <p className='text-xs text-[#686868]'>Eslab qolish</p>
            </div>
            <p className="text-xs font-medium bg-gradient-to-r from-[#8360C3] to-[#2EBF91] bg-clip-text text-transparent">
              Parolni unitdingizmi?
            </p>
          </div>

          <button className='btn w-full border-none  bg-gradient-to-r from-[#8360C3] to-[#2EBF91] text-white mt-4 rounded-lg'>Kirish</button>

          <div className='flex justify-between gap-10 mt-3'>
            <p className='text-xs text-[#686868]'>Sizning hisobingiz yo’qmi?</p>
            <p className='text-xs font-medium bg-gradient-to-r from-[#8360C3] to-[#2EBF91] bg-clip-text text-transparent'>Ro’yxatdan o’tish</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Login