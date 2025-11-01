import type { ReactNode } from "react";

type customButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children:ReactNode
};
export const Button = ({children ,  ...rest }: customButtonProps) => {
  return (
    <button className={`w-full text-sm mt-3 cursor-pointer bg-sky-500 text-white p-2 rounded-md`} {...rest}>
      {children}
    </button>
  );
};
