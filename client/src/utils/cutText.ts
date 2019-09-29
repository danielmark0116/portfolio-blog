export function cutText(text: string, maxLength: number): string {
  const lastSpaceIndex = text.substr(0, maxLength).lastIndexOf(' ');

  return `${text.substr(0, lastSpaceIndex)}...`;
}
