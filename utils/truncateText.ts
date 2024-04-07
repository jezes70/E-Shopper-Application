export const truncateText = (str: string): string => {
  if (str.length < 25) return str;
  return str.slice(0, 25) + "...";
};

// export const truncateText = (str: string | undefined): string => {
//   if (typeof str === "string" && str.length < 25) return str;
//   return str ? str.slice(0, 25) + "..." : "";
// };
