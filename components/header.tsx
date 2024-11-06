"use client"; 
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Биржа", link: "/about" },
    { id: 3, title: "Ворки", link: "/contact" },
    { id: 4, title: "Конкурсы", link: "/blog" },
  ];

  return (
    <div className="w-full bg-white sticky top-[0] left-[0] z-[99] shadow-md">
      <div className="w-[85%] m-auto h-[70px] flex justify-between items-center lg:h-[80px]">
        <div className="flex gap-[60px] lg:gap-[50px] items-center">
          <Image src="/logo.svg" alt="logo" width={140} height={50} />
          <nav className="hidden md:flex gap-[30px] items-center lg:gap-[40px]">
            {routes.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className="text-[12px] font-medium hover:text-[#1DBF73] ease-in-out duration-300 lg:text-[16px]"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex gap-[30px]">
          <button className="text-[12px] py-[6px] px-[24px] rounded-[50px] lg:text-[16px] lg:py-[10px] lg:px-[30px] ease-in-out duration-500 font-medium bg-[#F2F0FE] hover:bg-[#1DBF73] text-[#1DBF73] hover:text-white">
            Регистрация
          </button>
          <button className="text-[12px] py-[6px] px-[24px] rounded-[50px] lg:text-[16px] lg:py-[10px] lg:px-[30px] ease-in-out duration-500 font-medium bg-[#F2F0FE] hover:bg-[#1DBF73] text-[#1DBF73] hover:text-white">
            Войти
          </button>
        </div>

        <button
          className="block md:hidden text-3xl text-[#1DBF73]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-2/3 bg-white shadow-lg transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between p-5">
          <Image src="/logo.svg" alt="logo" width={120} height={40} />
          <button
            className="text-3xl text-[#1DBF73]"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col gap-6 mt-10 ml-5 text-[18px] font-medium">
          {routes.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              onClick={() => setOpen(false)}
              className="hover:text-[#1DBF73] ease-in-out duration-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-4 mt-10 ml-5">
          <button className="text-[16px] py-[10px] px-[30px] rounded-[50px] font-medium bg-[#F2F0FE] hover:bg-[#1DBF73] text-[#1DBF73] hover:text-white ease-in-out duration-300">
            Регистрация
          </button>
          <button className="text-[16px] py-[10px] px-[30px] rounded-[50px] font-medium bg-[#F2F0FE] hover:bg-[#1DBF73] text-[#1DBF73] hover:text-white ease-in-out duration-300">
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
