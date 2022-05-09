export const scoreValidation = (total: number, max: number) => {
  if (max === 0) {
    return 0;
  }
  return total / max;
};

export const scoreFloor = (score: number, base: number) => {
  return Math.floor(score * Math.pow(10, base)) / Math.pow(10, base);
};
