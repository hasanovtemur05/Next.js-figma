"use client";
import Image from "next/image";


const Page = () => {


  return (
    <div>
      

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

     
    </div>
  );
};

export default Page;
