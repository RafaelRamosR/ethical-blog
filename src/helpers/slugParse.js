import { capitalize } from "./capitalize";

export const slugParse = (slug) => {
  const slugCamelCase = slug.split('-').map(e => capitalize(e)).join('');
  return capitalize(slugCamelCase).toLocaleLowerCase()[0] + slugCamelCase.slice(1);
}
