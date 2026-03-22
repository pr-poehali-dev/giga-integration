import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const MODULES = [
  {
    id: "M1",
    title: "Модуль 1",
    subtitle: "Природа и технологии",
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "text-cyan-300",
    borderColor: "border-cyan-400/30",
    tasks: [
      {
        id: 1,
        title: "Мост, который выдержит",
        desc: "Из двух листов А4 и скотча строим мост пролётом 20 см, который выдержит учебник.",
        subject: "Окружающий мир · Технология",
        question: "Как перебраться через пропасть, если у тебя только два листа бумаги и скотч?",
        link: "https://learningapps.org/watch?v=p5y3fn5ya26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=p5y3fn5ya26",
      },
      {
        id: 2,
        title: "Погодная станция",
        desc: "Создаём флюгер и дождемер, учимся предсказывать погоду без интернета.",
        subject: "Окружающий мир · Математика",
        question: "Как предсказать дождь без интернета?",
        link: "https://learningapps.org/watch?v=ps311t53j26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=ps311t53j26",
      },
      {
        id: 3,
        title: "Секреты текста",
        desc: "Конструктор историй: собираем рассказ из «кирпичиков»-предложений.",
        subject: "Русский язык · Литературное чтение",
        question: "Сможет ли компьютер расставить предложения сказки правильно?",
        link: "https://learningapps.org/watch?v=pp84mmuvt26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=pp84mmuvt26",
      },
      {
        id: 4,
        title: "Тень и свет",
        desc: "Строим теневой театр и исследуем, почему тень меняет размер.",
        subject: "Окружающий мир · ИЗО",
        question: "Как с помощью тени рассказать историю?",
        link: "https://learningapps.org/watch?v=pwsuorwxk26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=pwsuorwxk26",
      },
      {
        id: 5,
        title: "Маршрут робота",
        desc: "Составляем алгоритм для робота: «вперёд», «налево», «направо».",
        subject: "Математика · Технология",
        question: "Как научить робота найти сокровище?",
        link: "https://learningapps.org/watch?v=pqcxjjqzc26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=pqcxjjqzc26",
      },
    ],
  },
  {
    id: "M2",
    title: "Модуль 2",
    subtitle: "Вода, воздух, жизнь",
    color: "from-violet-500/20 to-purple-500/10",
    accent: "text-violet-300",
    borderColor: "border-violet-400/30",
    tasks: [
      {
        id: 6,
        title: "Водяная мельница",
        desc: "Мастерим модель водяного колеса и заставляем воду работать.",
        subject: "Окружающий мир · Технология",
        question: "Как заставить воду поднять груз?",
        link: "https://learningapps.org/watch?v=pf2uwe7i526",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=pf2uwe7i526",
      },
      {
        id: 7,
        title: "Секреты семян",
        desc: "Закладываем эксперимент по проращиванию фасоли в трёх разных условиях.",
        subject: "Окружающий мир · Математика",
        question: "Что нужно семечку, чтобы оно проснулось?",
        link: "https://learningapps.org/watch?v=pqqnmbkvn26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=pqqnmbkvn26",
      },
      {
        id: 8,
        title: "Спасательный круг",
        desc: "Лепим лодку из пластилина, которая удержит 10 монет на воде.",
        subject: "Окружающий мир · Математика",
        question: "Почему тяжёлый корабль не тонет?",
        link: "https://learningapps.org/watch?v=pa7h03dmt26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=pa7h03dmt26",
      },
      {
        id: 9,
        title: "Город будущего",
        desc: "Коллективный макет микрорайона: дома, парки, дороги, школы.",
        subject: "Окружающий мир · Математика · ИЗО",
        question: "Как спланировать город, где удобно всем?",
        link: "https://learningapps.org/watch?v=pqb59vhdn26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=pqb59vhdn26",
      },
      {
        id: 10,
        title: "Воздушный змей",
        desc: "Собираем змея из бумаги и трубочек, изучаем подъёмную силу ветра.",
        subject: "Окружающий мир · Технология",
        question: "Как заставить бумагу летать с помощью ветра?",
        link: "https://learningapps.org/watch?v=p4kyv2hjc26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=p4kyv2hjc26",
      },
    ],
  },
  {
    id: "M3",
    title: "Модуль 3",
    subtitle: "Код, природа и космос",
    color: "from-orange-500/20 to-amber-500/10",
    accent: "text-amber-300",
    borderColor: "border-amber-400/30",
    tasks: [
      {
        id: 11,
        title: "Кодовая башня",
        desc: "Пишем «код» для постройки башни и проверяем его на соседе.",
        subject: "Математика · Технология",
        question: "Можно ли записать инструкцию по сборке так, чтобы её понял компьютер?",
        link: "https://learningapps.org/watch?v=p3iu88a8a26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=p3iu88a8a26",
      },
      {
        id: 12,
        title: "Карта сокровищ",
        desc: "Рисуем карту класса с масштабом и прячем «клад».",
        subject: "Окружающий мир · Математика",
        question: "Как нарисовать карту, чтобы другой точно нашёл клад?",
        link: "https://learningapps.org/watch?v=p9v84tkva26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=p9v84tkva26",
      },
      {
        id: 13,
        title: "Бионика: крылья и ласты",
        desc: "Изучаем форму крыла птицы и плавника рыбы, создаём свои модели.",
        subject: "Окружающий мир · Технология",
        question: "Чему люди могут научиться у птиц и рыб?",
        link: "https://learningapps.org/watch?v=p5af5ruoa26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=p5af5ruoa26",
      },
      {
        id: 14,
        title: "Эко-упаковка",
        desc: "Из газет и ткани создаём упаковку без пластика.",
        subject: "Окружающий мир · Технология · ИЗО",
        question: "Как упаковать подарок, не используя пластик?",
        link: "https://learningapps.org/watch?v=p8a7vrpqa26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=p8a7vrpqa26",
      },
      {
        id: 15,
        title: "Космическая станция",
        desc: "Строим макет МКС из втулок, стаканчиков и фольги — не менее трёх модулей.",
        subject: "Окружающий мир · Технология · ИЗО",
        question: "Как построить станцию, где космонавты могут жить в невесомости?",
        link: "https://learningapps.org/watch?v=pd29un6ia26",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://learningapps.org/watch?v=pd29un6ia26",
      },
    ],
  },
]

