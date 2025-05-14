export const formatAmount = (amount: string | number) => {
  return `$${Number(`${amount}`).toFixed(2)}`;
};
