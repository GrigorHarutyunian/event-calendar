import { sendEmail } from "../utils";

export function onSubmitHandlerForContactUs(values) {
  const { email, textareaContact } = values;
  sendEmail(email, textareaContact);
}
