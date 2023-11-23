// mui
import DoneIcon from "@mui/icons-material/Done";
// framer motion
import { motion } from "framer-motion";

const StatusLine = ({ step, className }) => {
  return (
    <>
      {/* status line */}
      <div className={className}>
        {/* auth status line */}
        <div className="flex items-center justify-between gap-x-2">
          {/* 1 */}
          <div className="flex flex-col items-center w-6 gap-y-3">
            <div
              className={`w-6 h-6 text-sm text-white rounded-full md:text-primary ${
                step >= 1 ? "bg-primary md:bg-white" : "bg-mainGray md:bg-white"
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
                step >= 1 ? "text-mainBlack md:text-white" : "text-mainGray md:text-gray-200"
              } whitespace-nowrap`}
            >
              احراز هویت
            </div>
          </div>

          {/* line */}
          <div
            className={` h-[1px] w-[70px] flex-1 relative bottom-4 ${
              step >= 2 ? "bg-primary md:bg-white" : "bg-mainGray"
            }`}
          ></div>
          {/* 2 */}
          <div className="flex flex-col items-center w-6 gap-y-3">
            <div
              className={`w-6 h-6 text-sm text-white rounded-full md:text-primary ${
                step >= 2 ? "bg-primary md:bg-white" : "bg-mainGray md:bg-white"
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
                step >= 2 ? "text-mainBlack md:text-white" : "text-mainGray md:text-gray-200"
              } whitespace-nowrap`}
            >
              پایان احراز
            </div>
          </div>
          {/* line */}
          <div
            className={` h-[1px] w-[70px] flex-1 relative bottom-4 ${
              step >= 3 ? "bg-primary md:bg-white" : "bg-mainGray"
            }`}
          ></div>
          {/* 3 */}
          <div className="flex flex-col items-center w-6 gap-y-3">
            <div
              className={`w-6 h-6 text-sm text-white rounded-full md:text-primary ${
                step >= 3 ? "bg-primary md:bg-white" : "bg-mainGray md:bg-white"
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
                step >= 3 ? "text-mainBlack md:text-white" : "text-mainGray md:text-gray-200"
              } whitespace-nowrap`}
            >
              تکمیل اطلاعات
            </div>
          </div>
        </div>
        {/* text status line */}
      </div>
    </>
  );
};

export default StatusLine;
