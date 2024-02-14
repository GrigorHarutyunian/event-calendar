import { sendEmail } from "../utils";

export function onSubmitHandlerForContactUs(values) {
  sendEmail(values);
}
