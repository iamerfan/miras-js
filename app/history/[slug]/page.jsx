import History from "@/components/History";
import { server } from "@/lib/config";

const data = async (id) => {
  const result = await fetch(`${server}/api/order/?id=${id}`, {
    cache: "no-cache",
  });
  return result.json();
};

const HistoryPanel = async ({ params }) => {
  return <History data={await data(params.slug)} />;
};
export default HistoryPanel;
