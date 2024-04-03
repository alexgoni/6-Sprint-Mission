export function isEmpty(value) {
  return !value.trim();
}

export function isValidEmail(value) {
  const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return validRegex.test(value);
}

export function isValidPassword(value) {
  return value.length >= 8;
}
