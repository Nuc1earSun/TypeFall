import { CharType } from "../types/CharType";

export function getRandomChar(type: CharType): string {
  const chars = !type.letters
    ? "0123456789"
    : !type.numbers
    ? "abcdefghijklmnopqrstuvwxyz"
    : "abcdefghijklmnopqrstuvwxyz0123456789";
  const randomIndex = Math.floor(Math.random() * chars.length);
  return chars[randomIndex];
}