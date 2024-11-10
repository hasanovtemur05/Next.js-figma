"use client";

import Image from "next/image";

const page = () => {

  const routes = [
    { id: 1, title: "Тексты и переводы ", },
    { id: 2, title: "Разработка",  },
    { id: 3, title: "Дизайн", },
    { id: 4, title: "Аудио, видео монтаж ", },
    { id: 5, title: "SEO и оптимизация ", },
    { id: 6, title: "Бизнес и жизнь ", },
    { id: 7, title: "Соцсети и реклама ", },
   
  ];

  const cards = [
    {id:1, title: "Нужно сделать Дизайн сайта по тематике авто", price:"Бюджет: 50 000 тенге", img: "/card.jpg", desc1: "Екатерина Иванова", desc2: "Размещено проектов на бирже: 25", star: "/star3.svg", starTitle: "15 отзывов", date: "4 часа 28 минут назад", p: "Предложений: 50" },
    {id:2, title: "Нужно сделать Дизайн сайта по тематике авто", price:"Бюджет: 50 000 тенге", img: "/card.jpg", desc1: "Екатерина Иванова", desc2: "Размещено проектов на бирже: 25", star: "/star3.svg", starTitle: "15 отзывов", date: "4 часа 28 минут назад", p: "Предложений: 50" },
    {id:3, title: "Нужно сделать Дизайн сайта по тематике авто", price:"Бюджет: 50 000 тенге", img: "/card.jpg", desc1: "Екатерина Иванова", desc2: "Размещено проектов на бирже: 25", star: "/star3.svg", starTitle: "15 отзывов", date: "4 часа 28 минут назад", p: "Предложений: 50" },
    {id:4, title: "Нужно сделать Дизайн сайта по тематике авто", price:"Бюджет: 50 000 тенге", img: "/card.jpg", desc1: "Екатерина Иванова", desc2: "Размещено проектов на бирже: 25", star: "/star3.svg", starTitle: "15 отзывов", date: "4 часа 28 минут назад", p: "Предложений: 50" },
    {id:5, title: "Нужно сделать Дизайн сайта по тематике авто", price:"Бюджет: 50 000 тенге", img: "/card.jpg", desc1: "Екатерина Иванова", desc2: "Размещено проектов на бирже: 25", star: "/star3.svg", starTitle: "15 отзывов", date: "4 часа 28 минут назад", p: "Предложений: 50" },
    {id:6, title: "Нужно сделать Дизайн сайта по тематике авто", price:"Бюджет: 50 000 тенге", img: "/card.jpg", desc1: "Екатерина Иванова", desc2: "Размещено проектов на бирже: 25", star: "/star3.svg", starTitle: "15 отзывов", date: "4 часа 28 минут назад", p: "Предложений: 50" },
    {id:7, title: "Нужно сделать Дизайн сайта по тематике авто", price:"Бюджет: 50 000 тенге", img: "/card.jpg", desc1: "Екатерина Иванова", desc2: "Размещено проектов на бирже: 25", star: "/star3.svg", starTitle: "15 отзывов", date: "4 часа 28 минут назад", p: "Предложений: 50" },
    {id:8, title: "Нужно сделать Дизайн сайта по тематике авто", price:"Бюджет: 50 000 тенге", img: "/card.jpg", desc1: "Екатерина Иванова", desc2: "Размещено проектов на бирже: 25", star: "/star3.svg", starTitle: "15 отзывов", date: "4 часа 28 минут назад", p: "Предложений: 50" },
    {id:9, title: "Нужно сделать Дизайн сайта по тематике авто", price:"Бюджет: 50 000 тенге", img: "/card.jpg", desc1: "Екатерина Иванова", desc2: "Размещено проектов на бирже: 25", star: "/star3.svg", starTitle: "15 отзывов", date: "4 часа 28 минут назад", p: "Предложений: 50" },
    {id:10, title: "Нужно сделать Дизайн сайта по тематике авто", price:"Бюджет: 50 000 тенге", img: "/card.jpg", desc1: "Екатерина Иванова", desc2: "Размещено проектов на бирже: 25", star: "/star3.svg", starTitle: "15 отзывов", date: "4 часа 28 минут назад", p: "Предложений: 50" },
  ]

  return (
   <div>
     <div className="w-[85%] h-auto m-auto mt-[40px] flex flex-col gap-4 md:mt-[60px] items-center lg:mt-[80px] md:gap-6 lg:gap-9">
      <h1 className="text-[#222222] font-bold text-center sm:text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] ">
        Ищите и находите подходящую работу среди <span className="text-[#1DBF73]">10,000+</span> проектов и покажите начто Вы способны!
      </h1>
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
      <div className="grid grid-cols-2  gap-2 md:gap-4  sm:grid-cols-4  items-center">
      {routes.map((item) => (
              <p
                key={item.id}
                className="text-[13px] sm:text-[16px] md:text-[18px] flex justify-center"
              >
                {item.title}
              </p>
            ))}
            <button className="text-[13px] sm:text-[16px] md:text-[18px] hover:bg-[#FBA457] hover:text-white flex border-[1px] text-[#FBA457] rounded-[50px] border-[#FBA457] justify-center px-[20px] py-[10px] ease-in-out duration-300 ">
            Все категории
            </button>
      </div>
      <h1 className="text-[16px] md:text-[18px] lg:text-[24px] font-bold">Ниже все заказы по <span className="text-[#1DBF73]">дизайну</span> </h1>
      <Image src="/Vector.jpg" alt="vector" width={24} height={14} />
    </div>

    <div className="w-[85%] m-auto mt-[40px] md:mt-[60px] lg:mt-[80px] xl:mt-[100px] flex flex-col gap-[40px]">
         <div className="flex flex-col items-center sm:flex-row sm:gap-4 md:justify-between">
            <h1 className="text-[14px] md:text-[16px] font-bold text-[#222222] lg:text-[18px] xl:text-[24px]">65 проектов по дизайну</h1>
            <div className="flex flex-col items-center sm:flex-row sm:gap-4 md:gap-6 lg:gap-[60px]">
            <div className="flex gap-3 md:gap-6">
            <p className="text-[#656084] text-[10px] md:text-[12px] lg:text-[14px]">Минимальная цена</p>
            <p className="text-[#656084] text-[10px] md:text-[12px] lg:text-[14px]">Максимальная цена</p>
            </div>
            <div className="flex gap-2 lg:gap-3">
            <p className="text-[#222222] text-[12px] md:text-[16px] lg:text-[18px]">По возрастанию цены  </p>
            <Image src="/v.jpg" alt="v" width={20} height={20} />
            </div>
            </div>
         </div>
         {/* ==========================  card   =========================*/}
        <div className="flex flex-col gap-[50px]">
            {
              cards.map((item)=> (
                <div key={item.id} className="flex flex-col gap-4  rounded-[20px] p-5 lg:p-9  border-[#D3D3D3] border-[1px] duration-500 ease-in-out group hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(211,211,211,0.5)]">
                  <div className="flex flex-col gap-3 lg:flex-row justify-between">
                  <h1 className="text-[#222222] font-bold text-[16px] md:text-[18px] lg:text-[24px]">{item.title}</h1>
                  <div>
                  <h1 className="text-[#1DBF73] text-[16px]  md:text-[18px] lg:text-[24px]">{item.price}</h1>
                  <p className="text-[#656084] text-[12px]">{item.date}</p>
                  </div>
                  </div>

                  <div>
                    <div className="flex flex-col gap-4 md:flex-row justify-between ">
                      <div className=" sm:flex gap-7">
                      <Image src={item.img} alt="img" width={100} height={70} />
                      <div>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px]">{item.desc1}</p>
                        <p className="text-[14px] md:text-[16px] lg:text-[18px]">{item.desc2}</p>
                        <Image src={item.star} alt="star" width={150} height={30}/>
                      </div>
                      </div>

                      <h1 className="text-[#656084] text-[14px] md:text-[16px] lg:text-[18px]">{item.p}</h1>
                    </div>
                  </div>


                </div>
              ))
            }
        </div>
        <div className="w-full flex justify-center">
        <button className=" w-[238px] text-[13px] sm:text-[16px] md:text-[18px] hover:bg-[#1DBF73] hover:text-white flex border-[1px] text-[#1DBF73] rounded-[50px] border-[#1DBF73] justify-center px-[20px] py-[10px] ease-in-out duration-300 ">
            Все категории
          </button>
        </div>
    </div>

   </div>


  );
};

export default page;
