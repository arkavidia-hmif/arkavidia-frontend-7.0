export function isValidEmail(email: string): boolean {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const isValidString = (string: string | null, max: number): boolean =>
  String(string) !== null &&
  String(string).length <= max &&
  String(string).length > 0;

export const isValidDate = (date: string | null): boolean => {
  if (String(date).length === 0 || date === null) return false;
  const element = String(date).split("-");
  return parseInt(element[0]) < 2017;
};

export const isEmpty = (string: string | null): boolean =>
  string !== null && String(string).length === 0;
