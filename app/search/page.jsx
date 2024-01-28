import { server } from "@/lib/config";
import SearchContainer from "@/components/Search/SearchContainer";
import axios from "axios";

async function handleData(searchParams) {
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    value !== undefined && params.append(key, value);
  });
  const url = `${server}/api/search?${params.toString()}`;
  const res = await axios.get(url);
  return res.data;
}

export default async function Search({ searchParams }) {
  return <SearchContainer data={await handleData(searchParams)} />;
}
