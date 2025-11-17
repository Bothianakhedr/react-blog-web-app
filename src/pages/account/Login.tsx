import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/image/bg.jpg";
import { loginFormValidation } from "../../validation/validation";
import { login_Form } from "../../data";
import { Button, ErrorMessage, Input } from "../../Components/ui";
import type { ErrorResponseType, LoginFormData } from "../../types";
import { axiosInstance } from "../../config/axiosConfig";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginFormValidation),
  });
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setIsLoading(true);
    try {
      const { data: responseData } = await axiosInstance.post(
        "/api/v1/auth/login",
        data
      );
      if (responseData.status === "success") {
        localStorage.setItem("token", responseData.data.token);
        setToken(responseData.data.token);
        toast.success(responseData.message ,{
          autoClose:1000,
          style:{
            backgroundColor:"black",
            color:"white"
            
            
          }
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      const errorObj = error as AxiosError<ErrorResponseType>;
      toast.error(errorObj?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

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
            <h1 className="text-center mb-6 font-semibold text-xl ">
              Login To Get Access !
            </h1>
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
            <Button isLoading={isLoading}>Login</Button>
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
