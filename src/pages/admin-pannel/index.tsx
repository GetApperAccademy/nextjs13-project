import React, { memo } from "react";
import AdminPannelSpa from "@/spas/admin-pannel";

type AdminPannelProps = {};

const AdminPannel = memo(({}: AdminPannelProps) => {
  return <AdminPannelSpa />;
});
AdminPannel.displayName = "AdminPannel";

export default AdminPannel;
