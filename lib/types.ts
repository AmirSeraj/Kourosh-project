import { UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { LoginSchema, RegisterSchema } from "./schemas/auth";

export interface BackButtonProps {
  label: string;
  href: string;
  className?: string;
}

export interface HeaderProps {
  label: string;
  title: string;
}

export interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  headerTitle: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export interface FormErrorProps {
  message?: string;
}

export interface FormSuccessProps {
  message?: string;
}

export interface MainFormLoginProps {
  email: string;
  password: string;
}

export interface FormLoginProps {
  form: UseFormReturn<MainFormLoginProps, any, undefined>;
  onSubmit: (values: z.infer<typeof LoginSchema>) => void;
  isPending: boolean;
  error?: string | false;
  success?: string | false;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

export interface MainFormRegisterProps {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export interface FormRegisterProps {
  form: UseFormReturn<MainFormRegisterProps, any, undefined>;
  onSubmit: (values: z.infer<typeof RegisterSchema>) => void;
  isPending: boolean;
  error?: string | false;
  success?: string | false;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirmPassword: boolean;
  setShowConfirmPassword: React.Dispatch<React.SetStateAction<boolean>>;
}
