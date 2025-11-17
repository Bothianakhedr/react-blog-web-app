import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/image/bg.jpg";
import type { ErrorResponseType, RegisterFormData } from "../../types";
import { registerFormValidation } from "../../validation/validation";
import { register_Form } from "../../data";
import { Button, ErrorMessage, Input } from "../../Components/ui";
import { axiosInstance } from "../../config/axiosConfig";
import { toast } from "react-toastify";
import { useState } from "react";
import type { AxiosError } from "axios";

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerFormValidation),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    setIsLoading(true);
    try {
      const { data: responseData } = await axiosInstance.post(
        "/api/v1/auth/register",
        data
      );
      if (responseData.status === "success") {
        toast.success(responseData.message, {
          style: {
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
          },
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      const objError = error as AxiosError<ErrorResponseType>;
      const errorMsg = objError?.response?.data?.message;
      toast.error(errorMsg);
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
        <div className=" border-15 border-gray-300/15 w-full max-w-[550px] rounded-xl">
          <form
            className="bg-white rounded-md p-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-center mb-6 font-semibold text-xl ">
              Create Your Account
            </h1>

            {/* register Inputs  */}
            {register_Form.map(({ label, name, placeholder, type, id }) => (
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
              </div>
            ))}
            <Button isLoading={isLoading}> Register</Button>
            <p className="text-[13px] text-center mt-2 font-medium ">
              Already have an account
              <Link
                className="text-sky-500 ms-1 font-semibold underline"
                to="/login"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
