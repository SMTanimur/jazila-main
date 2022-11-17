export const formatMoney = (money: number) => {
  return money?.toLocaleString("bd", { style: "currency", currency: "BDT" });
};