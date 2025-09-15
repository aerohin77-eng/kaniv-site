'use client';
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaPhone, FaMapMarkerAlt, FaGoogle } from "react-icons/fa";

const t = {
  ua: {
    brand: "Центр краси та здоров'я · Канів",
    tagline: "КАНІВ | Аналізи • Косметологія • Масаж",
    heroText:
      "Маємо медичну ліцензію. Партнери DILA. Професійна косметика, аналізи, косметологія та масаж. Замовляйте доглядову косметику онлайн або приходьте офлайн.",
    follow: "Підписатися",
    call: "Подзвонити",
    route: "Маршрут",
    order: "Замовити косметику",
    appointment: "Записатися на прийом",
    faq: "Поширені запитання",
    gallery: "Наші роботи",
    footerNote:
      "© " + new Date().getFullYear() + " Центр краси та здоров'я · Канів. Всі права захищено.",
  },
  ru: {
    brand: "Центр красоты и здоровья · Канев",
    tagline: "КАНЕВ | Анализы • Косметология • Массаж",
    heroText:
      "У нас медицинская лицензия. Партнёры DILA. Профессиональная косметика, анализы, косметология и массаж. Заказывайте уход онлайн или приходите офлайн.",
    follow: "Подписаться",
    call: "Позвонить",
    route: "Маршрут",
    order: "Заказать косметику",
    appointment: "Записаться на приём",
    faq: "Частые вопросы",
    gallery: "Наши работы",
    footerNote:
      "© " + new Date().getFullYear() + " Центр красоты и здоровья · Канев. Все права защищены.",
  },
};

const LOGO_SRC = "/logo.png";
const IG_HANDLE = "@centrkrasykaniv";
const IG_URL = "https://www.instagram.com/centrkrasykaniv/";
const MAPS_URL =
  "https://www.google.com/maps/place/Центр+краси+та+здоров’я/@49.7550481,31.4506366,17z/data=!3m1!4b1!4m6!3m5!1s0x40d40b9c1c533fcb:0x71c3f107bfb60879!8m2!3d49.7550481!4d31.4506366!16s%2Fg%2F11nmfssfkw?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D";
const MAPS_EMBED_URL = "https://www.google.com/maps?q=49.7550481,31.4506366&z=17&output=embed";

const contact = {
  phone: "+380669670031",
  instagram: IG_URL,
  promShop: "https://prom.ua/ua",
  appointment: "#appointment-form",
  google: MAPS_URL,
};

