
const ErrorMessage = ({msg} : {msg:string}) => {
  return (
    <span className="text-[13px] text-red-500 font-semibold">{msg}</span>
  )
}

export default ErrorMessage