import type { ReactNode } from "react";

type customButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children:ReactNode
  width?:string
};
export const Button = ({children ,width="w-full" ,  ...rest }: customButtonProps) => {
  return (
    <button className={`${width} text-sm mt-3 cursor-pointer bg-sky-600 text-white p-2 rounded-md`} {...rest}>
      {children}
    </button>
  );
};
