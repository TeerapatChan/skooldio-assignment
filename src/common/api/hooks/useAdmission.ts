import { useSuspenseQuery } from "@tanstack/react-query";

import apiClient from "../apiClient";

export function useQueryAdmission() {
  return useSuspenseQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const { data, status } = await apiClient.get("mock_tcaster_api.json");
      if (status !== 200) {
        throw new Error("Error");
      }
      return data;
    },
  });
}
