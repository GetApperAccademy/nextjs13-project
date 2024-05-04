import { RootState } from "@/spas/admin-pannel/redux-store";

export const getProductsList = (state: RootState) => state?.product.list ?? [];
