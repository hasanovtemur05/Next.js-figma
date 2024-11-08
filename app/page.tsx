"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, title: "Биржа", link: "/about" },
    { id: 2, title: "Ворки", link: "/contact" },
    { id: 3, title: "Конкурсы", link: "/blog" },
  ];
  return (
    <div className="w-full h-auto">
      <div className="w-full bg-white sticky top-[0] left-[0] z-[99] shadow-md">
        <div className="w-[85%] m-auto h-[70px] flex justify-between items-center lg:h-[80px]">
          <div className="flex gap-[60px] lg:gap-[50px] items-center">
            <Link href="/" ><Image src="/logo.svg" alt="logo" width={140} height={50} /></Link>
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
           <Link href="/login">
           <button className="text-[16px] py-[10px] px-[30px] rounded-[50px] font-medium bg-[#F2F0FE] hover:bg-[#1DBF73] text-[#1DBF73] hover:text-white ease-in-out duration-300">
              Регистрация
            </button>
           </Link>
            <button className="text-[16px] py-[10px] px-[30px] rounded-[50px] font-medium bg-[#F2F0FE] hover:bg-[#1DBF73] text-[#1DBF73] hover:text-white ease-in-out duration-300">
              Войти
            </button>
          </div>
        </div>
      </div>

      <div className="w-[85%] h-auto m-auto">
        {/* ===================  HERO  ================ */}
        <div className="w-full  h-auto mt-[40px] grid gap-[30px] md:grid-cols-2 xl:justify-between xl:gap-[100px] xl:mt-[70px]">
          {/* =============  HERO LEFT  ================== */}
          <div className="w-full h-aut">
            <h1 className="text-[20px] font-bold xl:text-[40px]">
              Покупайте фриланс-услуги в{" "}
              <span className="text-[#1DBF73] ">два клика</span>
            </h1>
            <p className="text-[#222222] py-3 lg:text-[20px] lg:py-5">
              Ворк — единица работы продавца, которую можно купить как товар в
              магазине{" "}
            </p>
            <div className="flex bg-[#F2F0FE] rounded-[50px] justify-between overflow-hidden my-3 sm:w-[400px] md:w-[300px] lg:w-[430px] lg:my-7 xl:w-[500px] ">
              <input
                type="text"
                placeholder="Что нужно сделать?"
                className="bg-inherit border-none outline-none text-[12px] w-full mx-3 lg:px-[10px] xl:text-[14px]"
              />
              <button className="py-[7px] px-[24px] text-[white] font-medium bg-[#FBA457] text-[12px] rounded-[50px] lg:py-[12px] lg:px-[30px] xl:py-[16px] xl:px-[50px] xl:text-[16px]">
                Найти
              </button>
            </div>
            <h1 className="font-medium text-[#222222] text-[14px] py-3 lg:pb-[30px] xl:text-[16px]">
              Выберите рубрику, чтобы начать
            </h1>
            <div className="grid gap-4 sm:gap-5 lg:gap-8">
              <div className="grid gap-3 lg:grid-cols-3 items-center">
                <p className="text-[14px] text-[#222222]">Тексты и переводы </p>
                <p className="text-[14px] text-[#222222]">Разработка</p>
                <p className="text-[14px] text-[#222222]">Дизайн</p>
              </div>
              <div className="grid gap-3 lg:grid-cols-3 items-center">
                <p className="text-[14px] text-[#222222]">
                  Аудио, видео монтаж{" "}
                </p>
                <p className="text-[14px] text-[#222222]">SEO и оптимизация</p>
              </div>
              <div className="grid gap-3 lg:grid-cols-3 items-center">
                <p className="text-[14px] text-[#222222]">Бизнес и жизнь</p>
                <p className="text-[14px] text-[#222222]">Соцсети и реклама</p>
                <button className="text-[12px] w-[148px] text-[#FBA457] border-[1px] ease-in-out duration-500 border-[#FBA457] hover:text-[white] font-bold rounded-[50px] py-2 px-5 hover:bg-[#FBA457]">
                  Все категории
                </button>
              </div>
            </div>
          </div>

          {/* ================  HERO RIGHT ==================== */}
          <div className="w-full h-autoflex justify-center items-center">
            <Image src="/hero.svg" alt="hero" width={600} height={400} />
          </div>
        </div>
      </div>

      {/* ======================================    Актуальные ворки   ===========================   */}
      <div className=" w-[85%] h-auto mt-[70px] m-auto flex flex-col gap-5 md:mt-[100px] lg:mt-[120px] xl:mt-[150px] lg:gap-10">
        <h1 className="text-[#222222] text-[18px] lg:text-[20px] font-medium">
          Актуальные ворки
        </h1>

        <div className=" w-full h-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3  lg:gap-8">
          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-5">
              <Image src="/i1.svg" alt="i1" width={44} height={44} />
              <h1 className="text-[14px] text-[#222222] font-medium  lg:text-[18px]">
                Сделать дизайн интернет-магазина
              </h1>
            </div>
            <p className="text-[#222222] text-[12px] lg:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
              ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc
              ornare nulla neque, interdum. At pharetra consectetur nec est
              convallis...
            </p>
            <button className="border-[1px] border-[#1DBF73] py-2 text-[12px] font-medium text-[#1DBF73] rounded-[50px] hover:bg-[#1DBF73] hover:text-white ease-in-out duration-300">
              Посмотреть
            </button>
          </div>

          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-5">
              <Image src="/i2.svg" alt="i1" width={44} height={44} />
              <h1 className="text-[14px] text-[#222222] font-medium lg:text-[18px]">
                Верстка landing page
              </h1>
            </div>
            <p className="text-[#222222] text-[12px] lg:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
              ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc
              ornare nulla neque, interdum. At pharetra consectetur nec est
              convallis...
            </p>
            <button className="border-[1px] border-[#1DBF73] py-2 text-[12px] font-medium text-[#1DBF73] rounded-[50px] hover:bg-[#1DBF73] hover:text-white ease-in-out duration-300">
              Посмотреть
            </button>
          </div>

          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-5">
              <Image src="/i3.svg" alt="i1" width={44} height={44} />
              <h1 className="text-[14px] text-[#222222] font-medium lg:text-[18px]">
                Сделать дизайн сайта-каталога и посадить на какой нибудь ко...
              </h1>
            </div>
            <p className="text-[#222222] text-[12px] lg:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
              ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc
              ornare nulla neque, interdum. At pharetra consectetur nec est
              convallis...
            </p>
            <button className="border-[1px] border-[#1DBF73] py-2 text-[12px] font-medium text-[#1DBF73] rounded-[50px] hover:bg-[#1DBF73] hover:text-white ease-in-out duration-300">
              Посмотреть
            </button>
          </div>

          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-5">
              <Image src="/i4.svg" alt="i1" width={44} height={44} />
              <h1 className="text-[14px] text-[#222222] font-medium lg:text-[18px]">
                Продвижение instagram
              </h1>
            </div>
            <p className="text-[#222222] text-[12px] lg:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
              ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc
              ornare nulla neque, interdum. At pharetra consectetur nec est
              convallis...
            </p>
            <button className="border-[1px] border-[#1DBF73] py-2 text-[12px] font-medium text-[#1DBF73] rounded-[50px] hover:bg-[#1DBF73] hover:text-white ease-in-out duration-300">
              Посмотреть
            </button>
          </div>

          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-5">
              <Image src="/i5.svg" alt="i1" width={44} height={44} />
              <h1 className="text-[14px] text-[#222222] font-medium lg:text-[18px]">
                Срочно! Нужен веб дизайнер!
              </h1>
            </div>
            <p className="text-[#222222] text-[12px] lg:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
              ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc
              ornare nulla neque, interdum. At pharetra consectetur nec est
              convallis...
            </p>
            <button className="border-[1px] border-[#1DBF73] py-2 text-[12px] font-medium text-[#1DBF73] rounded-[50px] hover:bg-[#1DBF73] hover:text-white ease-in-out duration-300">
              Посмотреть
            </button>
          </div>

          <div className="w-full p-[20px] h-[250px]  bg-[#F2F0FE] rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex  items-center justify-center ">
            <h1 className="text-[16px] font-medium text-[#1DBF73] lg:text-[20px]">
              Смотреть все ворки
            </h1>
          </div>
        </div>
      </div>

      <div className=" w-[85%] h-auto mt-[40px] m-auto flex flex-col gap-5 md:mt-[70px] lg:mt-[120px] xl:mt-[100px] lg:gap-10">
        <h1 className="text-[#222222] text-[18px] lg:text-[20px] font-medium">
          Топ фрилансеров
        </h1>

        <div className=" w-full h-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3  lg:gap-8">
          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-6 flex-col items-center sm:flex-row">
              <Image src="/c1.svg" alt="c1" width={150} height={150} />
              <div className="flex flex-col justify-center gap-1">
                <p className="text-[#222222] text-[14px] lg:text-[16px]">
                  Марина Королёва
                </p>
                <p className="text-[#FBA457] text-[14px] lg:text-[16px]">
                  Разработчик PHP{" "}
                </p>
                <p className="text-[#222222] text-[14px] lg:text-[16px]">
                  Выполено проектов: 65
                </p>
                <Image src="/star1.svg" alt="c1" width={150} height={30} />
              </div>
            </div>
            <button className="border-[1px] border-[#1DBF73] py-2 text-[12px] font-medium text-[#1DBF73] rounded-[50px] hover:bg-[#1DBF73] hover:text-white ease-in-out duration-300">
              Написать
            </button>
          </div>

          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-6 flex-col items-center sm:flex-row">
              <Image src="/c2.svg" alt="c1" width={150} height={150} />
              <div className="flex flex-col justify-center gap-1">
                <p className="text-[#222222] text-[14px] lg:text-[16px]">
                  Марина Королёва
                </p>
                <p className="text-[#FBA457] text-[14px] lg:text-[16px]">
                  Разработчик PHP{" "}
                </p>
                <p className="text-[#222222] text-[14px] lg:text-[16px]">
                  Выполено проектов: 65
                </p>
                <Image src="/star3.svg" alt="c1" width={150} height={30} />
              </div>
            </div>
            <button className="border-[1px] border-[#1DBF73] py-2 text-[12px] font-medium text-[#1DBF73] rounded-[50px] hover:bg-[#1DBF73] hover:text-white ease-in-out duration-300">
              Написать
            </button>
          </div>

          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className="flex gap-6 flex-col items-center sm:flex-row">
              <Image src="/c3.svg" alt="c1" width={150} height={150} />
              <div className="flex flex-col justify-center gap-1">
                <p className="text-[#222222] text-[14px] lg:text-[16px]">
                  Марина Королёва
                </p>
                <p className="text-[#FBA457] text-[14px] lg:text-[16px]">
                  Разработчик PHP{" "}
                </p>
                <p className="text-[#222222] text-[14px] lg:text-[16px]">
                  Выполено проектов: 65
                </p>
                <Image src="/star2.svg" alt="c1" width={150} height={30} />
              </div>
            </div>
            <button className="border-[1px] border-[#1DBF73] py-2 text-[12px] font-medium text-[#1DBF73] rounded-[50px] hover:bg-[#1DBF73] hover:text-white ease-in-out duration-300">
              Написать
            </button>
          </div>

          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-6 flex-col items-center sm:flex-row">
              <Image src="/c4.svg" alt="c1" width={150} height={150} />
              <div className="flex flex-col justify-center gap-1">
                <p className="text-[#222222] text-[14px] lg:text-[16px]">
                  Марина Королёва
                </p>
                <p className="text-[#FBA457] text-[14px] lg:text-[16px]">
                  Разработчик PHP{" "}
                </p>
                <p className="text-[#222222] text-[14px] lg:text-[16px]">
                  Выполено проектов: 65
                </p>
                <Image src="/star3.svg" alt="c1" width={150} height={30} />
              </div>
            </div>
            <button className="border-[1px] border-[#1DBF73] py-2 text-[12px] font-medium text-[#1DBF73] rounded-[50px] hover:bg-[#1DBF73] hover:text-white ease-in-out duration-300">
              Написать
            </button>
          </div>

          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-6 flex-col items-center sm:flex-row">
              <Image src="/c5.svg" alt="c1" width={150} height={150} />
              <div className="flex flex-col justify-center gap-1">
                <p className="text-[#222222] text-[14px] lg:text-[16px]">
                  Марина Королёва
                </p>
                <p className="text-[#FBA457] text-[14px] lg:text-[16px]">
                  Разработчик PHP{" "}
                </p>
                <p className="text-[#222222] text-[14px] lg:text-[16px]">
                  Выполено проектов: 65
                </p>
                <Image src="/star2.svg" alt="c1" width={150} height={30} />
              </div>
            </div>
            <button className="border-[1px] border-[#1DBF73] py-2 text-[12px] font-medium text-[#1DBF73] rounded-[50px] hover:bg-[#1DBF73] hover:text-white ease-in-out duration-300">
              Написать
            </button>
          </div>

          <div className="w-full p-[20px] h-[250px]  bg-[#F2F0FE] rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex  items-center justify-center ">
            <h1 className="text-[16px] font-medium text-[#1DBF73] lg:text-[20px]">
              Посмотреть всех ТОП фрилансеров
            </h1>
          </div>
        </div>
      </div>

      <div className=" w-[85%] h-auto mt-[40px] m-auto flex flex-col gap-5 md:mt-[70px] lg:mt-[120px] xl:mt-[100px] lg:gap-10">
        <h1 className="text-[#222222] text-[18px] lg:text-[20px] font-medium">
          Как решать задачи на WorkTap?
        </h1>
        <p className="text-[#222222] text-[14px] lg:text-[16px] ">
          Идеально подходит для бизнеса и частных лиц
        </p>

        <div className="grid md:grid-cols-2 gap-7 lg:grid-cols-3 lg:gap-12 lg:mt-7">
          <div className="flex flex-col gap-3 lg:gap-4">
            <Image src="/a1.svg" alt="c1" width={83} height={83} />
            <h1 className="text-[#222222] text-[16px]  lg:text-[18px]">
              Выберите услугу
            </h1>
            <p className="text-[#222222] text-[12px] lg:text-[16px]">
              В супермаркете WorkTap представлен широкий выбор услуг от
              квалифицированных специалистов.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4">
            <Image src="/a2.svg" alt="c1" width={83} height={83} />
            <h1 className="text-[#222222] text-[16px] lg:text-[18px]">
              Выберите услугу
            </h1>
            <p className="text-[#222222] text-[12px] lg:text-[16px]">
              В супермаркете WorkTap представлен широкий выбор услуг от
              квалифицированных специалистов.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4">
            <Image src="/a3.svg" alt="c1" width={83} height={83} />
            <h1 className="text-[#222222] text-[16px] lg:text-[18px]">
              Выберите услугу
            </h1>
            <p className="text-[#222222] text-[12px] lg:text-[16px]">
              В супермаркете WorkTap представлен широкий выбор услуг от
              квалифицированных специалистов.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#E2A401] via-[#E6A901] to-[#EFB400] mt-[40px] lg:mt-[80px] py-[50px]">
        <div className="w-[85%] h-auto m-auto grid gap-[40px] lg:grid-cols-2 items-center">
          <div className="grid gap-[50px]">
            <h1 className="text-white text-[18px] font-medium">
              Как WorkTap помогает бизнесу?
            </h1>

            <div className="grid gap-5 lg:gap-8">
              <div className="p-[20px] bg-white flex items-center gap-5 rounded-[20px] lg:gap-7">
                <Image src="/card.svg" alt="card" width={50} height={50} />
                <p className="text-[#222222] text-[10px] lg:text-[14px]">
                  Оплачивайте с р/с или карты компании
                </p>
              </div>

              <div className="p-[20px] bg-white flex items-center gap-5 rounded-[20px] lg:gap-7">
                <Image src="/mone.svg" alt="card" width={50} height={50} />
                <p className="text-[#222222] text-[10px] lg:text-[14px]">
                  Оплачивайте с р/с или карты компании
                </p>
              </div>

              <div className="p-[20px] bg-white flex items-center gap-5 rounded-[20px] lg:gap-7">
                <Image src="/date.svg" alt="card" width={50} height={50} />
                <p className="text-[#222222] text-[10px] lg:text-[14px]">
                  Оплачивайте с р/с или карты компании
                </p>
              </div>
            </div>

            <h1 className="text-[white] text-[18px] font-medium">
              WorkTap — быстро, просто и безопасно!
            </h1>
            <button className="bg-[#5E4EDB] rounded-[50px] text-[white] font-bold text-[16px] w-[230px] py-[12px]">
              Начать!
            </button>
          </div>

          <div className="w-full ">
            <Image
              src="/book.svg"
              alt="book"
              width={1300}
              height={734}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-auto py-[50px]">
        <div className="w-[85%] m-auto h-auto">
          <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col gap-5">
              <h1 className="text-[#222222] text-[24px]">Топ категории</h1>
              <div className="grid gap-2">
                <p className="text-[#222222] text-[14px]">Тексты и переводы</p>
                <p className="text-[#222222] text-[14px]">Разработка</p>
                <p className="text-[#222222] text-[14px]">Дизайн</p>
                <p className="text-[#222222] text-[14px]">
                  Аудио, видео монтаж
                </p>
                <p className="text-[#222222] text-[14px]">Соцсети и реклама</p>
                <p className="text-[#222222] text-[14px]">Бизнес и жизнь</p>
                <p className="text-[#222222] text-[14px]">SEO и оптимизация</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-[#222222] text-[24px]">О Проекте</h1>
              <div className="grid gap-2">
                <p className="text-[#222222] text-[14px]">О Нас</p>
                <p className="text-[#222222] text-[14px]">Как Это Работает</p>
                <p className="text-[#222222] text-[14px]">
                  Политика Приватности
                </p>
                <p className="text-[#222222] text-[14px]">
                  Правила Пользования{" "}
                </p>
                <p className="text-[#222222] text-[14px]">Пресса о нас</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-[#222222] text-[24px]">Поддержка</h1>
              <div className="grid gap-2">
                <p className="text-[#222222] text-[14px]">Контакты</p>
                <p className="text-[#222222] text-[14px]">
                  Политика Безопасности
                </p>
                <p className="text-[#222222] text-[14px]">FAQ</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-[#222222] text-[24px]">Follow</h1>
              <div className="flex gap-2">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                <Image
                  src="/twinter.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                />
                <Image src="/insta.svg" alt="facebook" width={30} height={30} />
                <Image src="/in.svg" alt="facebook" width={30} height={30} />
              </div>
            </div>
          </div>

          <h1 className="text-center text-[16px] text-[#222222] my-[50px]">
            Copyright @ 2021 | WorkTap – Worktap.KZ. All Rights Reserved
          </h1>
        </div>
      </div>
    </div>
  );
}
