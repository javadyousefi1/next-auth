import { useState } from "react";
// mui
import DoneIcon from "@mui/icons-material/Done";

// framer motion
import { motion } from "framer-motion";
import StatusLine from "@/components/auth/StatusLine";
// image

import Image from "next/image";

import loginImg from "../../images/login.png";
import FirstAuth from "@/components/auth/firstAuth";

const AuthPage = () => {
  // auth line status step
  const [step, setStep] = useState(0);

  const handleAddOneStep = () => {
    setStep((prev) => ++prev);
  };

  return (
    <>
      <div
        className="flex justify-center px-2 mx-auto md:justify-start md:px-0 "
        dir="rtl"
      >
        <div className="h-screen bg-white w-[35%] hidden md:block"></div>

        <div className="w-screen h-screen flex-center md:w-[65%] md:bg-primary rounded-tr-3xl rounded-br-3xl md:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 40,
            }}
            className="relative flex flex-col p-4 bg-white md:min-w-[350px] md:shadow-2xl md:left-[19%] rounded-xl md:px-10 md:py-10"
          >
            {/* status line */}
            <StatusLine step={step} className=" md:hidden" />

            <h1 className="mt-16 text-2xl font-black text-center md:mt-0 text-secondary">
              احراز &nbsp; نکست
            </h1>

            <p className="mt-6 font-semibold text-right text-md text-secondary md:mt-10">
              ورود | ثبت نام
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 40,
                delay: 0.5,
              }}
              className="flex flex-col"
            >
              <span className="mt-4 text-sm text-mainGray">سلام !</span>
              <FirstAuth handleAddOneStep={handleAddOneStep} />
            </motion.div>
          </motion.div>

          <div className="hidden lg:flex-col lg:flex lg:items-center">
            {/* status line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 40,
                delay: 0.7,
              }}
            >
              <StatusLine step={step} />
            </motion.div>
            {/* image login */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 40,
                delay: 0.8,
              }}
            >
              <Image
                src={loginImg}
                width={250}
                height={250}
                alt="Picture of the author"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 40,
                delay: 0.9,
              }}
            >
              <h1 className="mt-4 text-2xl font-black text-center text-white">
                سر تیتر اول احراز هویت نکست
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 40,
                // duration: 10000,
                delay: 1,
              }}
            >
              <p className="w-[400px] text-center text-sm text-md text-white mt-4 font-light leading-7">
                این متن تستی در جهت عنوان احراز هویت نکسته که ما این فرایند
                احراز هویت رو داریم از سمت فرانت اند کنترل و مدیریت میکنیم نکست
                یک فریمورک خیلی سریع و منعطف جاوا اسکریپت هست !
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 40,
                delay: 1.1,
              }}
            >
              {" "}
              <button className="flex flex-row-reverse items-center px-6 py-4 mt-6 text-sm text-white bg-white border border-white animate hover:bg-opacity-20 bg-opacity-10 rounded-3xl whitespace-nowrap gap-x-2">
                <span>ورود به قسمت اصلی وبسایت</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15.5 9.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8.5 9.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8.4 13.3h7.2c.5 0 .9.4.9.9 0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-.5.4-.9.9-.9Z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
