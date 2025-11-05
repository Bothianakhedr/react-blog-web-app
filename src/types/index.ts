// related to register
export type RegisterFormData = {
  userName: string;
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
export type PostCardData = {
  post: {
    title: string;
    content: string;
    createdAt: string;
    author: string;
    id: number;
  };
};

// related to blog
export type BlogData = {
  title: string;
  description: string;
  image: FileList ;
};
