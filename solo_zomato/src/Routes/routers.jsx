import { Route, Routes } from "react-router";
import { Home } from "../Components/Home/Home";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
