import React from "react";
import { Outlet } from "react-router-dom";
import { TabOption } from "../TabOptions/TabOption";

export const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <TabOption />
      <Outlet />
    </div>
  );
};
