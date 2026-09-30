import { isValidEmail } from "./email";

export type FormSnapshot = {
  name: string;
  email: string;
  emailValid: boolean;
  subject: string;
  message: string;
  touched: Set<string>;
};

export const emptySnapshot = (): FormSnapshot => ({
  name: "",
  email: "",
  emailValid: false,
  subject: "",
  message: "",
  touched: new Set(),
});

export function snapshotForm(form: HTMLFormElement, touched: Set<string>) {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? ""),
    email: String(data.get("email") ?? ""),
    emailValid: isValidEmail(String(data.get("email") ?? "")),
    subject: String(data.get("subject") ?? ""),
    message: String(data.get("message") ?? ""),
    touched,
  };
}