const posts = [
  { id: 'p1', img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa0?q=80&w=1200&auto=format&fit=crop', cap: 'Догляд для сяйва шкіри / Уход для сияния кожи' },
  { id: 'p2', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e8f5c?q=80&w=1200&auto=format&fit=crop', cap: 'Кислоти AHA/BHA / Кислоты AHA/BHA' },
  { id: 'p3', img: 'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1200&auto=format&fit=crop', cap: 'SPF щодня / SPF каждый день' },
  { id: 'p4', img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop', cap: 'Сироватки з ніацинамідом / Сыворотки с ниацинамидом' },
  { id: 'p5', img: 'https://images.unsplash.com/photo-1505575972945-280e6ecb22ce?q=80&w=1200&auto=format&fit=crop', cap: 'Делікатне очищення / Деликатное очищение' },
  { id: 'p6', img: 'https://images.unsplash.com/photo-1547887537-6158d64c7f1a?q=80&w=1200&auto=format&fit=crop', cap: 'Масаж та релакс / Массаж и релакс' },
];

const features = [
  { id: 'f1', title: "КАНІВ | Аналізи • Косметологія • Масаж", img: 'https://images.unsplash.com/photo-1556227701-85a03923a6f0?q=80&w=1600&auto=format&fit=crop' },
  { id: 'f2', title: 'Маємо медичну ліцензію / Есть медицинская лицензия', img: 'https://images.unsplash.com/photo-1579154203451-02a5078f9f1d?q=80&w=1600&auto=format&fit=crop' },
  { id: 'f3', title: 'Партнери DILA / Партнёры DILA', img: 'https://images.unsplash.com/photo-1581093588401-16f3d86f7c0e?q=80&w=1600&auto=format&fit=crop' },
  { id: 'f4', title: 'Професійна косметика / Профессиональная косметика', img: 'https://images.unsplash.com/photo-1616486704451-6626e194f3f7?q=80&w=1600&auto=format&fit=crop' },
  { id: 'f5', title: 'Замовляйте онлайн або приходьте офлайн / Заказывайте онлайн или приходите офлайн', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop' },
];

const faqs = [
  { q: "Це оригінальна продукція? / Это оригинальная продукция?", a: "Так / Да. Ми працюємо лише з офіційними постачальниками. Сертифікати надаємо за запитом." },
  { q: "Як швидко відправляєте? / Как быстро отправляете?", a: "Замовлення до 16:00 відправляємо цього ж дня Новою поштою / Заказы до 16:00 отправляем в тот же день Новой почтой." },
  { q: "Чи допоможете підібрати догляд? / Поможете подобрать уход?", a: "Так / Да. Напишіть нам у чат — косметолог підбере схему догляду під ваш тип шкіри." },
];

export default function Page() {
  const lang = "ua" as keyof typeof t;
  const tr = t[lang];

  useEffect(() => {
    if (typeof process !== "undefined" && process.env?.NODE_ENV !== "production") {
      console.assert(!!tr.brand && !!tr.heroText, "Texts must exist");
    }
  }, [tr]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="bg-green-50 text-green-900">
          <div className="mx-auto max-w-7xl px-6 py-2 lg:px-8 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-sm">
            {/* Left: brand + IG */}
            <div className="flex items-center gap-3 font-medium">
              <a href="/" aria-label="Home" className="flex items-center gap-2">
                <img src={LOGO_SRC} alt="Логотип Центр краси Канів" className="rounded-full h-8 w-8 object-cover" />
              </a>
              <span className="hidden sm:inline">{tr.brand}</span>
              <a href={IG_URL} className="flex items-center gap-1 text-green-900/80 hover:underline"><FaInstagram /> @centrkrasykaniv</a>
            </div>
            {/* Right: quick links */}
            <div className="flex flex-wrap items-center gap-4">
              <a href={`tel:${contact.phone}`} className="flex items-center gap-1 hover:underline"><FaPhone /> {contact.phone}</a>
              <a href={IG_URL} className="flex items-center gap-1 hover:underline"><FaInstagram /> Instagram</a>
              <a href={contact.google} target="_blank" rel="noopener" className="flex items-center gap-1 hover:underline"><FaGoogle /> Google</a>
            </div>
          </div>
        </div>

        {/* Center hero content */}
        <div className="relative mx-auto max-w-7xl px-6 pt-14 md:pt-20 lg:px-8 text-center">
          <a href="/" aria-label="Home">
            <img src={LOGO_SRC} alt="Логотип Центр краси Канів" className="mx-auto rounded-full h-28 w-28 object-cover ring-2 ring-green-700/20" />
          </a>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight">{tr.brand}</h1>
          <div className="mt-1 text-green-900/80">@centrkrasykaniv</div>
          <p className="mt-3 max-w-2xl text-base text-gray-700 mx-auto">{tr.heroText}</p>

          {/* Action buttons */}
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={IG_URL} className="flex items-center gap-2 rounded-full px-5 py-2 bg-green-800 text-white hover:bg-green-700 transition"><FaInstagram /> {tr.follow}</a>
            <a href={`tel:${contact.phone}`} className="flex items-center gap-2 rounded-full px-5 py-2 border border-green-800 text-green-800 hover:bg-green-50 transition"><FaPhone /> {tr.call}</a>
            <a href={MAPS_URL} target="_blank" rel="noopener" className="flex items-center gap-2 rounded-full px-5 py-2 border border-gray-300 hover:border-gray-900 transition"><FaMapMarkerAlt /> {tr.route}</a>
            <a href={contact.promShop} className="flex items-center gap-2 rounded-full px-5 py-2 bg-blue-600 text-white hover:bg-blue-500 transition">{tr.order}</a>
            <a href={contact.appointment} className="flex items-center gap-2 rounded-full px-5 py-2 bg-purple-600 text-white hover:bg-purple-500 transition">{tr.appointment}</a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <figure key={f.id} className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm">
              <img src={f.img} alt={f.title} className="h-44 w-full object-cover" />
              <figcaption className="p-4 text-sm sm:text-base font-medium text-gray-800">{f.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8" id="gallery">
        <h2 className="text-2xl font-bold mb-6">{tr.gallery}</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((p) => (
            <figure key={p.id} className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <img src={p.img} alt={p.cap} className="h-72 w-full object-cover group-hover:scale-105 transition" />
              <figcaption className="p-3 text-sm text-gray-700">{p.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">{tr.faq}</h2>
        <div className="space-y-4">
          {faqs.map((f, idx) => (
            <details key={idx} className="rounded-2xl border border-gray-100 p-5 open:shadow-sm">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* MAP EMBED */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">На карті / На карте</h2>
        <div className="mb-4 text-sm">
          <p><strong>Адреса / Адрес:</strong> м. Канів, Центр краси та здоров’я</p>
          <a
            href={MAPS_URL+"&dirflg=d"}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 text-green-800 hover:underline"
          >
            <FaMapMarkerAlt /> Побудувати маршрут / Построить маршрут
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <iframe
            src="https://www.google.com/maps?q=49.7550481,31.4506366&z=17&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Центр краси та здоров’я на карті"
          />
        </div>
        <div className="mt-3 text-sm">
          <a href={MAPS_URL} target="_blank" rel="noopener" className="flex items-center gap-1 text-green-800 hover:underline">
            <FaGoogle /> Відкрити в Google Maps / Открыть в Google Maps
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <a href="/" aria-label="Home" className="flex items-center gap-2">
              <img src={LOGO_SRC} alt="Логотип" className="h-6 w-6 rounded-full object-cover" />
            </a>
            <div className="text-sm text-gray-600">{tr.footerNote}</div>
          </div>
          <div className="flex gap-4 text-sm text-gray-600">
            <a href={`tel:${contact.phone}`} className="flex items-center gap-1 hover:underline"><FaPhone /> {tr.call}</a>
            <a href={MAPS_URL} className="flex items-center gap-1 hover:underline" target="_blank" rel="noopener"><FaMapMarkerAlt /> {tr.route}</a>
            <a href={contact.promShop} className="hover:underline">{tr.order}</a>
            <a href={contact.appointment} className="hover:underline">{tr.appointment}</a>
            <a href={contact.google} className="flex items-center gap-1 hover:underline" target="_blank" rel="noopener"><FaGoogle /> Google</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
