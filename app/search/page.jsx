import { server } from "@/lib/config";
import SearchContainer from "@/components/Search/SearchContainer";

async function handleData(searchParams) {
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    value !== undefined && params.append(key, value);
  });
  const url = `${server}/api/search?${params.toString()}`;
  const res = await fetch(url, { cache: "no-cache" });
  return res.json();
}

export default async function Search({ searchParams }) {
  return <SearchContainer data={await handleData(searchParams)} />;
}
