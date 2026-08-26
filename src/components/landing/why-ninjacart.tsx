export default function WhyNinjacart() {
  return (
    <section className="px-10 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 font-semibold text-green-600">
          WHY NINJACART
        </p>

        <h2 className="text-4xl font-bold">
          Fresh Produce. Simple Process.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border p-8">
            <h3 className="text-xl font-bold">Fresh & Reliable</h3>
            <p className="mt-3 text-muted-foreground">
              Get access to fresh produce directly from farmers.
            </p>
          </div>

          <div className="rounded-xl border p-8">
            <h3 className="text-xl font-bold">Real-Time Inventory</h3>
            <p className="mt-3 text-muted-foreground">
              Inventory updates instantly when orders are placed.
            </p>
          </div>

          <div className="rounded-xl border p-8">
            <h3 className="text-xl font-bold">Simple & Efficient</h3>
            <p className="mt-3 text-muted-foreground">
              A smooth experience for both farmers and retailers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}