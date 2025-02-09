import Nav from "../../components/Nav"
import CartItem from "../../components/CartItem"
import PaymentForm from "../../components/PaymentForm"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-2xl font-semibold mb-6">Shopping cart</h1>
            <div>
              <CartItem title="Lorem Ipsum" description="Lorem Ipsum varius est pretium" />
              <CartItem title="Lorem Ipsum" description="Lorem Ipsum varius est pretium" />
              <CartItem title="Lorem Ipsum" description="Lorem Ipsum varius est pretium" />
            </div>
          </div>

          <div>
            <PaymentForm />
          </div>
        </div>
      </main>
    </div>
  )
}

