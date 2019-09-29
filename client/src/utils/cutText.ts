export function cutText(text: string, maxLength: number): string {
  const lastSpaceIndex = text.substr(0, maxLength).lastIndexOf(' ');

  console.log(lastSpaceIndex);

  return `${text.substr(0, lastSpaceIndex)}...`;
}
