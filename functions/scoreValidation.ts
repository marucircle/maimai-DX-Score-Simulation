export const scoreValidation = (total: number, max: number) => {
  if (max === 0) {
    return 0;
  }
  return total / max;
};
