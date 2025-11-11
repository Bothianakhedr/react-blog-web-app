import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import bg from "../../assets/image/bg.jpg";
import { loginFormValidation } from "../../validation/validation";
import { login_Form } from "../../data";
import { Button, ErrorMessage, Input } from "../../Components/ui";
import type { LoginFormData } from "../../types";

 export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginFormValidation),
  });
  const onSubmit: SubmitHandler<LoginFormData> = (data) => console.log(data);

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" bg-center bg-cover h-screen"
    >
      <div className="bg-black/50 h-full flex items-center justify-center ">
        <div className=" border-15 border-gray-300/15 w-full max-w-[500px] rounded-xl">
          <form
            className="bg-white rounded-md  p-10   "
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-center mb-6 font-semibold text-xl ">Login</h1>
            {login_Form.map(({ label, name, placeholder, type, id }) => (
              <div key={id} className="mb-2">
                <label className="text-[11px]  font-medium " htmlFor={id}>
                  {label}
                </label>
                <Input
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  {...register(name)}
                />
                {errors[name] && <ErrorMessage msg={errors[name].message} />}
                {type === "password" && (
                  <div className=" text-sky-500 hover:text-sky-600  transition underline text-end my-1   text-[13px]">
                    <Link to={"/forgotPassword"}>forgotPassword?</Link>
                  </div>
                )}
              </div>
            ))}
            <Button>Login</Button>
            <p className="text-[13px] text-center mt-2 font-medium">
              Don't have an account?
              <Link
                className="text-sky-500 ms-1 font-semibold underline"
                to="/register"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

