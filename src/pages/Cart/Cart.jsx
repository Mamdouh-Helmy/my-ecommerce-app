import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import Topnave from "../Component/Topnave";
import Middlenav from "../Component/Middlenav";
import Bottomnav from "../Component/Bottomnav";
import CartProdects from "../Component/CartProdects";

export default function Cart() {
    const { cart } = useContext(ProductsContext);
  return (
    <>
      <Topnave/>
      <Middlenav/>
      <Bottomnav/>
      <CartProdects cart={cart} />
    </>
  )
}
