export function create(obj: Record<string, any>) {
  return Object.entries(obj).reduce((acc, [key, value], index) => {
    const and = index === 0 ? '' : '&';
    return acc + and + `${key}=${value}`;
  }, '?');
}
