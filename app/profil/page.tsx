"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, title: "Биржа", link: "/about" },
    { id: 2, title: "Ворки", link: "/contact" },
    { id: 3, title: "Конкурсы", link: "/blog" },
  ];

  return (
    <div>
      {/* ===================================  HEADER  ======================================== */}

      <div className="w-full bg-white sticky top-0 left-0 z-[99] shadow-md">
        <div className="w-[85%] m-auto h-[70px] flex justify-between items-center lg:h-[80px]">
          <div className="flex gap-[60px] lg:gap-[50px] items-center">
            <Link href="/"><Image src="/logo.svg" alt="logo" width={140} height={50} /></Link>
            <nav className="hidden lg:flex gap-[30px] items-center lg:gap-[40px]">
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
            <div className="flex gap-[32px]">
              <Image src="star.svg" alt="star" width={24} height={24} />
              <Image src="q1.svg" alt="q1" width={24} height={24} />
              <Image src="chat.svg" alt="chat" width={24} height={24} />
            </div>
            <div className="flex items-center gap-[15px]">
              <h1 className="text-[16px] text-[#222222]">Ернар Ибрагимов</h1>
              <Image src="profil.svg" priority alt="profil" width={55} height={55} />
            </div>
          </div>

          {/* Hamburger button */}
          <button
            className="block text-3xl text-[#1DBF73] lg:hidden"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-screen w-2/3 bg-white shadow-lg transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
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
          <div className="gap-[30px] mt-9 ml-5">
            <div className="flex gap-[32px]">
              <Image src="star.svg" alt="star" width={24} height={24} />
              <Image src="q1.svg" alt="q1" width={24} height={24} />
              <Image src="chat.svg" alt="chat" width={24} height={24} />
            </div>
            <div className="flex flex-col mt-[20px] gap-[15px]">
              <h1 className="text-[16px] text-[#222222]">Ернар Ибрагимов</h1>
              <Image src="profil.svg" alt="profil" width={55} height={55} />
            </div>
          </div>
        </div>
      </div>

      {/* ================================  HERO  ============================== */}

      <div className="w-[85%] h-auto mt-[40px] md:mt-[60px] lg:mt-[80px] m-auto grid gap-[40px] md:grid-cols-2 lg:gap-[120px]  ">
        <div className="flex flex-col gap-5 lg:gap-7">
          <h1 className="text-[16px] sm:text-[18px] lg:text-[24px] font-medium text-[#FBA457]">
            Дизайнер{" "}
          </h1>
          <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] text-[#222222]">
            <span className="text-[green] font-bold">Ернар</span> Ибрагимов
          </h1>
          <p className="text-[12px] lg:text-[16px] text-[#222222] ">
            Был опыт в газетах, журналах, типографиях, рекламных агентствах,
            издательских домах... Порядка 8 лет, занимаюсь логотипами и
            фирменными стилями.
          </p>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <p className="text-[14px] text-[#222222] ">Figma</p>
            <p className="text-[14px] text-[#222222] ">Adobe photoshop</p>
            <p className="text-[14px] text-[#222222] ">Adobe illustrator</p>
            <p className="text-[14px] text-[#222222] ">Corel draw</p>
          </div>
          <div className="flex  gap-[30px]">
            <p className="text-[14px] text-[#222222]">Adobe After Effects</p>
            <p className="text-[14px] text-[#222222]">HTML/CSS</p>
          </div>
          <div className="flex bg-[#F2F0FE] py-[16px] px-[30px] rounded-[20px]">
            <h1 className="text-[14px] text-[#222222]">
              Показать подробную информацию
            </h1>
          </div>
        </div>
        <div className="flex justify-end">
          <Image src="/hero22svg.svg" alt="hero" width={425} height={425} />
        </div>
      </div>

      {/* ===========================   Мой ворки   =================================== */}

      <div className="w-[85%] m-auto mt-[40px] md:mt-[60px] lg:mt-[80px] flex flex-col gap-[30px]">
        <h1 className="text-[16px] text-[#222222] font-medium md:text-[18px] lg:text-[24px]">Мой ворки</h1>
        <div className="w-full h-auto grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  lg:gap-8">
          <div className="w-full  h-auto rounded-[20px] overflow-hidden border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col justify-center items-center py-[50px]  gap-5">
            <Image src="/plus.svg" alt="card" width={70} height={700} />
            <h1 className="text-[#1DBF73] text-[24px] font-bold ">
              Создать ворк
            </h1>
          </div>
          <div className="w-full  h-auto rounded-[20px] overflow-hidden border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <Image src="/card1.svg" alt="card" width={800} height={180} />
            <h1 className="text-[16px] text-[#222222] font-medium ml-[20px]">
              Дизайн сайта
            </h1>
            <h1 className="text-[16px] text-[#1DBF73] font-medium ml-[20px] mb-[20px]">
              50 000 тенге
            </h1>
          </div>
          <div className="w-full  h-auto rounded-[20px] overflow-hidden border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <Image src="/card1.svg" alt="card" width={800} height={180} />
            <h1 className="text-[16px] text-[#222222] font-medium ml-[20px]">
              Дизайн сайта
            </h1>
            <h1 className="text-[16px] text-[#1DBF73] font-medium ml-[20px] mb-[20px]">
              50 000 тенге
            </h1>
          </div>
          <div className="w-full  h-auto rounded-[20px] overflow-hidden border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <Image src="/card1.svg" alt="card" width={800} height={180} />
            <h1 className="text-[16px] text-[#222222] font-medium ml-[20px]">
              Дизайн сайта
            </h1>
            <h1 className="text-[16px] text-[#1DBF73] font-medium ml-[20px] mb-[20px]">
              50 000 тенге
            </h1>
          </div>
          <div className="w-full  h-auto rounded-[20px] overflow-hidden border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <Image src="/card1.svg" alt="card" width={800} height={180} />
            <h1 className="text-[16px] text-[#222222] font-medium ml-[20px]">
              Дизайн сайта
            </h1>
            <h1 className="text-[16px] text-[#1DBF73] font-medium ml-[20px] mb-[20px]">
              50 000 тенге
            </h1>
          </div>
          <div className="w-full  h-auto rounded-[20px] overflow-hidden border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <Image src="/card1.svg" alt="card" width={800} height={180} />
            <h1 className="text-[16px] text-[#222222] font-medium ml-[20px]">
              Дизайн сайта
            </h1>
            <h1 className="text-[16px] text-[#1DBF73] font-medium ml-[20px] mb-[20px]">
              50 000 тенге
            </h1>
          </div>
          <div className="w-full  h-auto rounded-[20px] overflow-hidden border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <Image src="/card1.svg" alt="card" width={800} height={180} />
            <h1 className="text-[16px] text-[#222222] font-medium ml-[20px]">
              Дизайн сайта
            </h1>
            <h1 className="text-[16px] text-[#1DBF73] font-medium ml-[20px] mb-[20px]">
              50 000 тенге
            </h1>
          </div>
          <div className="w-full  h-auto rounded-[20px] overflow-hidden border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <Image src="/card1.svg" alt="card" width={800} height={180} />
            <h1 className="text-[16px] text-[#222222] font-medium ml-[20px]">
              Дизайн сайта
            </h1>
            <h1 className="text-[16px] text-[#1DBF73] font-medium ml-[20px] mb-[20px]">
              50 000 тенге
            </h1>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <button className="text-[16px] w-[238px] lg:text-[18px] font-medium py-[15px] border-[1px] rounded-[40px] text-[#1DBF73] border-[#1DBF73]  hover:bg-[#1DBF73] hover:text-white ease-in-out duration-300">
            Загрузить еще
          </button>
        </div>
      </div>



      {/* ============================================   Отзывы   =============================== */}

      <div className=" w-[85%] h-auto mt-[40px] m-auto flex flex-col gap-5 md:mt-[70px] lg:mt-[120px] xl:mt-[100px] lg:gap-10">
        <h1 className="text-[#222222] text-[18px] lg:text-[20px] font-medium">
          Топ фрилансеров
        </h1>
        <div className="flex flex-col gap-[20px] sm:flex-row md:gap-[40px]">
          <h1 className="text-[16px] md:text-[18px] font-medium text-[#1DBF73]">Положительные (65)</h1>
          <h1 className="text-[16px] md:text-[18px] font-medium text-[#222222]">Отрицательные(10)</h1>
        </div>

        <div className=" w-full h-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3  lg:gap-8">
          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-6 flex-col items-center sm:flex-row">
              <Image src="/card2.svg" alt="c1" width={80} height={80} />
              <div className="flex flex-col justify-center gap-5">
                <p className="text-[#222222] text-[16px] lg:text-[18px]">
                Никита Евреев
                </p>
                <Image src="/star1.svg" alt="c1" width={150} height={30} />
              </div>
            </div>
              <p className="text-[14px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
          </div>

          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-6 flex-col items-center sm:flex-row">
              <Image src="/card2.svg" alt="c1" width={80} height={80} />
              <div className="flex flex-col justify-center gap-5">
                <p className="text-[#222222] text-[16px] lg:text-[18px]">
                Никита Евреев
                </p>
                <Image src="/star1.svg" alt="c1" width={150} height={30} />
              </div>
            </div>
              <p className="text-[14px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
          </div>

          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-6 flex-col items-center sm:flex-row">
              <Image src="/card2.svg" alt="c1" width={80} height={80} />
              <div className="flex flex-col justify-center gap-5">
                <p className="text-[#222222] text-[16px] lg:text-[18px]">
                Никита Евреев
                </p>
                <Image src="/star1.svg" alt="c1" width={150} height={30} />
              </div>
            </div>
              <p className="text-[14px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
          </div>

          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-6 flex-col items-center sm:flex-row">
              <Image src="/card2.svg" alt="c1" width={80} height={80} />
              <div className="flex flex-col justify-center gap-5">
                <p className="text-[#222222] text-[16px] lg:text-[18px]">
                Никита Евреев
                </p>
                <Image src="/star1.svg" alt="c1" width={150} height={30} />
              </div>
            </div>
              <p className="text-[14px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
          </div>

          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-6 flex-col items-center sm:flex-row">
              <Image src="/card2.svg" alt="c1" width={80} height={80} />
              <div className="flex flex-col justify-center gap-5">
                <p className="text-[#222222] text-[16px] lg:text-[18px]">
                Никита Евреев
                </p>
                <Image src="/star1.svg" alt="c1" width={150} height={30} />
              </div>
            </div>
              <p className="text-[14px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
          </div>

          <div className="w-full p-[20px] h-auto rounded-2xl border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)] flex flex-col gap-5">
            <div className=" flex gap-6 flex-col items-center sm:flex-row">
              <Image src="/card2.svg" alt="c1" width={80} height={80} />
              <div className="flex flex-col justify-center gap-5">
                <p className="text-[#222222] text-[16px] lg:text-[18px]">
                Никита Евреев
                </p>
                <Image src="/star1.svg" alt="c1" width={150} height={30} />
              </div>
            </div>
              <p className="text-[14px] text-[#222222]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="text-[16px] w-[238px] lg:text-[18px] font-medium py-[15px] border-[1px] rounded-[40px] text-[#1DBF73] border-[#1DBF73]  hover:bg-[#1DBF73] hover:text-white ease-in-out duration-300">
            Загрузить еще
          </button>
        </div>
      </div>



      {/* ===============================  FOOTER  =========================== */}

      <div className="w-full mt-[40px] md:mt-[60px] lg:mt-[80px] h-auto py-[50px]">
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
                  className="md:w-[30px] lg:h-[50px]"
                />
                <Image
                  src="/twinter.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                  className="md:w-[30px] lg:h-[50px]"
                />
                <Image
                  src="/insta.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                  className="md:w-[30px] lg:h-[50px]"
                />
                <Image
                  src="/in.svg"
                  alt="facebook"
                  width={30}
                  height={30}
                  className="md:w-[30px] lg:h-[50px]"
                />
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
};

export default Page;
