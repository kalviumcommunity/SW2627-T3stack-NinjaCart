export default function Footer(){
    return(
        <footer>
            <div className="text-center">
                <h2 className="font-bold">Ninjacart</h2>
                <p className="mb-5">Connecting farmers with retailers.</p>
            </div>
            <div className="text-center">
                <h3 className="font-bold">Quick Links</h3>
                <div className="flex justify-center gap-6 mb-5">
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/products">Products</a>
                    <a href="/Contact">Contact</a>
                </div>
            </div>
            <div className="flex justify-center gap-50">
                <div className="text-center">
                    <h3 className="font-bold">For Farmers</h3>
                    <div className="flex gap-3">
                        <a href="/sell">Sell Product</a>
                        <a href="/support">Farmer Support</a>
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="font-bold">For Retailers</h3>
                    <div className="flex gap-3">
                        <a href="/browse">Browse Product</a>
                        <a href="/orders">My Orders</a>
                        <a href="/support">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}