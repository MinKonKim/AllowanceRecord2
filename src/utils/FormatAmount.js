const formatAmount = (amount) => {
  return new Intl.NumberFormat().format(amount);
};
export default formatAmount;
