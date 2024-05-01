import { RootState } from "@/spas/admin-pannel/redux-store";

export const getAjaxIsLoadingByApi = (api: string) => (state: RootState) =>
  state?.ajax?.isLoading[api];
