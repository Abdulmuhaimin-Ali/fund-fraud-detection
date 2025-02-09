import Image from "next/image"

interface CartItemProps {
  title: string
  description: string
}

export default function CartItem({ title, description }: CartItemProps) {
  return (
    <div className="flex gap-4 p-4 rounded-lg border mb-4">
      <Image src="/placeholder.svg?height=50&width=50" alt={title} width={50} height={50} className="grayscale" />
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

