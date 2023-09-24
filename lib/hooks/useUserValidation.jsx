import { useUser } from "./useStore";

export default function useUserValidation() {
  const user = useUser();
  if (
    !user.email ||
    !user.address ||
    !user.name ||
    !user.ostan ||
    !user.phoneNumber ||
    !user.postalCode
  )
    return false;
  return true;
}
