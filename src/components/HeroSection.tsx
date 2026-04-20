import Icon from "@/components/ui/icon";

const SERVICES = [
  { icon: "MonitorCheck", title: "Диагностика", desc: "Полная диагностика ПК и ноутбука за 30 минут. Определим причину любой неисправности." },
  { icon: "Cpu", title: "Ремонт железа", desc: "Замена материнской платы, процессора, видеокарты, памяти и других компонентов." },
  { icon: "HardDrive", title: "Восстановление данных", desc: "Спасём данные с повреждённого накопителя. Работаем даже с физически сломанными дисками." },
  { icon: "Shield", title: "Защита от вирусов", desc: "Удаление вирусов, настройка антивируса, защита от будущих угроз." },
  { icon: "Wifi", title: "Сети и интернет", desc: "Настройка Wi-Fi, роутеров, локальных сетей, VPN для дома и офиса." },
  { icon: "Settings", title: "Настройка ОС", desc: "Установка и настройка Windows / Linux, оптимизация производительности системы." },
];

const PRICES = [
  { service: "Диагностика компьютера", price: "Бесплатно", note: "при ремонте" },
  { service: "Удаление вирусов", price: "от 1 500 ₽", note: "" },
  { service: "Установка Windows", price: "от 2 000 ₽", note: "с драйверами" },
  { service: "Чистка и замена термопасты", price: "от 1 200 ₽", note: "" },
  { service: "Замена SSD / HDD", price: "от 800 ₽", note: "без учёта детали" },
  { service: "Восстановление данных", price: "от 3 000 ₽", note: "зависит от случая" },
  { service: "Настройка роутера / Wi-Fi", price: "от 1 000 ₽", note: "" },
];

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden grid-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[rgba(0,229,255,0.04)] blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[rgba(0,229,255,0.03)] blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className="opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-2 border border-[rgba(0,229,255,0.3)] rounded-full px-4 py-1.5 mb-8 bg-[rgba(0,229,255,0.05)]">
              <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="font-mono text-xs text-neon tracking-widest">ONLINE — ГОТОВЫ К РАБОТЕ</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Компьютерная<br />
              помощь{" "}
              <span className="neon-text">нового</span>
              <br />
              уровня
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Ремонт происходит только онлайн или с отправкой по России. Диагностируем, ремонтируем и защищаем вашу технику. Быстро, прозрачно, с гарантией результата.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#diagnosis" className="neon-btn px-8 py-3.5 rounded font-semibold font-mono tracking-wide text-sm inline-flex items-center gap-2">
                <Icon name="Zap" size={16} />
                Заказать диагностику
              </a>
              <a href="#services" className="px-8 py-3.5 rounded border border-[rgba(0,229,255,0.3)] text-neon font-mono text-sm font-semibold hover:bg-[rgba(0,229,255,0.08)] transition-all duration-200 inline-flex items-center gap-2">
                <Icon name="ChevronRight" size={16} />
                Наши услуги
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-[rgba(0,229,255,0.08)]">
              {[["500+", "ремонтов"], ["3 года", "опыта"], ["98%", "довольных клиентов"]].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold neon-text font-mono">{num}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-in delay-300" style={{ animationFillMode: 'forwards' }}>
            <div className="relative rounded-xl overflow-hidden scan-line border border-[rgba(0,229,255,0.15)]">
              <img
                src="https://cdn.poehali.dev/projects/7d13db0f-54ec-4dc4-ae70-23374bb380c3/files/5c89d253-4712-454a-8d8f-0812dabfc3e6.jpg"
                alt="IT диагностика"
                className="w-full h-[420px] object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-card rounded-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[rgba(0,229,255,0.15)] flex items-center justify-center flex-shrink-0">
                    <Icon name="Activity" size={16} className="text-neon" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-neon">ДИАГНОСТИКА ЗАПУЩЕНА</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Обнаружено: перегрев процессора</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-neon tracking-widest mb-3 opacity-70">// SERVICES</div>
          <h2 className="text-3xl md:text-4xl font-bold">Что мы делаем</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Полный спектр IT-услуг для дома и бизнеса</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="glass-card rounded-xl p-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-11 h-11 rounded-lg bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.2)] flex items-center justify-center mb-5">
                <Icon name={s.icon} fallback="Settings" size={20} className="text-neon" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICE */}
      <section id="price" className="py-24 bg-[rgba(0,229,255,0.02)] border-y border-[rgba(0,229,255,0.06)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-mono text-xs text-neon tracking-widest mb-3 opacity-70">// PRICING</div>
            <h2 className="text-3xl md:text-4xl font-bold">Прайс-лист</h2>
            <p className="text-muted-foreground mt-3">Прозрачные цены без скрытых доплат</p>
          </div>

          <div className="rounded-xl border border-[rgba(0,229,255,0.12)] overflow-hidden">
            {PRICES.map((item, i) => (
              <div
                key={item.service}
                className={`flex items-center justify-between px-6 py-4 ${
                  i % 2 === 0 ? "bg-[rgba(0,229,255,0.02)]" : "bg-transparent"
                } border-b border-[rgba(0,229,255,0.06)] last:border-b-0 hover:bg-[rgba(0,229,255,0.05)] transition-colors`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon opacity-60" />
                  <span className="text-sm font-medium">{item.service}</span>
                  {item.note && (
                    <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full border border-[rgba(0,229,255,0.1)] hidden sm:inline">
                      {item.note}
                    </span>
                  )}
                </div>
                <span className="font-mono font-semibold text-neon text-sm whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Точная стоимость определяется после диагностики. Работаем честно — никаких доплат без согласования.
          </p>
        </div>
      </section>
    </>
  );
}