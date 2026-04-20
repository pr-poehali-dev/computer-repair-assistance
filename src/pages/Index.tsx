import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "Прайс", href: "#price" },
  { label: "Блог", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

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
  { service: "Ремонт материнской платы", price: "от 2 500 ₽", note: "диагностика включена" },
];

const BLOG_POSTS = [
  {
    tag: "Безопасность",
    date: "15 апреля 2026",
    title: "5 признаков того, что ваш компьютер заражён вирусом",
    desc: "Медленная работа, странные процессы, всплывающие окна — разбираем симптомы и что с этим делать.",
  },
  {
    tag: "Производительность",
    date: "8 апреля 2026",
    title: "SSD против HDD: почему стоит обновиться прямо сейчас",
    desc: "Объясняем разницу на реальных примерах. Сколько стоит и как ускорить ноутбук в 3 раза.",
  },
  {
    tag: "Советы",
    date: "1 апреля 2026",
    title: "Как продлить жизнь ноутбука: 7 простых правил",
    desc: "Правильная зарядка, температурный режим, чистка — простые привычки, которые экономят деньги.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Сколько времени занимает диагностика?",
    a: "Базовая диагностика занимает от 20 до 60 минут. По результатам мы сообщаем точные сроки ремонта и стоимость.",
  },
  {
    q: "Вы делаете выезд на дом или в офис?",
    a: "Да, выезд доступен в пределах города. Стоимость рассчитывается индивидуально в зависимости от района.",
  },
  {
    q: "Даёте ли вы гарантию на ремонт?",
    a: "На все виды работ предоставляем гарантию от 3 месяцев до 1 года в зависимости от типа ремонта.",
  },
  {
    q: "Что будет, если не удастся починить?",
    a: "Если ремонт невозможен — диагностика бесплатна. Мы честно скажем об этом и посоветуем дальнейшие шаги.",
  },
  {
    q: "Можно ли оставить технику на несколько дней?",
    a: "Конечно. У нас есть сервисный зал с надёжным хранением. Вы получите квитанцию с описанием устройства.",
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", problem: "", type: "Компьютер" });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-foreground font-sans">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(0,229,255,0.08)] bg-[rgba(7,11,18,0.85)] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded border border-neon flex items-center justify-center animate-pulse-neon">
              <Icon name="Cpu" size={16} className="text-neon" />
            </div>
            <span className="font-mono text-lg font-semibold tracking-wider text-white">
              S<span className="text-neon">Bitoc</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-neon transition-colors duration-200 font-mono tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a href="#diagnosis" className="hidden md:block neon-btn px-5 py-2 rounded text-sm font-semibold font-mono tracking-wide">
            Заказать диагностику
          </a>

          <button
            className="md:hidden text-muted-foreground hover:text-neon transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[rgba(7,11,18,0.98)] border-t border-[rgba(0,229,255,0.08)] px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-muted-foreground hover:text-neon transition-colors font-mono py-1"
              >
                {l.label}
              </a>
            ))}
            <a href="#diagnosis" onClick={() => setMenuOpen(false)} className="neon-btn px-5 py-2 rounded text-sm font-semibold font-mono text-center mt-2">
              Заказать диагностику
            </a>
          </div>
        )}
      </nav>

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

      {/* DIAGNOSIS FORM */}
      <section id="diagnosis" className="py-24 max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="font-mono text-xs text-neon tracking-widest mb-3 opacity-70">// DIAGNOSTIC_REQUEST</div>
          <h2 className="text-3xl md:text-4xl font-bold">Заказать диагностику</h2>
          <p className="text-muted-foreground mt-3">Оставьте заявку — перезвоним в течение 30 минут</p>
        </div>

        {submitted ? (
          <div className="glass-card rounded-xl p-10 text-center neon-border">
            <div className="w-16 h-16 rounded-full bg-[rgba(0,229,255,0.1)] flex items-center justify-center mx-auto mb-5">
              <Icon name="CheckCircle2" size={32} className="text-neon" />
            </div>
            <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
            <p className="text-muted-foreground text-sm">Мы свяжемся с вами в течение 30 минут</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-xs font-mono text-neon hover:opacity-70 transition-opacity"
            >
              ← Отправить ещё одну
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="glass-card rounded-xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-mono text-xs text-muted-foreground mb-2 tracking-wide">ИМЯ</label>
                <input
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Александр"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(0,229,255,0.15)] rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon focus:bg-[rgba(0,229,255,0.04)] transition-all"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-muted-foreground mb-2 tracking-wide">ТЕЛЕФОН</label>
                <input
                  required
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(0,229,255,0.15)] rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon focus:bg-[rgba(0,229,255,0.04)] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-muted-foreground mb-2 tracking-wide">ТИП УСТРОЙСТВА</label>
              <div className="flex gap-3 flex-wrap">
                {["Компьютер", "Ноутбук", "Планшет", "Другое"].map(type => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setForm({ ...form, type })}
                    className={`px-4 py-2 rounded-lg border text-sm font-mono transition-all ${
                      form.type === type
                        ? "border-neon bg-[rgba(0,229,255,0.1)] text-neon"
                        : "border-[rgba(0,229,255,0.15)] text-muted-foreground hover:border-[rgba(0,229,255,0.3)]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-muted-foreground mb-2 tracking-wide">ОПИШИТЕ ПРОБЛЕМУ</label>
              <textarea
                value={form.problem}
                onChange={e => setForm({ ...form, problem: e.target.value })}
                placeholder="Расскажите, что происходит с устройством: не включается, тормозит, шумит, синий экран..."
                rows={4}
                className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(0,229,255,0.15)] rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon focus:bg-[rgba(0,229,255,0.04)] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="neon-btn w-full py-3.5 rounded-lg font-semibold font-mono tracking-wide text-sm flex items-center justify-center gap-2"
            >
              <Icon name="Send" size={16} />
              Отправить заявку
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        )}
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 bg-[rgba(0,229,255,0.02)] border-y border-[rgba(0,229,255,0.06)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-mono text-xs text-neon tracking-widest mb-3 opacity-70">// BLOG</div>
            <h2 className="text-3xl md:text-4xl font-bold">IT-советы</h2>
            <p className="text-muted-foreground mt-3">Полезные статьи о технике и безопасности</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <article
                key={post.title}
                className="glass-card rounded-xl p-6 cursor-pointer opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono px-3 py-1 rounded-full border border-[rgba(0,229,255,0.25)] text-neon bg-[rgba(0,229,255,0.08)]">
                    {post.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-semibold leading-snug mb-3 hover:text-neon transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{post.desc}</p>
                <div className="flex items-center gap-1.5 text-xs text-neon font-mono group">
                  <span>Читать</span>
                  <Icon name="ArrowRight" size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-neon tracking-widest mb-3 opacity-70">// FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold">Частые вопросы</h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-[rgba(0,229,255,0.1)] overflow-hidden transition-all duration-200 hover:border-[rgba(0,229,255,0.25)]"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-medium text-sm">{item.q}</span>
                <Icon
                  name="ChevronDown"
                  size={18}
                  className={`text-neon flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-[rgba(0,229,255,0.08)] pt-4 bg-[rgba(0,229,255,0.02)]">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-[rgba(0,229,255,0.02)] border-t border-[rgba(0,229,255,0.06)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="font-mono text-xs text-neon tracking-widest mb-3 opacity-70">// CONTACTS</div>
            <h2 className="text-3xl md:text-4xl font-bold">Контакты</h2>
            <p className="text-muted-foreground mt-3">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (999) 722-24-47", sub: "Пн–Вс с 9:00 до 21:00" },
              { icon: "MapPin", label: "Адрес", value: "Центральный офис", sub: "" },
              { icon: "Clock", label: "График работы", value: "09:00 – 21:00", sub: "Без выходных" },
            ].map(item => (
              <div key={item.label} className="glass-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.2)] flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} fallback="Info" size={22} className="text-neon" />
                </div>
                <div className="font-mono text-xs text-muted-foreground tracking-widest mb-2">{item.label.toUpperCase()}</div>
                <div className="font-semibold mb-1">{item.value}</div>
                <div className="text-xs text-muted-foreground">{item.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 glass-card rounded-xl p-8 text-center">
            <p className="text-muted-foreground text-sm mb-5">Срочный вопрос? Напишите нам прямо сейчас</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="tel:+79997222447" className="neon-btn px-6 py-2.5 rounded-lg font-mono text-sm font-semibold inline-flex items-center gap-2">
                <Icon name="Phone" size={15} />
                Позвонить
              </a>
              <a href="https://t.me/Bitoc_00" className="px-6 py-2.5 rounded-lg border border-[rgba(0,229,255,0.3)] text-neon font-mono text-sm font-semibold hover:bg-[rgba(0,229,255,0.08)] transition-all inline-flex items-center gap-2">
                <Icon name="MessageCircle" size={15} />
                Telegram
              </a>
              <a href="https://wa.me/" className="px-6 py-2.5 rounded-lg border border-[rgba(0,229,255,0.3)] text-neon font-mono text-sm font-semibold hover:bg-[rgba(0,229,255,0.08)] transition-all inline-flex items-center gap-2">
                <Icon name="MessageSquare" size={15} />
                WhatsApp
              </a>
            </div>
          </div>
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
          <div className="flex gap-4">
            {NAV_LINKS.slice(0, 4).map(l => (
              <a key={l.href} href={l.href} className="text-xs text-muted-foreground hover:text-neon transition-colors font-mono">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}