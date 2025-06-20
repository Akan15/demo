export const translations = {
  ru: {
    // Navigation
    about: "О департаменте",
    products: "Приложения",
    instructions: "Инструкции",
    faq: "FAQ",
    contact: "Обратная связь",

    // Hero Section
    heroTitle: "Цифровое правительство",
    heroSubtitle:
      "Инновационные решения для эффективного государственного управления и качественного обслуживания граждан",
    heroButton1: "Наши продукты",
    heroButton2: "Инструкции",

    // About Section
    aboutTitle: "О департаменте",
    aboutIntro: "Мы создаем цифровое будущее государственного управления",
    aboutText1:
      "Департамент информационных технологий занимается разработкой и внедрением современных цифровых решений для государственных органов Республики Казахстан.",
    aboutText2:
      "Мы успешно внедрили множество проектов, которые значительно улучшили качество предоставления государственных услуг и повысили эффективность работы государственных органов.",

    // Products Section
    productsTitle: "Наши продукты",
    productsIntro: "Инновационные мобильные решения для граждан и бизнеса",
    egovMobileTitle: "eGov Mobile",
    egovMobileDesc:
      "Мобильное приложение для получения государственных услуг на вашем смартфоне",
    egovBusinessTitle: "eGov Business",
    egovBusinessDesc:
      "Специализированное решение для бизнеса и предпринимателей",
    digitalDocsTitle: "Цифровые документы",
    digitalDocsDesc: "Безопасное хранение и управление цифровыми документами",
    appStore: "App Store",
    playMarket: "Play Market",
    learnMore: "Подробнее",

    // Instructions Section
    instructionsTitle: "Инструкции",
    videoGuidesTitle: "Видео-гайды",
    eGovMobileVideoTitle: "eGov Mobile",
    eGovBusinessVideoTitle: "eGov Business",
    checklistsTitle: "Чек-листы",
    registrationChecklistTitle: "Регистрация в системе",
    registrationSteps: [
      "Скачайте приложение eGov Mobile",
      "Введите ИИН",
      "Подтвердите номер телефона",
      "Создайте пароль",
    ],
    documentChecklistTitle: "Получение цифрового документа",
    documentSteps: [
      "Войдите в приложение",
      "Выберите нужную услугу",
      "Заполните необходимые данные",
      "Подтвердите запрос",
    ],
    downloadInstructions: "Скачать инструкции и чек-листы (PDF)",

    // FAQ Section
    faqTitle: "Часто задаваемые вопросы",
    faqSubtitle: "Ответы на популярные вопросы",
    faqs: [
      {
        question: "Как зарегистрироваться в системе?",
        answer:
          "Для регистрации вам необходимо скачать приложение eGov Mobile, ввести ИИН и подтвердить номер телефона. После этого вы сможете использовать все функции системы.",
      },
      {
        question: "Какие документы можно получить через приложение?",
        answer:
          "Через приложение вы можете получить различные справки, выписки и другие документы, такие как справка о составе семьи, выписка из земельного кадастра и другие.",
      },
      {
        question: "Как работает система безопасности?",
        answer:
          "Система использует современные методы шифрования и защиты данных. Все операции подтверждаются через SMS-код или ЭЦП.",
      },
      {
        question: "Можно ли использовать приложение за границей?",
        answer:
          "Да, приложение работает в любой точке мира, где есть доступ к интернету. Однако для некоторых услуг может потребоваться подтверждение через SMS.",
      },
      {
        question: "Что делать, если забыл пароль?",
        answer:
          'Вы можете восстановить пароль через функцию "Забыли пароль?", используя свой ИИН и номер телефона. Система отправит вам новый пароль через SMS.',
      },
    ],

    // Contact Section
    contactTitle: "Обратная связь",
    contactSubtitle: "Свяжитесь с нами",
    nameLabel: "Имя *",
    nameError: "Имя должно содержать только буквы",
    phoneLabel: "Телефон *",
    phoneError: "Неверный формат телефона",
    phonePlaceholder: "+7XXXXXXXXXX или 8XXXXXXXXXX",
    iinLabel: "ИИН *",
    iinError: "ИИН должен содержать ровно 12 цифр",
    messageLabel: "Сообщение",
    messageError: "Сообщение не должно превышать 300 символов",
    submitting: "Отправка...",
    submitButton: "Отправить",
    successMessage: "Спасибо! Ваша заявка отправлена.",
    errorMessage:
      "Произошла ошибка при отправке. Пожалуйста, попробуйте позже.",

    footer: {
      aboutTitle: "О нас",
      aboutText:
        "mGov — это мобильное приложение, которое предоставляет возможность получения государственных услуг и других сервисов через мобильный телефон в Казахстане.",
      contactTitle: "Связаться с нами",
      contactText:
        "Следите за нашими обновлениями в социальных сетях и используйте Telegram-бот для получения государственных услуг.",
      telegramBot: "Telegram-бот",
      telegramChannel: "Telegram-канал",
      rights: "Студенческий проект, июнь 2025",
      contactCenter: "Контакт-центр АО «НИТ»: +7 (7172) 701 999",
    },

    downloadMobileGuide: "Скачать инструкцию eGov Mobile (PDF)",
    downloadBusinessGuide: "Скачать инструкцию eGov Business (PDF)",

    timeline: {
      title: "История развития",
      showTimeline: "Показать историю",
      hideTimeline: "Скрыть историю",
      year2012: {
        title: "Запуск первого мобильного приложения mGov",
        description:
          "Прототип мобильного правительства. Основной функционал: получение базовых справок и уведомлений.",
      },
      year2019: {
        title: "Релиз нового приложения eGov Mobile",
        description:
          "Расширенные функции: цифровые документы, интеграция с ЭЦП, push-уведомления. mGov к 2019 году предоставлял около 70 госуслуг. После ребрендинга количество доступных услуг стало превышать 90% госуслуг. Приложение ежемесячно используют более 4 млн человек, ежедневно ~190 000. Компонент Цифровых документов использован более 13 млн раз; ЭЦП через QR – около 9 млн раз.",
      },
      year2020: {
        title: "Массовый переход на цифровые госуслуги",
        description:
          "Массовый переход на цифровые госуслуги в условиях пандемии. Запуск модуля «Цифровые документы» (удостоверение личности, свидетельства и пр.).",
      },
      year2021: {
        title: "Интеграция с банками и МФО",
        description: "Запуск бета-версий интеграций с банками и МФО.",
      },
      year2022: {
        title: "Внедрение Face ID и QR-входа",
        description:
          "Внедрение Face ID и QR-входа в eGov Mobile. Расширение количества цифровых документов (вод. удостоверение, студенческий билет). Разработка Telegram-бота для связи с пользователями.",
      },
      year2023: {
        title: "Внедрение сервиса «Распознавание дипломов»",
        description:
          "Внедрение сервиса «Распознавание дипломов». Улучшение UX/UI, адаптивность для всех типов устройств. Обновление архитектуры eGov Mobile под микросервисный подход.",
      },
      year2024: {
        title: "Интеграция с ИИ-платформами",
        description:
          "Углубление интеграции с ИИ-платформами (НПИ). Начало работы над визитной страницей ИС МГОВ и Telegram-инфраструктурой. После июля 2024 eGov Business расширил экосистему мобильного правительства, позволив юрлицам эффективно пол��чать госуслуги с мобильных устройств.",
      },
      year2025: {
        title: "Разработка новой визитной страницы",
        description:
          "Разработка новой визитной страницы. Интеграция сайта с Telegram-ботом. Подача заявок с сайта через API в рамках студенческого проекта.",
      },
    },

    notFound: {
      title: "Страница не найдена",
      message: "Извините, запрашиваемая страница не существует.",
      homeButton: "Вернуться на главную",
    },

    team: {
      title: "Команда MGOV",
      departments: {
        mgov: "Департамент мобильного правительства",
      },
      positions: {
        director: "Директор",
        projectManager: "Проектный менеджер",
        middleDeveloper: "Мидл разработчик",
        seniorAnalyst: "Старший аналитик",
        developer: "Разработчик",
        seniorIOSDeveloper: "Старший IOS разработчик",
        seniorAndroidDeveloper: "Старший Android разработчик",
        analyst: "Аналитик",
        manager: "Менеджер",
        seniorDesigner: "Старший UI/UX дизайнер",
        middleAnalyst: "Мидл аналитик",
        seniorManager: "Старший менеджер",
        middleIOSDeveloper: "Мидл IOS разработчик",
        qaEngineer: "QA инженер",
      },
    },

    statistics: {
      title: "Статистика",
      description:
        "Департамент «Мобильное правительство» активно внедряет цифровые решения для упрощения доступа граждан и бизнеса к государственным услугам. Ниже приведены ключевые показатели за 2025 год:",
      egovMobileUsers: "Пользователи приложения eGov Mobile",
      egovBusinessUsers: "Пользователи eGov Business",
      notificationsSent: "Отправлено уведомлений через систему",
      bmcRequests: "Обработано запросов через БМГ (базу мобильных граждан)",
      smsMessages: "Обработано сообщений через СМС-шлюз",
      digitalDocs: "Выдано цифровых документов",
      govServices: "Оказано государственных услуг через мобильные платформы",
      surveys: "Проведено пользовательских опросов",
      conclusion:
        "Эти данные подтверждают эффективность решений, реализуемых департаментом «Мобильное правительство», а также высокий уровень цифровизации взаимодействия государства с населением.",
    },

    topServices: {
      title: "ТОП-услуги недели",
      description:
        "Самые популярные и востребованные услуги на портале eGov Mobile",
      goToService: "Перейти к услуге",
      services: {
        criminalRecord: "Справка о несудимости",
        UAPF: "Информация о начислениях ЕНПФ с переводом",
        birthCertificates: "Получение свидетельства о рождении ребенка",
        pensionCertificates:
          "Получение справки о пенсионных отчислениях с переводом",
        f6Certificate: "Справка Ф-6 (о наличии недвижимости)",
        legalEntityCertificate:
          "Выдача справ��и о регистрации юридического лица",
      },
    },
  },
  kk: {
    // Navigation
    about: "Департамент туралы",
    products: "Қосымшалар",
    instructions: "Нұсқаулар",
    faq: "Жиі қойылатын сұрақтар",
    contact: "Кері байланыс",

    // Hero Section
    heroTitle: "Сандық үкімет",
    heroSubtitle:
      "Тиімді мемлекеттік басқару және азаматтарға сапалы қызмет көрсету үшін инновациялық шешімдер",
    heroButton1: "Біздің өнімдер",
    heroButton2: "Нұсқаулар",

    // About Section
    aboutTitle: "Департамент туралы",
    aboutIntro: "Біз мемлекеттік басқарудың сандық болашағын құрамыз",
    aboutText1:
      "Ақпараттық технологиялар департаменті Қазақстан Республикасының мемлекеттік органдары үшін заманауи сандық шешімдерді әзірлеумен және енгізумен айналысады.",
    aboutText2:
      "Біз мемлекеттік қызметтерді көрсету сапасын айтарлықтай жақсартқан және мемлекеттік органдардың жұмыс тиімділігін арттырған көптеген жобаларды сәтті енгіздік.",

    // Products Section
    productsTitle: "Біздің өнімдер",
    productsIntro: "Азаматтар мен бизнес үшін инновациялық мобильді шешімдер",
    egovMobileTitle: "eGov Mobile",
    egovMobileDesc:
      "Смартфоныңызда мемлекеттік қызметтерді алуға арналған мобильді қосымша",
    egovBusinessTitle: "eGov Business",
    egovBusinessDesc: "Бизнес және кәсіпкерлерге арналған арнайы шешім",
    digitalDocsTitle: "Сандық құжаттар",
    digitalDocsDesc: "Сандық құжаттарды қауіпсіз сақтау және басқару",
    appStore: "App Store",
    playMarket: "Play Market",
    learnMore: "Толығырақ",

    // Instructions Section
    instructionsTitle: "Нұсқаулар",
    videoGuidesTitle: "Бейне нұсқаулар",
    eGovMobileVideoTitle: "eGov Mobile",
    eGovBusinessVideoTitle: "Құжат алу жолы",
    checklistsTitle: "Тексеру тізімі",
    registrationChecklistTitle: "Жүйеге тіркелу",
    registrationSteps: [
      "eGov Mobile қосымшасын жүктеңіз",
      "ЖСН енгізіңіз",
      "Телефон нөірін растаңыз",
      "Құпия сөз жасаңыз",
    ],
    documentChecklistTitle: "Сандық құжат алу",
    documentSteps: [
      "Қосымшаға кіріңіз",
      "Қажетті қызметті таңдаңыз",
      "Қажетті мәліметтерді толтырыңыз",
      "Сұранысты растаңыз",
    ],
    downloadInstructions: "Нұсқаулар мен тексеру тізімін жүктеу (PDF)",

    // FAQ Section
    faqTitle: "Жиі қойылатын сұрақтар",
    faqSubtitle: "Жиі қойылатын сұрақтарға жауаптар",
    faqs: [
      {
        question: "Жүйеге қалай тіркелуге болады?",
        answer:
          "Тіркелу үшін eGov Mobile қосымшасын жүктеп, ЖСН енгізіп, телефон нөміріңізді растау керек. Осыдан кейін сіз жүйенің барлық функцияларын пайдалана аласыз.",
      },
      {
        question: "Қосымша арқылы қандай құжаттарды алуға болады?",
        answer:
          "Қосымша арқылы әртүрлі анықтамалар, шығарылымдар және басқа құжаттарды, мысалы, отбасы құрамы туралы анықтама, жер кадастрынан шығарылым және т.б. алуға болады.",
      },
      {
        question: "Қауіпсіздік жүйесі қалай жұмыс істейді?",
        answer:
          "Жүйе қазіргі заманғы шифрлеу және деректерді қорғау әдістерін қолданады. Барлық операциялар SMS-код немесе ЭЦҚ арқылы расталады.",
      },
      {
        question: "Қосымшаны шетелде пайдалануға бола ма?",
        answer:
          "Иә, қосымша интернетке қол жеткізу бар кез келген жерде жұмыс істейді. Дегенмен, кейбір қызметтер үшін SMS арқылы растау қажет болуы мүмкін.",
      },
      {
        question: "Құпия сөзді ұмытып қалсаңыз не істеу керек?",
        answer:
          'Сіз "Құпия сөзді ұмыттыңыз ба?" функциясы арқылы ЖСН және телефон нөміріңізді пайдаланып құпия сөзді қалпына келтіре аласыз. Жүйе сізге SMS арқылы жаңа құпия сөз жібереді.',
      },
    ],

    // Contact Section
    contactTitle: "Кері байланыс",
    contactSubtitle: "Бізбен байланысыңыз",
    nameLabel: "Аты-жөні *",
    nameError: "Аты-жөні тек әріптерден тұруы керек",
    phoneLabel: "Телефон *",
    phoneError: "Телефон нөмірінің пішімі дұрыс емес",
    phonePlaceholder: "+7XXXXXXXXXX немесе 8XXXXXXXXXX",
    iinLabel: "ЖСН *",
    iinError: "ЖСН 12 саннан тұруы керек",
    messageLabel: "Хабарлама",
    messageError: "Хабарлама 300 таңбадан аспауы керек",
    submitting: "Жіберілуде...",
    submitButton: "Жіберу",
    successMessage: "Рахмет! Сіздің өтінішіңіз жіберілді.",
    errorMessage:
      "Жіберу кезінде қате орын алды. Әрекетті кейінірек қайталаңыз.",

    footer: {
      aboutTitle: "Біз туралы",
      aboutText:
        "mGov — бұл Қазақстанда мобильді телефон арқылы мемлекеттік қызметтер мен басқа да сервистерді алу мүмкіндігін ұсынатын мобильді қосымша.",
      contactTitle: "Бізбен байланысу",
      contactText:
        "Әлеуметтік желілерде жаңартуларды қадағалаңыз және мемлекеттік қызметтерді алу үшін Telegram-ботты пайдаланыңыз.",
      telegramBot: "Telegram-бот",
      telegramChannel: "Telegram-канал",
      rights: "Студенттік жоба, маусым 2025",
      contactCenter: "«НИТ» АҚ хабарласу орталығы: +7 (7172) 701 999",
    },

    downloadMobileGuide: "eGov Mobile нұсқаулығын жүктеу (PDF)",
    downloadBusinessGuide: "eGov Business нұсқаулығын жүктеу (PDF)",

    timeline: {
      title: "Даму тарихы",
      showTimeline: "Тарихты көрсету",
      hideTimeline: "Тарихты жасыру",
      year2012: {
        title: "Бірінші mGov мобильді қосымшасын іске қосу",
        description:
          "Мобильді үкіметтің прототипі. Негізгі функциялар: негізгі анықтамалар мен хабарламаларды алу.",
      },
      year2019: {
        title: "Жаңа eGov Mobile қосымшасын шығару",
        description:
          "Кеңейтілген функциялар: сандық құжаттар, ЭЦҚ интеграциясы, push-хабарламалар. mGov 2019 жылға қарай шамамен 70 мемлекеттік қызметті ұсынды. Ребрендингтен кейін қолжетімді қызметтер саны 90% мемлекеттік қызметтерден асып түсті. Қосымшаны айына 4 миллионнан астам адам, күніне ~190 000 пайдаланады. Сандық құжаттар компоненті 13 миллионнан астам рет қолданылды; QR арқылы ЭЦҚ – шамамен 9 миллион рет.",
      },
      year2020: {
        title: "Сандық мемлекеттік қызметтерге көпшілік көшу",
        description:
          "Пандемия жағдайында сандық мемлекеттік қызметтерге көпшілік көшу. «Сандық құжаттар» модулін іске қосу (жеке куәлік, куәліктер және т.б.).",
      },
      year2021: {
        title: "Банктер мен ҚҚҚ интеграциясы",
        description:
          "Банктер мен ҚҚҚ интеграцияларының бета-нұсқаларын іске қосу.",
      },
      year2022: {
        title: "Face ID және QR-кіру енгізу",
        description:
          "eGov Mobile-ге Face ID және QR-кіруді енгізу. Сандық құжаттар санын кеңейту (жолық куәлік, студенттік билет). Пайдаланушылармен байланыс үшін Telegram-ботты әзірлеу.",
      },
      year2023: {
        title: "«Дипломдарды тану» сервисін енгізу",
        description:
          "«Дипломдарды тану» сервисін енгізу. UX/UI жақсарту, барлық құрылғы түрлеріне бейімделу. eGov Mobile архитектурасын микросервистік тәсілге сәйкес жаңарту.",
      },
      year2024: {
        title: "ЖасНТИ платформаларымен интеграция",
        description:
          "ЖасНТИ платформаларымен интеграцияны тереңдету. ММОЖ АЖ-ның визиттік беті және Telegram-инфрақұрылымы бойынша жұмысты бастау. 2024 жылдың шілдесінен кейін eGov Business заңды тұлғаларға мобильді құрылғылардан мемлекеттік қызметтерді тиімді алуға мүмкіндік беру арқылы мобильді үкімет ��кожүйесін кеңейтті.",
      },
      year2025: {
        title: "Жаңа визиттік бетті әзірлеу",
        description:
          "Жаңа визиттік бетті әзірлеу. Сайтты Telegram-ботпен интеграциялау. Студенттік жоба аясында API арқылы сайттан өтініштерді беру.",
      },
    },

    notFound: {
      title: "Бет табылмады",
      message: "Кешіріңіз, сұралған бет жоқ.",
      homeButton: "Басты бетке оралу",
    },

    team: {
      title: "MGOV Тобы",
      departments: {
        mgov: "Мобильді үкімет департаменті",
      },
      positions: {
        director: "Директор",
        projectManager: "Жоба менеджері",
        middleDeveloper: "Мидл әзірлеуші",
        seniorAnalyst: "Аға аналитик",
        developer: "Әзірлеуші",
        seniorIOSDeveloper: "Аға IOS әзірлеуші",
        seniorAndroidDeveloper: "Аға Android әзірлеуші",
        analyst: "Аналитик",
        manager: "Менеджер",
        seniorDesigner: "Аға UI/UX дизайнер",
        middleAnalyst: "Мидл аналитик",
        seniorManager: "Аға менеджер",
        middleIOSDeveloper: "Мидл IOS әзірлеуші",
        qaEngineer: "QA инженер",
      },
    },

    statistics: {
      title: "Статистика",
      description:
        "«Мобильді үкімет» департаменті азаматтар мен бизнес үшін мемлекеттік қызметтерге қол жеткізуді жеңілдетуге арналған сандық шешімдерді белсенді түрде енгізуде. Төменде 2025 жылғы негізгі көрсеткіштер келтірілген:",
      egovMobileUsers: "eGov Mobile қосымшасының пайдаланушылары",
      egovBusinessUsers: "eGov Business пайдаланушылары",
      notificationsSent: "Жүйе арқылы жіберілген хабарламалар",
      bmcRequests: "БМГ (мобильді азаматтар базасы) арқылы өңделген сұраныстар",
      smsMessages: "СМШ-шлюз арқылы өңделген хабарламалар",
      digitalDocs: "Берілген сандық құжаттар",
      govServices:
        "Мобильді платформалар арқылы көрсетілген мемлекеттік қызметтер",
      surveys: "Өткізілген пайдаланушылар сауалнамалары",
      conclusion:
        "Бұл деректер «Мобильді үкімет» департаменті жүзеге асыратын шешімдердің тиімділігін, сондай-ақ мемлекет пен халықтың өзара әрекеттестігінің сандықтандыру деңгейінің жоғары екенін растайды.",
    },

    topServices: {
      title: "Аптаның ТОП-қызметтері",
      description:
        "eGov Mobile порталындағы ең танымал және сұранысқа ие қызметтер",
      goToService: "Қызметке өту",
      services: {
        criminalRecord: "Теріс қылмыстық тіркеу туралы анықтама",
        UAPF: "ЕНПФ-дағы аударымдар туралы ақпарат",
        birthCertificates: "Ба��аның туу туралы куәлігін алу",
        pensionCertificates:
          "Зейнетақы аударымдары туралы анықтаманы алу және аудару",
        f6Certificate: "F-6 анықтамасы (жылжымайтын мүліктің бар-жоғы туралы)",
        legalEntityCertificate: "Заңды тұлғаны тіркеу туралы анықтама беру",
      },
    },
  },
  en: {
    // Navigation
    about: "About the department",
    products: "Applications",
    instructions: "Instructions",
    faq: "FAQ",
    contact: "Contact",

    // Hero Section
    heroTitle: "Digital Government",
    heroSubtitle:
      "Innovative solutions for effective public administration and quality citizen services",
    heroButton1: "Our Products",
    heroButton2: "Instructions",

    // About Section
    aboutTitle: "About the department",
    aboutIntro: "We create the digital future of public administration",
    aboutText1:
      "The Information Technology Department is engaged in developing and implementing modern digital solutions for government agencies of the Republic of Kazakhstan.",
    aboutText2:
      "We have successfully implemented numerous projects that have significantly improved the quality of public service delivery and increased the efficiency of government agencies.",

    // Products Section
    productsTitle: "Our Products",
    productsIntro: "Innovative mobile solutions for citizens and business",
    egovMobileTitle: "eGov Mobile",
    egovMobileDesc:
      "Mobile application for receiving government services on your smartphone",
    egovBusinessTitle: "eGov Business",
    egovBusinessDesc: "Specialized solution for businesses and entrepreneurs",
    digitalDocsTitle: "Digital Documents",
    digitalDocsDesc: "Secure storage and management of digital documents",
    appStore: "App Store",
    playMarket: "Play Market",
    learnMore: "Learn More",

    // Instructions Section
    instructionsTitle: "Instructions",
    videoGuidesTitle: "Video Guides",
    eGovMobileVideoTitle: "eGov Mobile",
    eGovBusinessVideoTitle: "eGov Business",
    checklistsTitle: "Checklists",
    registrationChecklistTitle: "System Registration",
    registrationSteps: [
      "Download eGov Mobile app",
      "Enter IIN",
      "Verify phone number",
      "Create password",
    ],
    documentChecklistTitle: "Getting Digital Document",
    documentSteps: [
      "Log in to the app",
      "Select required service",
      "Fill in necessary data",
      "Confirm request",
    ],
    downloadInstructions: "Download instructions and checklists (PDF)",

    // FAQ Section
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Answers to popular questions",
    faqs: [
      {
        question: "How to register in the system?",
        answer:
          "To register, you need to download the eGov Mobile app, enter your IIN, and verify your phone number. After that, you can use all system functions.",
      },
      {
        question: "What documents can be obtained through the app?",
        answer:
          "Through the app, you can get various certificates, extracts, and other documents, such as family composition certificate, land cadastre extract, and others.",
      },
      {
        question: "How does the security system work?",
        answer:
          "The system uses modern encryption and data protection methods. All operations are confirmed via SMS code or digital signature.",
      },
      {
        question: "Can the app be used abroad?",
        answer:
          "Yes, the app works anywhere in the world where there is internet access. However, some services may require SMS verification.",
      },
      {
        question: "What to do if you forgot your password?",
        answer:
          'You can recover your password through the "Forgot Password?" function using your IIN and phone number. The system will send you a new password via SMS.',
      },
    ],

    // Contact Section
    contactTitle: "Contact Us",
    contactSubtitle: "Get in touch with us",
    nameLabel: "Name *",
    nameError: "Name should contain only letters",
    phoneLabel: "Phone *",
    phoneError: "Invalid phone format",
    phonePlaceholder: "+7XXXXXXXXXX or 8XXXXXXXXXX",
    iinLabel: "IIN *",
    iinError: "IIN must contain exactly 12 digits",
    messageLabel: "Message",
    messageError: "Message should not exceed 300 characters",
    submitting: "Submitting...",
    submitButton: "Submit",
    successMessage: "Thank you! Your request has been sent.",
    errorMessage: "An error occurred while sending. Please try again later.",

    footer: {
      aboutTitle: "About Us",
      aboutText:
        "mGov is a mobile application that provides access to government services and other services through mobile phones in Kazakhstan.",
      contactTitle: "Contact Us",
      contactText:
        "Follow our updates on social networks and use the Telegram bot to receive government services.",
      telegramBot: "Telegram Bot",
      telegramChannel: "Telegram Channel",
      rights: "Student Project, June 2025",
      contactCenter: "NIT JSC Contact Center: +7 (7172) 701 999",
    },

    downloadMobileGuide: "Download eGov Mobile Guide (PDF)",
    downloadBusinessGuide: "Download eGov Business Guide (PDF)",

    timeline: {
      title: "Development History",
      showTimeline: "Show History",
      hideTimeline: "Hide History",
      year2012: {
        title: "Launch of first mGov mobile application",
        description:
          "Mobile government prototype. Main functionality: receiving basic certificates and notifications.",
      },
      year2019: {
        title: "Release of new eGov Mobile app",
        description:
          "Enhanced features: digital documents, digital signature integration, push notifications. mGov provided about 70 government services by 2019. After rebranding, the number of available services exceeded 90% of government services. The app is used by over 4 million people monthly, ~190,000 daily. Digital Documents component used over 13 million times; digital signature via QR – about 9 million times.",
      },
      year2020: {
        title: "Mass transition to digital government services",
        description:
          'Mass transition to digital government services during the pandemic. Launch of "Digital Documents" module (ID card, certificates, etc.).',
      },
      year2021: {
        title: "Integration with banks and MFIs",
        description:
          "Launch of beta versions of integrations with banks and MFIs.",
      },
      year2022: {
        title: "Implementation of Face ID and QR login",
        description:
          "Implementation of Face ID and QR login in eGov Mobile. Expansion of digital documents (driver's license, student ID). Development of Telegram bot for user communication.",
      },
      year2023: {
        title: 'Implementation of "Diploma Recognition" service',
        description:
          'Implementation of "Diploma Recognition" service. UX/UI improvements, adaptability for all device types. Update of eGov Mobile architecture to microservice approach.',
      },
      year2024: {
        title: "Integration with AI platforms",
        description:
          "Deepening integration with AI platforms (NPI). Start of work on mGov IS landing page and Telegram infrastructure. After July 2024, eGov Business expanded the mobile government ecosystem, allowing legal entities to efficiently receive government services from mobile devices.",
      },
      year2025: {
        title: "Development of new landing page",
        description:
          "Development of new landing page. Integration of the site with Telegram bot. Submission of applications from the site through API as part of a student project.",
      },
    },

    notFound: {
      title: "Page Not Found",
      message: "Sorry, the requested page does not exist.",
      homeButton: "Return to Home",
    },

    team: {
      title: "MGOV Team",
      departments: {
        mgov: "Mobile Government Department",
      },
      positions: {
        director: "Director",
        projectManager: "Project Manager",
        middleDeveloper: "Middle Developer",
        seniorAnalyst: "Senior Analyst",
        developer: "Developer",
        seniorIOSDeveloper: "Senior IOS Developer",
        seniorAndroidDeveloper: "Senior Android Developer",
        analyst: "Analyst",
        manager: "Manager",
        seniorDesigner: "Senior UI/UX Designer",
        middleAnalyst: "Middle Analyst",
        seniorManager: "Senior Manager",
        middleIOSDeveloper: "Middle IOS Developer",
        qaEngineer: "QA Engineer",
      },
    },

    statistics: {
      title: "Statistics",
      description:
        "The Mobile Government Department actively implements digital solutions to simplify access to government services for citizens and businesses. Below are the key indicators for 2025:",
      egovMobileUsers: "eGov Mobile App Users",
      egovBusinessUsers: "eGov Business Users",
      notificationsSent: "Notifications Sent Through the System",
      bmcRequests: "Requests Processed Through BMC (Base of Mobile Citizens)",
      smsMessages: "Messages Processed Through SMS Gateway",
      digitalDocs: "Digital Documents Issued",
      govServices: "Government Services Provided Through Mobile Platforms",
      surveys: "User Surveys Conducted",
      conclusion:
        "These data confirm the effectiveness of solutions implemented by the Mobile Government Department, as well as the high level of digitalization in government-citizen interaction.",
    },

    topServices: {
      title: "Top Services of the Week",
      description:
        "Most popular and in-demand services on the eGov Mobile portal",
      goToService: "Go to Service",
      services: {
        criminalRecord: "Criminal Record Certificate",
        UAPF: "ENPF Contributions Information with Transfer",
        birthCertificates: "Obtaining a childs birth certificate",
        pensionCertificates:
          "Obtaining a certificate of pension contributions with transfer",
        f6Certificate: "Certificate F-6 (on real estate ownership)",
        legalEntityCertificate:
          "Issuance of a certificate of legal entity registration",
      },
    },
  },
};
