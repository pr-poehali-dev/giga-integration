import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const MODULES = [
  {
    id: "M1",
    title: "Модуль 1",
    subtitle: "Наука и технологии",
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "text-cyan-300",
    borderColor: "border-cyan-400/30",
    tasks: [
      { id: 1, title: "Законы Ньютона", desc: "Исследуем силы и движение через эксперименты", link: "", qr: "" },
      { id: 2, title: "Оптика и свет", desc: "Преломление, отражение и спектр цветов", link: "", qr: "" },
      { id: 3, title: "Электрические цепи", desc: "Собираем простые схемы и изучаем ток", link: "", qr: "" },
      { id: 4, title: "Химические реакции", desc: "Наблюдаем превращения веществ", link: "", qr: "" },
      { id: 5, title: "Экосистемы", desc: "Изучаем взаимосвязи в природе", link: "", qr: "" },
    ],
  },
  {
    id: "M2",
    title: "Модуль 2",
    subtitle: "Технологии и инженерия",
    color: "from-violet-500/20 to-purple-500/10",
    accent: "text-violet-300",
    borderColor: "border-violet-400/30",
    tasks: [
      { id: 6, title: "3D-моделирование", desc: "Создаём объекты в цифровом пространстве", link: "", qr: "" },
      { id: 7, title: "Робототехника", desc: "Программируем и управляем роботами", link: "", qr: "" },
      { id: 8, title: "Мосты и конструкции", desc: "Проектируем прочные сооружения", link: "", qr: "" },
      { id: 9, title: "Возобновляемая энергия", desc: "Солнечные панели, ветер и вода", link: "", qr: "" },
      { id: 10, title: "Интернет вещей", desc: "Умные устройства вокруг нас", link: "", qr: "" },
    ],
  },
  {
    id: "M3",
    title: "Модуль 3",
    subtitle: "Арт, математика и креатив",
    color: "from-orange-500/20 to-amber-500/10",
    accent: "text-amber-300",
    borderColor: "border-amber-400/30",
    tasks: [
      { id: 11, title: "Геометрия в природе", desc: "Фракталы, спирали и золотое сечение", link: "", qr: "" },
      { id: 12, title: "Цифровое искусство", desc: "Создаём картины с помощью алгоритмов", link: "", qr: "" },
      { id: 13, title: "Музыка и математика", desc: "Ритм, частоты и волновые паттерны", link: "", qr: "" },
      { id: 14, title: "Архитектура будущего", desc: "Проектируем здания мечты", link: "", qr: "" },
      { id: 15, title: "Итоговый проект", desc: "Объединяем все знания в одном творении", link: "", qr: "" },
    ],
  },
]

export function TasksSection() {
  const { ref, isVisible } = useReveal(0.1)
  const [activeModule, setActiveModule] = useState(0)

  const module = MODULES[activeModule]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col px-6 pt-20 pb-6 md:px-12 md:pt-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col h-full">
        {/* Header */}
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Задания
          </h2>
          <p className="font-mono text-sm text-foreground/60">/ 15 интерактивных заданий по STEAM</p>
        </div>

        {/* Module Tabs */}
        <div
          className={`mb-6 flex gap-3 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {MODULES.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setActiveModule(i)}
              className={`rounded-full border px-4 py-2 font-mono text-xs transition-all duration-300 ${
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
          className={`flex-1 overflow-hidden transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
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
                gradientColor={module.color}
                isVisible={isVisible}
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
  gradientColor,
  isVisible,
}: {
  task: { id: number; title: string; desc: string; link: string; qr: string }
  index: number
  accent: string
  borderColor: string
  gradientColor: string
  isVisible: boolean
}) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border bg-gradient-to-br p-4 backdrop-blur-md transition-all duration-700 hover:scale-[1.02] ${borderColor} ${gradientColor} ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{
        transitionDelay: `${300 + index * 80}ms`,
        background: "rgba(255,255,255,0.04)",
      }}
    >
      {/* Number */}
      <div className={`mb-3 flex items-center justify-between`}>
        <span className={`font-mono text-xs font-bold ${accent}`}>
          #{String(task.id).padStart(2, "0")}
        </span>
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-foreground/10 bg-foreground/5">
          <Icon name="Zap" size={11} className="text-foreground/40" />
        </div>
      </div>

      {/* Title & Desc */}
      <h3 className="mb-1 font-sans text-sm font-medium leading-snug text-foreground md:text-base">
        {task.title}
      </h3>
      <p className="mb-4 flex-1 font-mono text-xs leading-relaxed text-foreground/55">
        {task.desc}
      </p>

      {/* Link */}
      <div className={`mb-2 flex items-center gap-2 rounded-lg border p-2 transition-colors group-hover:border-foreground/20 ${borderColor}`}
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <Icon name="Link" size={11} className="shrink-0 text-foreground/40" />
        {task.link ? (
          <a
            href={task.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`truncate font-mono text-xs ${accent} hover:underline`}
          >
            {task.link}
          </a>
        ) : (
          <span className="font-mono text-xs text-foreground/25 italic">Ссылка не добавлена</span>
        )}
      </div>

      {/* QR */}
      <div
        className={`flex items-center justify-center gap-2 rounded-lg border p-2 transition-colors group-hover:border-foreground/20 ${borderColor}`}
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <Icon name="QrCode" size={11} className="shrink-0 text-foreground/40" />
        {task.qr ? (
          <img src={task.qr} alt="QR" className="h-8 w-8 object-contain" />
        ) : (
          <span className="font-mono text-xs text-foreground/25 italic">QR не добавлен</span>
        )}
      </div>
    </div>
  )
}
