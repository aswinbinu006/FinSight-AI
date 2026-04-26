export const formatINR = (val) => {
  return new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0
  }).format(val);
};

export const formatCurrency = (val) => {
  return `₹${formatINR(val)}`;
};
