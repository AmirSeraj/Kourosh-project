"use server";

import * as z from "zod";
import { LoginSchema, RegisterSchema } from "../schemas/auth";

/**login */
export const login: (values: z.infer<typeof LoginSchema>) => Promise<{
  error: string | false;
  success: string | false;
  // isLoading: false;
}> = async (values: z.infer<typeof LoginSchema>) => {
  ///data validation
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Credentials!", success: false };
  }

  //destructuring data
  const { password, email } = validatedFields.data;

  console.log(validatedFields.data);

  ///YOUR LOGIN PROCESS COMES HERE .....
  ///LETS ASSUME THERE IS A response YOU RETURN
  ///lets assume response has a shape like this:
  //   response:{
  //     status:"success"
  //     token:'.....',
  //     user:'.....'
  //   }

  const response = {
    status: "error",
    message: "ddddd",
  };

  if (response.status === "error") {
    return {
      error: response.message,
      success: false,
    };
  }
};

/**register user */
export const register: (values: z.infer<typeof RegisterSchema>) => Promise<{
  error: string | false;
  success: string | false;
}> = async (values: z.infer<typeof RegisterSchema>) => {
  ///data validation
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Credentials!", success: false };
  }

  //destructuring data
  const { name, password, confirmPassword, email } = validatedFields.data;

  ///YOUR SIGNUP PROCESS COMES HERE .....
  ///LETS ASSUME THERE IS A response YOU RETURN
  ///lets assume response has a shape like this:
  //   response:{
  //     status:"success"
  //     token:'.....',
  //     user:'.....'
  //   }

  console.log(validatedFields.data);

  /** returning error */
  if (password !== confirmPassword) {
    return {
      error: "Password and ConfirmPassword do not match!",
      success: false,
    };
  }
};
