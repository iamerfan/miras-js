export function handleCount(prices) {
  const sum = (arry) =>
    arry.reduce((accumulator, currentValue) => accumulator + currentValue);
  const discount = sum(
    prices.map((item) => (item.oldPrice - item.newPrice) * item.quantity)
  );

  const fullPrice = sum(prices.map((item) => item.oldPrice * item.quantity));
  const afterDiscount = sum(
    prices.map((item) => item.newPrice * item.quantity)
  );
  const percent = Math.round(Math.floor(100 * discount) / fullPrice);
  return {
    discount: { price: discount, percent },
    fullPrice,
    afterDiscount,
  };
}
