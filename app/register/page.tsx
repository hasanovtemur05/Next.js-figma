"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const userData = {
      email: email,
      password: password
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    alert("User data saved!");
  };

  return (
    <div className="w-full h-auto lg:grid lg:grid-cols-2 lg:h-[100vh] ">
      <div className="flex flex-col items-center py-5 lg:ml-[70px]">
        <div className="w-[80%]">
          <Link href="/" >
            <Image
              src="/logo.svg"
              alt="logo"
              width={130}
              height={40}
              priority
            />
          </Link>
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
            <label htmlFor="name2">
            Фамилия
            </label>
            <input
              placeholder="Имя"
              type="text"
              id="name2"
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
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
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
            <label htmlFor="phone">
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
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
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
            <label htmlFor="password2" >
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

          <Link href="/login">
            <button
              onClick={handleRegister} 
              className="text-[12px] w-full sm:text-[16px] font-bold text-white bg-[#04C35C] rounded-[100px] py-[15px]"
            >
              Зарегистрироваться
            </button>
          </Link>

          <h1 className="text-[14px] text-center lg:text-[16px]">У Вас есть аккаунт? <Link href="/register" className="text-[orange]">Войдите</Link></h1>
        </div>
      </div>

      {/* ============================= RIGHT ============================= */}
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


                
                          