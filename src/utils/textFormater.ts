export const textFormater = (text: string) => {
  const textLength = text.split(" ").length;
  if (textLength > 25) {
    const textArr = text.split(" ");
    const shortText = textArr.slice(0, 24).join(" ");
    return `${shortText}...`;
  }
};
