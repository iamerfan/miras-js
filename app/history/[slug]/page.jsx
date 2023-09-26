import History from "@/components/History";
import { server } from "@/lib/config";
export const runtime = "edge";
const data = async (id) => {
  const result = await fetch(`${server}/api/order/?id=${id}`);
  return result.json();
};

const HistoryPanel = async ({ params }) => {
  return <History data={await data(params.slug)} />;
};
export default HistoryPanel;
