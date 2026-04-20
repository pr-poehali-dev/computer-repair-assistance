import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function DiagnosisForm() {
  const [form, setForm] = useState({ name: "", phone: "", problem: "", type: "Компьютер" });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
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
  );
}
