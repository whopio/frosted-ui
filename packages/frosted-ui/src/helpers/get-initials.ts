export function getInitials(name: string) {
  return (
    name
      .match(/(\s|^)\p{L}\p{Mn}*/gu)
      ?.filter((el, i, array) => i === 0 || i === array.length - 1)
      .map((el) => el.trimStart().toUpperCase())
      .join('') || ''
  );
}
