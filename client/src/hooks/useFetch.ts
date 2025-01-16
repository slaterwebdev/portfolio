import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/utils";
import { useLocation } from "react-router-dom";
import { ApiData } from "@/utils/types";


export const useFetchPageData = () => {
  const [data, setData] = useState<ApiData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const currentPath = useLocation().pathname;
  const PAGE_DATA_URL = `${API_BASE_URL}/api/pages${currentPath}`;

  useEffect(() => {
    fetch(PAGE_DATA_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data: ApiData) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message)
      });
  }, []);

  return { data, error };
};
