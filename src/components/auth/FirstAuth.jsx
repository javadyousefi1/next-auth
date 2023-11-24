// yup
import { yupResolver } from "@hookform/resolvers/yup";
// schema
import { firstAuthSchema } from "@/lib/yupSchema";

//  use form
import { Controller, useForm } from "react-hook-form";

const FirstAuth = ({ handleAddOneStep }) => {
  const defaultValues = {
    phoneNumber: "",
  };

  const schema = firstAuthSchema;

  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // fetch here
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="phoneNumber" className="text-sm text-mainGray">
            لطفا شماره موبایل خود را وارد کنید
          </label>

          <Controller
            control={control}
            name="phoneNumber"
            render={({ field: { onChange, value } }) => (
              <input
                value={value}
                onChange={(e) => onChange(e.target.value.replace("e", ""))}
                dir="ltr"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-4 md:mt-6 input-style "
              />
            )}
          />

          <p className="h-[15px] text-xs text-red-400 mt-1">
            {errors?.phoneNumber?.message}
          </p>

          <button
            type="submit"
            disabled={!isValid}
            onClick={handleAddOneStep}
            className="mt-2 button-style animate md:mt-8"
          >
            ورود
          </button>
        </div>
      </form>
    </>
  );
};

export default FirstAuth;
