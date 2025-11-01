import { Link } from "react-router-dom";
import bg from "../assets/image/bg.jpg";
import { Button } from "../Components/ui/Button";
import { Input } from "../Components/ui/Input";
import { login_Form } from "../data";
const Login = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" bg-center bg-cover h-screen"
    >
      <div className="bg-black/50 h-full flex items-center justify-center ">
        <div className=" border-15 border-gray-300/15 w-full max-w-[500px] rounded-xl">
          <form className="bg-white rounded-md  p-10   ">
            <h1 className="text-center mb-6 font-semibold text-xl ">Login</h1>
            {login_Form.map(({ label, name, placeholder, type, id }) => (
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
                {type === "password" && (
                  <div className=" text-sky-500 underline text-end my-1   text-[13px]">
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

export default Login;
