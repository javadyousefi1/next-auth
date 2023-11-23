import { useState } from "react";
// mui
import DoneIcon from "@mui/icons-material/Done";

// framer motion
import { motion } from "framer-motion";

const AuthPage = () => {
  // auth line status step
  const [step, setStep] = useState(0);

  return (
    <>
      <div className="container flex justify-center px-2 mx-auto" dir="rtl">
        <div className="w-screen h-screen flex-center">
          <div className="flex flex-col bg-white ">
            {/* status line */}
            <div className="">
              {/* auth status line */}
              <div className="flex items-center justify-between gap-x-2">
                <div className="flex flex-col items-center w-6 gap-y-3">
                  <div
                    className={`w-6 h-6 text-sm text-white rounded-full ${
                      step >= 1 ? "bg-primary" : "bg-mainGray"
                    } flex-center`}
                  >
                    {step >= 1 ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                      >
                        <DoneIcon sx={{ width: "17px", height: "17px" }} />
                      </motion.div>
                    ) : (
                      1
                    )}
                  </div>
                  <div
                    className={`text-[13px] font-normal ${
                      step >= 1 ? "text-mainBlack" : "text-mainGray"
                    } whitespace-nowrap`}
                  >
                    احراز هویت
                  </div>
                </div>
                <div
                  className={` h-[1px] w-[70px] flex-1 relative bottom-4 ${
                    step >= 2 ? "bg-primary" : "bg-mainGray"
                  }`}
                ></div>
                <div className="flex flex-col items-center w-6 gap-y-3">
                  <div
                    className={`w-6 h-6 text-sm text-white rounded-full ${
                      step >= 2 ? "bg-primary" : "bg-mainGray"
                    } flex-center`}
                  >
                    {step >= 2 ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                      >
                        <DoneIcon sx={{ width: "17px", height: "17px" }} />
                      </motion.div>
                    ) : (
                      2
                    )}
                  </div>{" "}
                  <div
                    className={`text-[13px] font-normal ${
                      step >= 2 ? "text-mainBlack" : "text-mainGray"
                    } whitespace-nowrap`}
                  >
                    پایان احراز
                  </div>
                </div>
                <div
                  className={` h-[1px] w-[70px] flex-1 relative bottom-4 ${
                    step >= 3 ? "bg-primary" : "bg-mainGray"
                  }`}
                ></div>

                <div className="flex flex-col items-center w-6 gap-y-3">
                  <div
                    className={`w-6 h-6 text-sm text-white rounded-full ${
                      step >= 3 ? "bg-primary" : "bg-mainGray"
                    } flex-center`}
                  >
                    {step >= 3 ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                      >
                        <DoneIcon sx={{ width: "17px", height: "17px" }} />
                      </motion.div>
                    ) : (
                      3
                    )}
                  </div>
                  <div
                    className={`text-[13px] font-normal ${
                      step >= 3 ? "text-mainBlack" : "text-mainGray"
                    } whitespace-nowrap`}
                  >
                    تکمیل اطلاعات
                  </div>
                </div>
              </div>
              {/* text status line */}
            </div>

            <h1 className="mt-16 text-2xl font-black text-center text-secondary">
              احراز &nbsp; نکست
            </h1>

            <p className="mt-6 font-semibold text-right text-md text-secondary">
              ورود | ثبت نام
            </p>

            <span className="mt-4 text-sm text-mainGray">سلام !</span>
            <label htmlFor="username" className="text-sm text-mainGray">
              لطفا ایمیل یا شماره موبایل خود را وارد کنید
            </label>

            <input className="mt-4 input-style " />
            <button
              onClick={() => setStep((prev) => ++prev)}
              className="mt-6 button-style animate"
            >
              ورود
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
