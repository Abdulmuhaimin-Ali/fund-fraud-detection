"use client";
import Nav from "../../components/Nav";
import CartItem from "../../components/CartItem";
import PaymentForm from "../../components/PaymentForm";
import { useCart } from "../../cartContext";
export default function Page() {
  const { cart } = useCart();
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-2xl font-semibold mb-6">Shopping cart</h1>
            <div>
              {cart.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <PaymentForm />
          </div>
        </div>
      </main>
    </div>
  );
}
