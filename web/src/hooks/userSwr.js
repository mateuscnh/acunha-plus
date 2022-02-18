import api from "@src/services/api";
import useSWR from "swr";

export default function useSwr(url, params, swrOptions) {
  const { data, error, mutate, isValidating } = useSWR(
    params ? [url, ...Object.values(params.params)] : url,
    async (urlToFetch) => {
      const response = await api.get(urlToFetch, params);
      return response.data;
    },
    { errorRetryCount: 2, ...swrOptions }
  );

  return { data, error, mutate, isValidating };
}
