export function useNumToTime(number) {
  const hours = () => {
    const hour = Math.floor(number / 3600);
    if (hour < 10) return "0" + Math.round(hour).toString();

    return Math.round(hour).toString();
  };
  const minutes = () => {
    const min = Math.floor(number / 60);
    if (min < 10) return "0" + Math.round(min).toString();

    return Math.round(min).toString();
  };
  const seconds = () => {
    const sec = Math.floor(number % 60);
    if (sec < 10) return "0" + Math.round(sec).toString();
    return Math.round(sec).toString();
  };
  return { hours, minutes, seconds };
}
