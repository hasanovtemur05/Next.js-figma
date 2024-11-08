import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full h-auto lg:grid lg:grid-cols-2 lg:h-[100vh] ">
      <div className="flex flex-col items-center py-5 lg:ml-[70px]">
        <div className="w-[80%]">
          <Image
            src="/logo.svg"
            alt="logo"
            width={130}
            height={40}
            priority
          />
        </div>
        <div className="w-[80%] flex flex-col gap-4">
          <p className="text-[#222222] text-[14px] mt-[20px] lg:text-[16px]">
          Давайте создадим Вам аккаунт
          </p>
          <h1 className="text-[18px] md:text-[18px] lg:text-[24px] font-bold text-[#222222]">
          Заполните все поля
          </h1>

          <div>
            <label htmlFor="name">
            Ваше имя
            </label>
            <input
              placeholder="Имя"
              type="text"
              id="name"
              style={{
                borderRadius: "10px",
                padding: "4px 20px",
                border: "1px solid #ccc",
                outlineColor: "#04C35C",
                width: "100%",
                marginTop: "5px",
                fontSize: "14px"
              }}
            />
          </div>

          <div>
            <label htmlFor="firstname">
            Ваше фамилия
            </label>
            <input
              placeholder="Фамилия"
              type="text"
              id="firstname"
              style={{
                borderRadius: "10px",
                padding: "4px 20px",
                border: "1px solid #ccc",
                outlineColor: "#04C35C",
                width: "100%",
                marginTop: "5px",
                 fontSize: "14px"
              }}
            />
          </div>

          <div>
            <label htmlFor="email" >
            E-mail
            </label>
            <input
              placeholder="E-mail"
              type="email"
              id="email"
              style={{
                borderRadius: "10px",
                padding: "4px 20px",
                border: "1px solid #ccc",
                outlineColor: "#04C35C",
                width: "100%",
                marginTop: "5px",
                 fontSize: "14px"
              }}
            />
          </div>

          <div>
            <label htmlFor="phone" >
            Телефон номер
            </label>
            <input
              placeholder="Телефон"
              type="text"
              id="phone"
              style={{
                borderRadius: "10px",
                padding: "4px 20px",
                border: "1px solid #ccc",
                outlineColor: "#04C35C",
                width: "100%",
                marginTop: "5px",
                 fontSize: "14px"
              }}
            />
          </div>

          <div>
            <label htmlFor="password" >
              Пароль
            </label>
            <input
              placeholder="Пароль"
              type="password"
              id="password"
              style={{
                outlineColor: "#04C35C",
                borderRadius: "10px",
                padding: "4px 20px",
                border: "1px solid #ccc",
                width: "100%",
                marginTop: "5px",
                 fontSize: "14px"
              }}
            />
          </div>

          <div>
            <label htmlFor="password2">
            Повтарите пароль
            </label>
            <input
              placeholder="Пароль"
              type="password"
              id="password2"
              style={{
                outlineColor: "#04C35C",
                borderRadius: "10px",
                padding: "4px 20px",
                border: "1px solid #ccc",
                width: "100%",
                marginTop: "5px",
                 fontSize: "14px"
              }}
            />
          </div>

          <div className="flex gap-[50px] items-center">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                style={{
                  transform: "scale(1.5)",
                  marginRight: "8px",
                }}
              />
              <h1 className="text-[14px] md:text-[20px] text-[#222222]">
              Я исполнитель
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                style={{
                  transform: "scale(1.5)",
                  marginRight: "8px",
                }}
              />
              <h1 className="text-[14px] md:text-[20px] text-[#222222]">
              Я заказчик
              </h1>
            </div>
          </div>

          <Link href="/profil">
          <button className="text-[12px] w-full sm:text-[16px]  font-bold text-white bg-[#04C35C] rounded-[100px] py-[15px]">
          Зарегестрироваться
          </button>
          </Link>

          <h1 className="text-[14px] text-center lg:text-[16px]">У Вас есть аккаунт? <Link href="/register" className="text-[orange]" >Войдите</Link> </h1>
        </div>
      </div>

      {/* =============================  RIGHT  ================================= */}
      <div className="hidden lg:flex">
        <Image
          src="login.svg"
          alt="login"
          width={900}
          height={500}
          className="h-[100vh]"
        />
      </div>
    </div>
  );
};

export default Page;
