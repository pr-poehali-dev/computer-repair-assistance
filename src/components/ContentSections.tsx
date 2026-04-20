import { useState } from "react";
import Icon from "@/components/ui/icon";
import { NAV_LINKS } from "@/components/Navbar";

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

export default function ContentSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
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
    </>
  );
}
