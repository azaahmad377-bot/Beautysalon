import Layout from "@/component/Layout";
import { ArrowRight, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

const Layanan = () => {
  const WHATSAPP_NUMBER = "6287866242877";
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo Beauty Salon, saya ingin booking treatment. Bisa info jadwal?",
  )}`;

  const services = useMemo(
    () => [
      {
        image:
          "/assets/Hair.jpg",
        category: "Hair Care",
        subtitle: "Rambut sehat, rapi, dan wangi sepanjang hari.",
        items: [
          { name: "Potong Rambut", price: "Rp.50.000" },
          { name: "Hair Spa", price: "Rp.150.000" },
          { name: "Smoothing", price: "Rp.500.000" },
          { name: "Coloring", price: "Rp.300.000" },
        ],
      },
      {
        image:
          "/assets/Facial.jpg",
        category: "Facial Treatment",
        subtitle: "Kulit lebih cerah, bersih, dan glowing.",
        items: [
          { name: "Basic Facial", price: "Rp.100.000" },
          { name: "Acne Treatment", price: "Rp.200.000" },
          { name: "Anti-Aging", price: "Rp.350.000" },
          { name: "Brightening", price: "Rp.250.000" },
        ],
      },
      {
        image:
          "/assets/Nail1.jpg",
        category: "Nail Care",
        subtitle: "Kuku rapi, bersih, dan desain sesuai request kamu.",
        items: [
          { name: "Manicure", price: "Rp.75.000" },
          { name: "Pedicure", price: "Rp.85.000" },
          { name: "Gel Polish", price: "Rp.150.000" },
          { name: "Nail Art", price: "Rp.200.000" },
        ],
      },
      {
        image:
          "/assets/Bulumata.jpg",
        category: "Eyelashes",
        subtitle: "Bulu mata terlihat lebih lentik dan tegas.",
        items: [
          { name: "Lash Extension Classic", price: "Rp.250.000" },
          { name: "Lash Extension Volume", price: "Rp.350.000" },
          { name: "Lash Lift", price: "Rp.200.000" },
          { name: "Refill Lash", price: "Rp.150.000" },
        ],
      },
      {
        image:
          "/assets/Halis1.jpg",
        category: "Eyebrow",
        subtitle: "Bentuk alis lebih tegas, simetris, dan natural.",
        items: [
          { name: "Brow Shaping", price: "Rp.75.000" },
          { name: "Brow Tint", price: "Rp.120.000" },
          { name: "Brow Lamination", price: "Rp.250.000" },
          { name: "Threading", price: "Rp.60.000" },
        ],
      },
      {
        image:
          "/assets/Pijat.jpg",
        category: "Spa",
        subtitle: "Pijatan yang memukau.",
        items: [
          { name: "legs massages", price: "Rp.175.000" },
          { name: "Hands massages", price: "Rp.175.000" },
          { name: "Full Body massages", price: "Rp.350.000" },
          { name: "Balinese masages", price: "Rp.200.000" },
        ],
      },
      {
        image: "/assets/Makeup2.jpg",
        category: "Makeup",
        subtitle: "Perubahan wajah yang sempurna",
        items: [
          { name: "Natural Daily Makeup", price: "Rp.150.000" },
          { name: "Party / Event Makeup", price: "Rp.250.000" },
          { name: "Wedding Makeup", price: "Rp.800.000" },
          { name: "Photoshoot Makeup", price: "Rp.400.000" }
        ]
      }
    ],
    [],
  );

  const [activeCategory, setActiveCategory] = useState(services[0]?.category ?? "");
  const active = services.find((s) => s.category === activeCategory) ?? services[0];

  return (
    <Layout>
      <div className="min-h-screen">
        <header
          className="pt-32 pb-16 px-6 bg-yuma-200 border-b">
          <div className="container mx-auto text-center">
            <p className="inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-sage-600">
              <Sparkles size={16} /> Pricelist & Treatment
            </p>
            <h1 className="font-display text-5xl font-bold mt-4 text-sage-600">
              Layanan Kami
            </h1>
            <p className="font-body text-sage-600 mt-5 max-w-2xl mx-auto">
              Berbagai layanan kecantikan profesional untuk memenuhi kebutuhan Anda.
            </p>

            {/* <div className="mt-8">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3 rounded-lg font-body uppercase tracking-wider hover:bg-accent/90 transition-colors"
              >
                Booking Now <ArrowRight size={18} />
              </a>
            </div> */}
          </div>
        </header>

        <section
          className="py-16 px-6 bg-yuma-200">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Category selector */}
              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <div className="rounded-2xl border border-yuma-50 bg-yuma-300 backdrop-blur-sm shadow-sm p-6">
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <h2 className="font-display text-2xl font-semibold text-sage-600">Kategori</h2>
                      <span className="text-xs font-body px-3 py-1 rounded-full bg-white/20 text-white">
                        {services.length} pilihan
                      </span>
                    </div>

                    {/* Mobile pills */}
                    <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 -mb-2">
                      {services.map((s) => (
                        <button
                          key={s.category}
                          type="button"
                          onClick={() => setActiveCategory(s.category)}
                          className={`shrink-0 px-4 py-2 rounded-full border font-body text-sm transition-colors ${
                            activeCategory === s.category
                              ? "bg-white/70 text-sage-600 border-yuma-100"
                              : "bg-white/70 text-sage-600 border-black/10 hover:border-yuma-200"
                          }`}
                        >
                          {s.category}
                        </button>
                      ))}
                    </div>

                    {/* Desktop list */}
                    <div className="hidden lg:flex flex-col gap-2">
                      {services.map((s) => (
                        <button
                          key={s.category}
                          type="button"
                          onClick={() => setActiveCategory(s.category)}
                          className={`text-left rounded-xl px-4 py-3 border transition-all ${
                            activeCategory === s.category
                              ? "bg-white/90 border-sage-500 shadow-sm"
                              : "bg-white/80 border-black/10 hover:border-sage-500"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="font-body font-semibold text-sage-700">{s.category}</div>
                              <div className="font-body text-xs text-sage-600 mt-1">{s.subtitle}</div>
                            </div>
                            <span className="text-xs font-body px-2.5 py-1 rounded-full bg-sage-700 text-yuma-100 whitespace-nowrap">
                              {s.items.length}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-sage-600 text-white px-6 py-3 rounded-lg font-body uppercase tracking-wider hover:bg-sage-500 transition-colors"
                      >
                        Booking via WhatsApp <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Active category details */}
              <div className="lg:col-span-8">
                <div className="rounded-2xl overflow-hidden border border-white bg-white/80 backdrop-blur-sm shadow-sm">
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <img
                      src={active?.image}
                      alt={active?.category}
                      className="h-full w-full object-cover scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">
                            {active?.category}
                          </h3>
                          <p className="font-body text-white mt-2">{active?.subtitle}</p>
                        </div>
                        <span className="text-xs font-body px-3 py-1 rounded-full bg-white/15 text-white whitespace-nowrap">
                          {active?.items.length} treatment
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {active?.items.map((item) => (
                        <div
                          key={item.name}
                          className="rounded-xl border border-black/5 bg-white/70 px-5 py-4 flex items-start justify-between gap-4"
                        >
                          <div className="font-body text-sm text-sage-700">{item.name}</div>
                          <div className="font-body text-sm font-semibold text-sage-800 whitespace-nowrap">
                            {item.price}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <div className="font-body text-sm text-muted-foreground">
                        Mau konsultasi dulu? Chat kami, nanti dibantu pilih treatment yang cocok.
                      </div>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-sage-600 text-sage-600 px-6 py-3 rounded-lg font-body uppercase tracking-wider hover:bg-sage-600 hover:text-white transition-colors"
                      >
                        Tanya & booking <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mini grid to explore more */}
                <div className="mt-10">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h4 className="font-display text-2xl font-semibold text-sage-600">Explore kategori lain</h4>
                    <span className="font-body text-xs text-gray-400">Klik untuk ganti kategori</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {services
                      .filter((s) => s.category !== activeCategory)
                      .slice(0, 6)
                      .map((s) => (
                        <button
                          key={s.category}
                          type="button"
                          onClick={() => setActiveCategory(s.category)}
                          className="group rounded-2xl overflow-hidden border border-white/60 bg-white/65 backdrop-blur-sm shadow-sm hover:shadow-md transition-all text-left"
                        >
                          <div className="h-24 overflow-hidden">
                            <img
                              src={s.image}
                              alt={s.category}
                              className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                          <div className="p-3">
                            <div className="font-body text-sm font-semibold text-sage-600">{s.category}</div>
                            <div className="font-body text-xs text-sage-600 mt-1">{s.items.length} treatment</div>
                          </div>
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Layanan;
