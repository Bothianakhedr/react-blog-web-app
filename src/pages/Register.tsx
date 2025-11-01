import { Link } from "react-router-dom";
import bg from "../assets/image/bg.jpg";
import { Button } from "../Components/ui/Button";
import { Input } from "../Components/ui/Input";
import { register_Form } from "../data";

export const Register = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" bg-center bg-cover h-screen"
    >
      <div className="bg-black/50 h-full flex items-center justify-center ">
        <div className=" border-15 border-gray-300/15 w-full max-w-[500px] rounded-xl">
          <form className="bg-white rounded-md  p-10   ">
            <h1 className="text-center mb-6 font-semibold text-xl ">
              Register
            </h1>
            {register_Form.map(({ label, name, placeholder, type, id }) => (
              <div key={id} className="mb-2">
                <label className="text-[11px]  font-medium " htmlFor="fullName">
                  {label}
                </label>

                <Input
                  name={name}
                  type={type}
                  id={id}
                  placeholder={placeholder}
                />
              </div>
            ))}
            <Button>Register</Button>
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
