import Icon from "@/components/ui/icon";
import Navbar from "@/components/Navbar";

const REVIEWS = [
  {
    name: "Алексей М.",
    date: "12 апреля 2026",
    rating: 5,
    device: "Ноутбук",
    text: "Отправил ноутбук по почте — вернули через 4 дня полностью рабочим. Заменили термопасту и почистили от пыли, теперь не греется. Всё чётко, никакого лишнего.",
  },
  {
    name: "Ольга К.",
    date: "5 апреля 2026",
    rating: 5,
    device: "Компьютер",
    text: "Компьютер вис и перезагружался сам по себе. Диагностику провели онлайн, определили проблему с памятью. Объяснили что покупать и как установить. Сэкономила кучу денег.",
  },
  {
    name: "Дмитрий Р.",
    date: "28 марта 2026",
    rating: 5,
    device: "Ноутбук",
    text: "Восстановили данные с залитого ноутбука. Думал, всё потеряно — но ребята спасли все фотографии и документы. Работают профессионально, цена честная.",
  },
  {
    name: "Марина В.",
    date: "20 марта 2026",
    rating: 4,
    device: "Компьютер",
    text: "Удалили вирусы и настроили защиту. Работа выполнена качественно, общались вежливо. Чуть дольше ждала ответа, чем хотелось, но результатом довольна.",
  },
  {
    name: "Сергей Н.",
    date: "14 марта 2026",
    rating: 5,
    device: "Планшет",
    text: "Планшет не включался после падения. Онлайн-консультация помогла разобраться — оказалось, нужно было просто правильно зарядить. Быстро и бесплатно решили вопрос.",
  },
  {
    name: "Анна Т.",
    date: "7 марта 2026",
    rating: 5,
    device: "Ноутбук",
    text: "Установили Windows и все нужные программы. Ноутбук теперь летает. Очень удобно, что всё делается дистанционно — не нужно никуда везти.",
  },
];

const STATS = [
  { value: "500+", label: "выполненных ремонтов" },
  { value: "98%", label: "довольных клиентов" },
  { value: "4.9", label: "средняя оценка" },
  { value: "3 года", label: "на рынке" },
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-[#070b12] text-foreground font-sans">
      <Navbar />

      <div className="pt-16">
        {/* HERO */}
        <section className="relative py-24 overflow-hidden grid-bg">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[rgba(0,229,255,0.04)] blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <div className="font-mono text-xs text-neon tracking-widest mb-4 opacity-70">// REVIEWS</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Отзывы клиентов</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Реальные истории людей, которым мы помогли. Без фильтров и редактуры.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-[rgba(0,229,255,0.06)] bg-[rgba(0,229,255,0.02)] py-12">
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-3xl font-bold neon-text font-mono mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS GRID */}
        <section className="py-24 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 opacity-0 animate-fade-in-up flex flex-col gap-4"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{r.date}</div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-[rgba(0,229,255,0.2)] text-neon bg-[rgba(0,229,255,0.06)]">
                    {r.device}
                  </span>
                </div>

                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Icon
                      key={j}
                      name="Star"
                      size={14}
                      className={j < r.rating ? "text-neon fill-neon" : "text-muted-foreground"}
                    />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-[rgba(0,229,255,0.06)] bg-[rgba(0,229,255,0.02)]">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Хотите так же?</h2>
            <p className="text-muted-foreground mb-8">Оставьте заявку — решим вашу проблему быстро и с гарантией</p>
            <a href="/#diagnosis" className="neon-btn px-8 py-3.5 rounded font-semibold font-mono tracking-wide text-sm inline-flex items-center gap-2">
              <Icon name="Zap" size={16} />
              Заказать диагностику
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[rgba(0,229,255,0.08)] py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded border border-[rgba(0,229,255,0.4)] flex items-center justify-center">
                <Icon name="Cpu" size={12} className="text-neon" />
              </div>
              <span className="font-mono text-sm font-semibold">S<span className="text-neon">Bitoc</span></span>
            </div>
            <p className="text-xs text-muted-foreground font-mono">© 2026 SBitoc. Все права защищены.</p>
            <a href="/" className="text-xs text-muted-foreground hover:text-neon transition-colors font-mono">
              ← На главную
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