export function TasksSection() {
  const { ref, isVisible } = useReveal(0.1)
  const [activeModule, setActiveModule] = useState(0)
  const [expanded, setExpanded] = useState<number | null>(null)

  const module = MODULES[activeModule]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col px-6 pt-20 pb-4 md:px-12 md:pt-20 lg:px-16"
    >
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col">
        {/* Header */}
        <div
          className={`mb-4 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Задания
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ 15 интерактивных занятий по STEAM</p>
        </div>

        {/* Module Tabs */}
        <div
          className={`mb-4 flex flex-wrap gap-2 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {MODULES.map((m, i) => (
            <button
              key={m.id}
              onClick={() => { setActiveModule(i); setExpanded(null) }}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-300 ${
                activeModule === i
                  ? "border-foreground/40 bg-foreground/20 text-foreground backdrop-blur-md"
                  : "border-foreground/10 text-foreground/50 hover:border-foreground/20 hover:text-foreground/80"
              }`}
            >
              {m.id} · {m.subtitle}
            </button>
          ))}
        </div>

        {/* Tasks Grid */}
        <div
          className={`flex-1 overflow-hidden transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="grid h-full grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {module.tasks.map((task, i) => (
              <TaskCard
                key={task.id}
                task={task}
                index={i}
                accent={module.accent}
                borderColor={module.borderColor}
                isVisible={isVisible}
                isExpanded={expanded === task.id}
                onToggle={() => setExpanded(expanded === task.id ? null : task.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TaskCard({
  task,
  index,
  accent,
  borderColor,
  isVisible,
  isExpanded,
  onToggle,
}: {
  task: { id: number; title: string; desc: string; subject: string; question: string; link: string; qr: string }
  index: number
  accent: string
  borderColor: string
  isVisible: boolean
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-700 hover:scale-[1.015] ${borderColor} ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{
        transitionDelay: `${300 + index * 80}ms`,
        background: "rgba(255,255,255,0.04)",
      }}
    >
      <div className={`flex flex-col p-3 md:p-4 ${isExpanded ? "overflow-y-auto" : "overflow-hidden"} flex-1`}>
        {/* Number + toggle */}
        <div className="mb-2 flex items-center justify-between">
          <span className={`font-mono text-xs font-bold ${accent}`}>#{String(task.id).padStart(2, "0")}</span>
          <button
            onClick={onToggle}
            className="flex h-5 w-5 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 transition-colors hover:bg-foreground/10"
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={10} className="text-foreground/50" />
          </button>
        </div>

        {/* Title */}
        <h3 className="mb-1 font-sans text-sm font-medium leading-snug text-foreground md:text-base">
          {task.title}
        </h3>

        {/* Subject badge */}
        <p className={`mb-2 font-mono text-[10px] leading-tight ${accent} opacity-70`}>{task.subject}</p>

        {/* Description */}
        <p className="mb-3 font-mono text-xs leading-relaxed text-foreground/60">{task.desc}</p>

        {/* Expanded: probing question */}
        {isExpanded && (
          <div className="mb-3">
            <div
              className={`rounded-lg border p-2 ${borderColor}`}
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <p className="mb-1 font-mono text-[10px] text-foreground/40">Проблемный вопрос</p>
              <p className="font-mono text-xs leading-relaxed italic text-foreground/80">«{task.question}»</p>
            </div>
          </div>
        )}

        <div className="flex-1" />

        {/* Link */}
        <div
          className={`mb-2 flex items-center gap-1.5 rounded-lg border p-2 transition-colors group-hover:border-foreground/20 ${borderColor}`}
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <Icon name="Link" size={10} className="shrink-0 text-foreground/40" />
          {task.link ? (
            <a
              href={task.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`truncate font-mono text-[10px] ${accent} hover:underline`}
            >
              {task.link}
            </a>
          ) : (
            <span className="font-mono text-[10px] italic text-foreground/25">Ссылка не добавлена</span>
          )}
        </div>

        {/* QR */}
        <div
          className={`flex items-center justify-center gap-1.5 rounded-lg border p-2 transition-colors group-hover:border-foreground/20 ${borderColor}`}
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <Icon name="QrCode" size={10} className="shrink-0 text-foreground/40" />
          {task.qr ? (
            <a href={task.link} target="_blank" rel="noopener noreferrer">
              <img src={task.qr} alt={`QR занятие ${task.id}`} className="h-12 w-12 rounded object-contain" />
            </a>
          ) : (
            <span className="font-mono text-[10px] italic text-foreground/25">QR не добавлен</span>
          )}
        </div>
      </div>
    </div>
  )
}