import Link from "next/link"

export default function Footer(){
    return(
        <footer className="pt-5 pb-5 border-t">
            <div className="text-center">
                <h2 className="font-bold">Ninjacart</h2>
                <p className="mb-5">Connecting farmers with retailers.</p>
            </div>
            <div className="text-center">
                <h3 className="font-bold">Quick Links</h3>
                <div className="flex justify-center gap-6 mb-5">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
            <div className="flex justify-center gap-50">
                <div className="text-center">
                    <h3 className="font-bold">For Farmers</h3>
                    <div className="flex gap-3">
                        <Link href="/sell">Sell Product</Link>
                        <Link href="/support">Support</Link>
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="font-bold">For Retailers</h3>
                    <div className="flex gap-3">
                        <Link href="/browse">Browse Products</Link>
                        <Link href="/orders">My Orders</Link>
                        <Link href="/support">Support</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}