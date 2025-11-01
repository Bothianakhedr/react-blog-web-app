
 export type FormInput ={
    placeholder:string,
    type:string,
    label:string,
    name:string,
    id:string,
}

 export type blogInfo ={
  title?: string;
  description?: string;
  image?: File | null;
}
export type blogError = {
  title?: string;
  description?: string;
  image?: string;
};