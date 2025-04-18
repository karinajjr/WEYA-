import React from 'react'

function Footer(){
  return (
    <footer className="text-gray-900 dark:text-gray-50 rounded-t-2xl w-full border-b-0 p-8 border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
      <div className="mx-auto text-center md:text-left">
        <h2 className="text-lg font-semibold mb-4">LOGO.</h2>
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 text-sm mb-4">
          <a href="#">About us</a>
          <a href="#">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="text-xs space-y-1">
          <p>KOREA : Weaya Co., LTD CEO 이성혁 등록번호 482-88-02872</p>
          <p>UZBEKISTAN : Weaya LLC CEO 리야드 등록번호 311-176-835</p>
          <p>Copyright© 2024, WeaVas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer