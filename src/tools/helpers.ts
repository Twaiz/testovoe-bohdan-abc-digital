const helpers = {
  formatNumber: (num: string) => {
    const [integerPart, decimalPart] = num.split(".");
    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    );
    return decimalPart
      ? `${formattedIntegerPart},${decimalPart}`
      : formattedIntegerPart;
  },
};

export default helpers;
