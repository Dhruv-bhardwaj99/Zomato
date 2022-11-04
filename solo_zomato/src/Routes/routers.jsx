import { Route, Routes } from "react-router";
import { Home } from "../Components/Home/Home";
import { Footer } from "../Components/Footer/Footer";
import { My_Navbar } from "../Components/Navbar/Navbar";
import { NotFound } from "../Components/NotFound/NotFound";
import { Delivery } from "../Components/Delivery/Delivery";
import { DiningOut } from "../Components/DiningOut/DiningOut";
import { Nightlife } from "../Components/Nightlife/Nightlife";

export const Routers = () => {
  return (
    <>
      <My_Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/dining_out" element={<DiningOut />} />
          <Route path="/nightlife" element={<Nightlife />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
