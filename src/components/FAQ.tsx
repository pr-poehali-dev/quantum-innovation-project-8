import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких районах Калининградской области вы строите?",
    answer:
      "Мы работаем по всему побережью Калининградской области: Светлогорск, Зеленоградск, Пионерский, Янтарный, Рыбачий и другие прибрежные посёлки. Знаем каждый участок и все особенности строительства у Балтийского моря.",
  },
  {
    question: "Сколько времени занимает строительство дома под ключ?",
    answer:
      "В среднем 8–14 месяцев от подписания договора до вручения ключей. Срок зависит от площади дома, сложности проекта и выбранных материалов. Мы фиксируем сроки в договоре и строго их соблюдаем.",
  },
  {
    question: "Какие материалы вы используете для строительства у моря?",
    answer:
      "Используем материалы, устойчивые к морской влажности и ветрам: качественный газобетон, кирпич, фасадные системы с защитными покрытиями. Деревянные элементы обрабатываем специальными составами для эксплуатации в морском климате.",
  },
  {
    question: "Что входит в строительство «под ключ»?",
    answer:
      "В стоимость включено: проектирование, получение всех разрешений, фундамент, коробка, кровля, инженерные системы (электрика, водоснабжение, отопление) и чистовая отделка. Вы въезжаете в готовый дом с мебелью на выбор.",
  },
  {
    question: "Можно ли купить участок у вас и сразу начать строительство?",
    answer:
      "Да, мы помогаем с подбором и покупкой участков в прибрежных посёлках. Знаем, какие земли подходят для строительства жилых домов, и подберём вариант под ваш бюджет и пожелания.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Позвоните или напишите нам — проведём бесплатную консультацию, обсудим ваши пожелания и бюджет. После этого подготовим предварительный проект и коммерческое предложение. Никаких обязательств до подписания договора.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}