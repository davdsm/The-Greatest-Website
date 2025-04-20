import { Entry } from "@/app/_components/Entry";
import { Brands } from "@/app/_components/Brands";
import { Products } from "@/app/_components/Products";
import NiceList from "../_components/NiceList";

export const Home = () => {
  return (
    <>
      <Entry />
      <Brands />
      <Products />
      <NiceList />
    </>
  );
};
