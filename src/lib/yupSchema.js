import * as yup from "yup";

export const firstAuthSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("شماره موبایل خودتون رو وارد نکردید")
    .min(11, "شماره موبایل باید 11 رقم باشد")
    .max(11, "شماره موبایل باید 11 رقم باشد")
    .matches(/^09\d*$/, "شماره موبایل شما باید با 09 شروع شود"),
});
