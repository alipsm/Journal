import axios from "axios";
import useFormValidation from "./useFormValidation";

export default function useUserRegistration() {
  async function register(e: React.FormEvent, token: string) {
    const { getValidation } = useFormValidation();

    e.preventDefault();
    const { target } = e;
    const formData = new FormData(target as HTMLFormElement);

    try {
      // if rejected validation after throw Error
      if (!getValidation(formData)) throw new Error("Empity value!");
      const { data, status } = await axios
        .post("/api/handlers/user/register", formData, {
          headers: {
            "Content-Type": "application/json",
            authorization: token || "",
          },
        })
        .catch((e) => {
          throw new Error(e.response.data.message);
        });
      if (status == 201) {
        return data;
      }
      throw new Error("Please try again status code:" + status);
    } catch (error: any) {
      throw error.message;
    }
  }

  return { register };
}