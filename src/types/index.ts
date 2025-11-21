// related to register
export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

export type FormInputRegister = {
  placeholder: string;
  type: string;
  label: string;
  name: keyof RegisterFormData;
  id: string;
};
export type ErrorResponseType = {
  message: string;
};


// related to login
export type LoginFormData = {
  email: string;
  password: string;
};

export type FormInputLogin = {
  placeholder: string;
  type: string;
  label: string;
  name: keyof LoginFormData;
  id: string;
};


// related to blog
export type PostDataType = {
  title: string;
  content: string;
  image: FileList ;
  author?:string

};
