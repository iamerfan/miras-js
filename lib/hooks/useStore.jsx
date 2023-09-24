import { useSelector } from "react-redux";

export const useUser = () => {
  const user = useSelector((state) => state.user);
  return user;
};

export const useCart = () => {
  const cart = useSelector((state) => state.cart);
  return cart;
};
