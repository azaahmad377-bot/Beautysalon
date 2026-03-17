import Layout from "@/component/Layout";
import { Award, Users, Calendar, Sparkles } from "lucide-react";

const stats = [
  { icon: Calendar, value: "11+", label: "Tahun Pengalaman" },
  { icon: Users, value: "1000+", label: "Pelanggan Puas" },
  { icon: Award, value: "10+", label: "Penghargaan" },
];

const Tentang = () => {
  const aboutImage =
    "/assets/bg2.jpg";

  return (
    <Layout>
      {/* Header */}
      <header className="pt-32 pb-16 px-6 bg-yuma-200 border-b">
        <div className="container mx-auto text-center">
          <p className="inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-sage-600">
            <Sparkles size={16} /> Kenali Kami Lebih Dekat
          </p>
          <h1 className="font-display text-5xl font-bold mt-4 text-sage-600">Tentang Kami</h1>
          <p className="font-body text-sage-600 mt-5 max-w-2xl mx-auto">
            Kami hadir untuk memberikan pengalaman kecantikan terbaik dengan sentuhan personal dan kehangatan.
          </p>
        </div>
      </header>

      {/* Story */}
      <section className="py-20 bg-yuma-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden rounded-sm">
              <img src={aboutImage} alt="Interior Aurélia Salon" className="w-full h-[500px] object-cover" />
            </div>
            <div>
              <p className="font-body text-sm tracking-[0.3em] uppercase text-sage-600 mb-3">Cerita Kami</p>
              <h2 className="font-display text-3xl font-semibold mb-6 text-sage-600">Keindahan Dimulai dari Sini</h2>
              <div className="space-y-4 font-body text-sm text-sage-600 leading-relaxed">
                <p>
                  BeautySalon didirikan pada tahun 2015 dengan visi sederhana: memberikan pengalaman perawatan kecantikan terbaik dengan sentuhan personal dan kehangatan.
                </p>
                <p>
                  Kami percaya bahwa setiap orang memiliki keindahan unik yang perlu dirawat dan ditonjolkan. Dengan tim profesional berpengalaman dan produk berkualitas tinggi, kami berkomitmen untuk membantu Anda tampil dan merasa yang terbaik.
                </p>
                <p>
                  Suasana salon kami dirancang untuk memberikan kenyamanan dan ketenangan, sehingga setiap kunjungan menjadi pengalaman yang menyenangkan dan memanjakan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-yuma-200 text-sage-600 border-t border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/80 mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="font-display text-4xl font-bold mb-2">{stat.value}</div>
                <p className="font-body text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-yuma-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="inline-flex items-center justify-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-sage-600 mb-3">
              <Sparkles size={16} /> Nilai Kami
            </p>
            <h2 className="font-display text-4xl font-bold text-sage-600">Apa yang Kami Percaya</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                title: "Kualitas",
                desc: "Produk dan teknik terbaik untuk hasil yang sempurna di setiap treatment yang kami berikan.",
              },
              {
                number: "02",
                title: "Kenyamanan",
                desc: "Suasana yang membuat Anda merasa rileks dan dimanjakan dari awal hingga akhir kunjungan.",
              },
              {
                number: "03",
                title: "Kepercayaan",
                desc: "Hubungan jangka panjang dengan setiap pelanggan kami berdasarkan kejujuran dan integritas.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="relative p-8 rounded-2xl bg-white/70 border border-yuma-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                {/* Number */}
                <span className="font-display text-6xl font-bold text-sage-400 group-hover:text-sage-600 transition-colors duration-300 select-none">
                  {v.number}
                </span>
                {/* Divider */}
                <div className="w-10 h-0.5 bg-sage-500 mt-4 mb-4 group-hover:w-16 transition-all duration-300" />
                {/* Title */}
                <h3 className="font-display text-xl font-bold text-sage-700 mb-3">{v.title}</h3>
                {/* Desc */}
                <p className="font-body text-sm text-sage-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tentang;
