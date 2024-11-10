"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const userData2 = localStorage.getItem("userData");
    if (userData2) {
      const { email: saveEmail, password: savePassword } = JSON.parse(userData2);

      if (email === saveEmail && password === savePassword) {
        router.push("/profil");
      } else {
        alert("error");
      }
    } else {
      alert("Foydalanuvchi ma'lumotlari topilmadi. Ro'yxatdan o'ting.");
    }
  };

  return (
    <div className="w-full h-auto lg:grid lg:grid-cols-2 lg:h-[100vh] ">
      <div className="flex flex-col items-center py-5 lg:ml-[70px]">
        <div className="w-[80%]">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={160}
              height={40}
              priority
              className="lg:mt-[40px]"
            />
          </Link>
        </div>
        <div className="w-[80%] flex flex-col gap-5">
          <p className="text-[#222222] text-[14px] mt-[60px] lg:text-[16px]">
            Добро пожаловать!
          </p>
          <h1 className="text-[18px] md:text-[24px] lg:text-[30px] font-bold text-[#222222]">
            Войдите в свой аккаунт
          </h1>

          <div>
            <label htmlFor="email" className="mt-4">
              E-mail
            </label>
            <input
              placeholder="E-mail"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderRadius: "10px",
                padding: "6px 20px",
                border: "1px solid #ccc",
                outlineColor: "#04C35C",
                width: "100%",
                marginTop: "8px",
              }}
            />
          </div>

          <div>
            <label htmlFor="password" className="mt-4">
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
                padding: "6px 20px",
                border: "1px solid #ccc",
                width: "100%",
                marginTop: "8px",
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                style={{
                  transform: "scale(1.5)",
                  marginRight: "8px",
                }}
              />
              <h1 className="text-[14px] md:text-[20px] text-[#222222]">
                Запомнить меня
              </h1>
            </div>
            <div>
              <h1 className="text-[14px] md:text-[20px] text-[#FBA457]">
                Забыли пароль?
              </h1>
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="text-[12px] w-full sm:text-[16px] font-bold text-white bg-[#04C35C] rounded-[100px] py-[15px]"
          >
            Войти
          </button>

          <Link href="/login">
            <button className="text-[12px] w-full sm:text-[16px] font-bold text-white bg-[#2D3748] flex items-center gap-3 py-[15px] justify-center rounded-[100px]">
              <Image src="google.svg" alt="google" width={21} height={21} />
              Или войдите с помощю Google
            </button>
          </Link>
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
