





import { Metadata } from "next";
import { CartCounter } from "@/app/shopping-cart";



export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Counter shopping cart page',
}


export default function CounterPage() {

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <span className="text-2xl">Productos en el carrito</span>
      <CartCounter initialValue={ 1 } />
    </div>
  );
}