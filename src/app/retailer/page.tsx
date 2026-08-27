import Link from "next/link";
export default function RetailerDashboard() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Retailer Dashboard</h1>

        <p className="mt-2 text-muted-foreground">
          Welcome back! Browse fresh products and manage your orders.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Quick Overview</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md">
                <p className="text-sm text-muted-foreground">Available Products</p>
                <h3 className="mt-3 text-3xl font-bold">0</h3>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md">
                <p className="text-sm text-muted-foreground">Active Orders</p>
                <h3 className="mt-3 text-3xl font-bold">0</h3>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md">
                <p className="text-sm text-muted-foreground">Cart Items</p>
                <h3 className="mt-3 text-3xl font-bold">0</h3>
            </div>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Quick Actions</h2>

        <div className="mt-5 flex flex-wrap gap-4">
            <Link
                href="/retailer/products"
                className="rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90"
            >
                Browse Products
            </Link>
            <Link
                href="/retailer/cart"
                className="rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90"
            >
                View Cart
            </Link>
            <Link
                href="/retailer/orders"
                className="rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:opacity-90"
            >
                My Orders
            </Link>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Recent Activity</h2>

        <div className="mt-5 rounded-xl border bg-card p-6">
            <p className="text-sm text-muted-foreground">
            Your recent orders and activity will appear here.
            </p>
        </div>
      </section>
    </main>
  );
}