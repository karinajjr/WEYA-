import React from 'react'
import Logo from '../../public/assets/logo/Logo.png'

function Footer() {
  return (
    <footer className="relative w-full p-8 bg-base-200 bg-gradient-to-r from-[#152331] to-[#000000] rounded-t-3xl text-gray-50">


      <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0">
        <img src={Logo} alt="Logo" className="w-20" />
      </div>


      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6 mt-16 md:mt-0">

        <nav className="hidden md:flex flex-wrap justify-center gap-2 md:gap-6 text-sm">
          <a href="#">EDU</a>
          <a href="#">Talk</a>
          <a href="#">Webtoon</a>
          <a href="#">Game</a>
          <a href="#">Media</a>
          <a href="#">Contest</a>
        </nav>


        <nav className="flex flex-wrap justify-center gap-2 md:gap-6  text-sm">
          <a href="#">About us</a>
          <a href="#">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </nav>


        <div className="text-xs text-center md:text-left space-y-1 md:space-y-1 md:flex md:flex-col md:items-center">
  <div className="space-y-1 md:space-y-0 md:flex md:space-x-2">
    <p>KOREA : Weayaa Co., LTD CEO</p>
    <p>이승현 등록번호 482-88-02872</p>
  </div>
  <div className="space-y-1 md:space-y-0 md:flex md:space-x-2">
    <p>UZBEKISTAN : Weayaa LLC CEO</p>
    <p>김대근 등록번호 311-176-835</p>
  </div>
  <div className="space-y-1 md:space-y-0 md:flex md:space-x-2">
    <p>Copyright® 2024, WeaYaa.</p>
    <p>All rights reserved.</p>
  </div>
</div>


      </div>
    </footer>
  )
}

export default Footer
