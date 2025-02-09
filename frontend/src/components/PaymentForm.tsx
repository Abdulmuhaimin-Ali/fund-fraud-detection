import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function PaymentForm() {
  return (
    <div className="bg-[#004D20] text-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Card Details</h2>

      <div className="mb-6">
        <p className="mb-2">Card type</p>
        <div className="flex gap-2">
          <div className="bg-[#53bc83]  p-2 rounded">
            <Image src="/mastercard.png?height=30&width=45" alt="Mastercard" width={60} height={30} />
          </div>
          <div className="bg-[#53bc83] p-2 pt-4 rounded">
            <Image src="/visa.svg?height=30&width=45" alt="Visa" width={60} height={30} />
          </div>
          <div className="bg-[#53bc83] p-2 rounded">
            <Image src="/paypal.webp?height=30&width=45" alt="RuPay" width={45} height={30} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block mb-2">Name on card</label>
          <Input placeholder="Name" className="bg-[#1A6039] border-0 text-white placeholder:text-gray-400" />
        </div>

        <div>
          <label className="block mb-2">Card Number</label>
          <Input
            placeholder="1111 2222 3333 4444"
            className="bg-[#1A6039] border-0 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Expiration date</label>
            <Input placeholder="mm/yy" className="bg-[#1A6039] border-0 text-white placeholder:text-gray-400" />
          </div>
          <div>
            <label className="block mb-2">CVV</label>
            <Input placeholder="123" className="bg-[#1A6039] border-0 text-white placeholder:text-gray-400" />
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$1,668</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$4</span>
        </div>
        <div className="flex justify-between font-medium">
          <span>Total (Tax incl.)</span>
          <span>$1,672</span>
        </div>
      </div>

      <Button className="w-full mt-6 bg-[#B36B00] hover:bg-[#915800] text-white">
        <span className="mr-2">$1,627</span>
        <span>Checkout</span>
        <span className="ml-2">→</span>
      </Button>
    </div>
  )
}

