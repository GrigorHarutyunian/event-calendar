import { SHA256 } from "crypto-js";

export function generateUserId(email) {
  const hashedEmail = SHA256(email).toString();
  const userId = hashedEmail.slice(0, 8);

  return userId;
}
