import { redirect } from "next/navigation";
import React from "react";

const Dashboard = () => {
  redirect("/dashboard/login");
};

export default Dashboard;
