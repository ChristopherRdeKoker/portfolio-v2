export function cn(...classNames: (string | false | null | undefined)[]) {
  const result = classNames.filter(Boolean).join(" ");

  return result;
}
