import History from "@/components/History";
import { server } from "@/lib/config";
import axios from "axios";

const data = async (id) => {
  const result = await axios.get(`${server}/api/order/?id=${id}`);
  return result.data;
};

const HistoryPanel = async ({ params }) => {
  return <History data={await data(params.slug)} />;
};
export default HistoryPanel;
