import { useState } from "react";
// mui
import DoneIcon from "@mui/icons-material/Done";

// framer motion
import { motion } from "framer-motion";
import StatusLine from "@/components/auth/StatusLine";

const AuthPage = () => {
  // auth line status step
  const [step, setStep] = useState(0);

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
              // duration: 10000,
            }}
            className="relative flex flex-col p-4 bg-white md:min-w-[400px] md:shadow-2xl md:left-[19%] rounded-xl md:px-10 md:py-10"
          >
            {/* status line */}
            <StatusLine step={step} />

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
                // duration: 10000,
              }}
              className="flex flex-col"
            >
              <span className="mt-4 text-sm text-mainGray">سلام !</span>
              <label htmlFor="username" className="text-sm text-mainGray">
                لطفا ایمیل یا شماره موبایل خود را وارد کنید
              </label>

              <input className="mt-4 md:mt-6 input-style " />

              <button
                type="submit"
                onClick={() => setStep((prev) => ++prev)}
                className="mt-6 button-style animate md:mt-8"
              >
                ورود
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
