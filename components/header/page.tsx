"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  const isProfile = pathname === "/profile"; 

  const [menuOpen, setMenuOpen] = useState(false); 
  const routes = [
    { id: 1, title: "Биржа", link: "/birja" },
    { id: 2, title: "Ворки", link: "/contact" },
    { id: 3, title: "Конкурсы", link: "/blog" },
  ];

  return (
    <div className="w-full bg-white sticky top-0 left-0 z-[99] shadow-md">
      <div className="w-[85%] m-auto h-[70px] flex justify-between items-center lg:h-[80px]">
        <div className="flex gap-[60px] lg:gap-[50px] items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={140} height={50} />
          </Link>
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
          {isProfile ? (
            <div className="flex items-center gap-[15px]">
              <div className="flex gap-[32px]">
                <Image src="/star.svg" alt="star" width={24} height={24} />
                <Image src="/q1.svg" alt="q1" width={24} height={24} />
                <Image src="/chat.svg" alt="chat" width={24} height={24} />
              </div>
              <h1 className="text-[16px] text-[#222222]">Ернар Ибрагимов</h1>
              <Image src="/profil.svg" alt="profil" width={55} height={55} />
            </div>
          ) : (
            <>
              <Link href="/register">
                <button className="text-[12px] py-[6px] px-[24px] rounded-[50px] lg:text-[16px] lg:py-[10px] lg:px-[30px] ease-in-out duration-500 font-medium bg-[#F2F0FE] hover:bg-[#1DBF73] text-[#1DBF73] hover:text-white">
                  Регистрация
                </button>
              </Link>
              <Link href="/login">
                <button className="text-[12px] py-[6px] px-[24px] rounded-[50px] lg:text-[16px] lg:py-[10px] lg:px-[30px] ease-in-out duration-500 font-medium bg-[#F2F0FE] hover:bg-[#1DBF73] text-[#1DBF73] hover:text-white">
                  Войти
                </button>
              </Link>
            </>
          )}
        </div>

        <button
          className="block md:hidden text-3xl text-[#1DBF73]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-2/3 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between p-5">
          <Image src="/logo.svg" alt="logo" width={120} height={40} />
          <button
            className="text-3xl text-[#1DBF73]"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col gap-6 mt-10 ml-5 text-[18px] font-medium">
          {routes.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#1DBF73] ease-in-out duration-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col mt-10 ml-5">
          {isProfile ? (
            <div className="gap-[30px]">
              <div className="flex gap-[32px]">
                <Image src="/star.svg" alt="star" width={24} height={24} />
                <Image src="/q1.svg" alt="q1" width={24} height={24} />
                <Image src="/chat.svg" alt="chat" width={24} height={24} />
              </div>
              <div className="flex flex-col mt-[20px] gap-[15px]">
                <h1 className="text-[16px] text-[#222222]">Ернар Ибрагимов</h1>
                <Image src="/profil.svg" alt="profil" width={55} height={55} />
              </div>
            </div>
          ) : (
            <>
              <Link href="/register">
                <button className="text-[16px] py-[10px] px-[30px] rounded-[50px] font-medium bg-[#F2F0FE] hover:bg-[#1DBF73] text-[#1DBF73] hover:text-white ease-in-out duration-300">
                  Регистрация
                </button>
              </Link>
              <Link href="/login">
                <button className="text-[16px] my-4 py-[10px] px-[30px] rounded-[50px] font-medium bg-[#F2F0FE] hover:bg-[#1DBF73] text-[#1DBF73] hover:text-white ease-in-out duration-300">
                  Войти
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
