import styles from "./page.module.css";
import { Navbar } from "@/components/navbar";

export default function CompInf() {
  const services = [
    {
      title: "Установка и настройка ПО",
      content: "Полный цикл работ с программным обеспечением для систем управления мультиплексорами РСМ801-ЮОН и MLink-PMX, включая установку, настройку и регулярное обновление."
    },
    {
      title: "Сопровождение и поддержка",
      content: "Комплексная техническая поддержка оборудования и ПО систем сетевого управления серии MLink, включая ремонт и обслуживание программно-аппаратных комплексов."
    },
    {
      title: "Диспетчерские решения",
      content: "Внедрение и сопровождение диспетчерского решения KONGS для крупнейших энергетических компаний России с полным циклом технической поддержки."
    },
    {
      title: "Экспертные услуги",
      content: "Проектирование телекоммуникационных систем для подстанций различного класса напряжения. Более 60 успешных проектов с 1000+ точками установки оборудования."
    },
    {
      title: "Модернизация и разработка",
      content: "Разработка специализированного ПО для диагностических комплексов энергетического оборудования, включая модернизацию существующих программных решений."
    },
    {
      title: "Обучение персонала",
      content: "Проведение обучающих программ для обслуживающего персонала по работе с телекоммуникационными системами и диспетчерским оборудованием."
    }
  ];

  const stats = [
    { number: "11+", label: "лет работы в отрасли" },
    { number: "60+", label: "реализованных крупных проектов" },
    { number: "1000+", label: "точек установки оборудования" },
    { number: "250+", label: "специалистов прошли обучение" }
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        {/* Заголовок компании */}
        <h1>ООО «ТТЦ Энергосервис»</h1>
        <h2>О компании</h2>
        
        {/* Основной контент */}
        <div className={styles.contentWrapper}>
        <article className={styles.article}>
          <p>Была создана в апреле 2011 года</p>
          <p>как комплексный системный интегратор,</p>
          <p>разработчик системы связи в сфере IT</p>
          <p>и реализации телекоммуникационных</p>
          <p>проектов в энергетическом секторе России.</p>
        </article>
        
        <div className={styles.rightText}>
          <h3>Основными направлениями деятельности нашей компании являются:</h3>
          <p>Производство и продажа телекоммуникационных систем,</p>
          <p>используемых в энергетической отрасли, а также выполнение</p>
          <p>шеф-монтажных и пусконаладочных работ для поставляемого</p>
          <p>технологического оборудования, проводим обучение</p>
          <p>обслуживающего персонала на высоком уровне.</p>
        </div>
      </div>

      {/* Секция с услугами */}
      <div className={styles.extendedSection}>
        <h2 className={styles.serviceHeader}>Наши услуги</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.tileContainer}>
              <div className={styles.tile}>
                <h3>{service.title}</h3>
                <p>{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Секция с достижениями В КОНЦЕ страницы */}
      <div className={styles.achievementsSection}>
        <div className={styles.achievementsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.achievementCard}>
              <div className={styles.achievementNumber}>{stat.number}</div>
              <div className={styles.achievementLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>
)
}