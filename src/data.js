/**
 * Portfolio veri kaynağı — CV/PDF içeriğinden türetilmiştir.
 * Skills matrix bağlamı: usedIn ile hangi proje/deneyimde kullanıldığı gösterilir.
 * Güncellemek için bu dosyayı düzenleyin.
 */
export const data = {
  // ——— Hero & Kişisel ———
  person: {
    name: 'Tarık Buğra Özcan',
    title: 'Full Stack Developer (Python, Node.js, React)',
    location: 'Istanbul, Türkiye',
    valueProposition: 'AI destekli hukuk teknolojisi platformları geliştiren, web scraping ve büyük ölçekli veri işleme pipeline\'larında uzman; Elasticsearch tabanlı arama sistemleri ve ölçeklenebilir, sürdürülebilir sistemler tasarlayan Full Stack Developer.',
    email: 'ozcantarkbugra@gmail.com',
    phone: '+90 545 550 50 02',
    linkedin: 'https://linkedin.com/in/ozcantarkbugra',
    github: 'https://github.com/ozcantarkbugra',
    cta: {
      primary: 'Projeleri İncele',
      secondary: 'İletişime Geç',
    },
  },

  // ——— Profesyonel Özet ———
  summary:
    'AI destekli hukuk teknolojisi platformları geliştiren 2+ yıl deneyime sahip Full Stack Developer. Python ve Node.js ile backend geliştirmede güçlü bir geçmişe sahip, React.js ile frontend deneyimi birleştiriyorum. Web scraping, büyük ölçekli veri işleme pipeline\'ları ve Elasticsearch ile güçlendirilmiş arama sistemlerinde uzmanlaştım. 1 yıldan fazla süredir açık kaynak platformlardan veri toplama, ham veri setlerini dönüştürme ve normalleştirme, yapılandırılmış verileri PostgreSQL, MongoDB ve Elasticsearch\'te saklama deneyimim var. Ölçeklenebilir, sürdürülebilir sistemler tasarlama ve işbirlikçi ekip ortamlarında production-grade uygulamalara katkıda bulunma konusunda deneyimliyim.',

  // ——— Core Skills showcase: tier + detail (açılan panelde gösterilir) ———
  coreSkillsShowcase: [
    {
      name: 'Python',
      tier: 'primary',
      detail: {
        what: ['Backend servis geliştirme ve bakımı', 'Web scraping ve veri işleme pipeline\'ları', 'Büyük ölçekli veri setlerini işleme ve normalleştirme'],
        experience: 'NEW MIND\'da 2+ yıl AI destekli hukuk teknolojisi platformları için Python ile backend servisler geliştirdim. Scrapy, BeautifulSoup, Selenium ile web scraping pipeline\'ları tasarladım ve büyük ölçekli veri işleme sistemleri kurduk.',
      },
    },
    {
      name: 'React',
      tier: 'primary',
      detail: {
        what: ['AI destekli hukuk teknolojisi platformları için frontend geliştirme', 'RESTful API entegrasyonları', 'Kullanıcı arayüzü ve etkileşim tasarımı'],
        experience: 'NEW MIND\'da React.js ile frontend geliştirme deneyimi. Backend servislerle entegre edilmiş, production-grade uygulamalara katkıda bulundum.',
      },
    },
    {
      name: 'Node.js',
      tier: 'secondary',
      detail: {
        what: ['NestJS ve Express ile backend servis geliştirme', 'RESTful API tasarımı ve dokümantasyonu', 'JWT ve Authentication sistemleri'],
        experience: 'NEW MIND\'da Node.js (NestJS, Express) ile backend servisler geliştirdim. RESTful API\'ler tasarladım ve React.js tabanlı frontend uygulamalarla entegre ettim.',
      },
    },
    {
      name: 'Elasticsearch',
      tier: 'secondary',
      detail: {
        what: ['Full-text search ve filtreleme özellikleri', 'Hukuki belgeler için indeksleme sistemleri', 'Hızlı ve ölçeklenebilir arama çözümleri'],
        experience: 'NEW MIND\'da Elasticsearch tabanlı full-text search, filtreleme ve indeksleme özellikleri geliştirdim. Hukuki belgeler için hızlı ve ölçeklenebilir arama sistemleri kurduk.',
      },
    },
    {
      name: 'Web Scraping',
      tier: 'secondary',
      detail: {
        what: ['Scrapy, BeautifulSoup, Selenium ile otomatik veri toplama', 'Açık kaynak platformlardan veri çıkarma', 'Özelleştirilmiş scraping script\'leri'],
        experience: '1+ yıl deneyimle açık kaynak platformlardan hukuki belgeler topladım. Scrapy, BeautifulSoup, Selenium ve özel script\'ler kullanarak otomatik web scraping ve veri çıkarma pipeline\'ları tasarladım.',
      },
    },
    {
      name: 'PostgreSQL',
      tier: 'secondary',
      detail: {
        what: ['Veritabanı yönetimi ve optimizasyonu', 'Veri modelleme ve indeksleme', 'Performans tuning ve sorgu optimizasyonu'],
        experience: 'NEW MIND\'da PostgreSQL veritabanlarını yönettim ve optimize ettim. Veri modelleme, indeksleme ve performans tuning konularında deneyim kazandım.',
      },
    },
    {
      name: 'MongoDB',
      tier: 'secondary',
      detail: {
        what: ['NoSQL veritabanı yönetimi', 'Yapılandırılmış veri saklama', 'Veri dönüştürme ve normalleştirme'],
        experience: 'NEW MIND\'da MongoDB ile yapılandırılmış verileri sakladım. Ham veri setlerini dönüştürüp normalleştirerek veritabanına kaydettim.',
      },
    },
    {
      name: 'Docker',
      tier: 'secondary',
      detail: {
        what: ['Backend servisleri containerize etme', 'Veri pipeline\'larını containerize etme', 'Linux sistemlerinde deployment'],
        experience: 'NEW MIND\'da backend servisleri ve veri pipeline\'larını Docker ile containerize ettim. Linux sistemlerinde deployment ve ortam tutarlılığını sağladım.',
      },
    },
    {
      name: 'Apache Kafka',
      tier: 'secondary',
      detail: {
        what: ['Producer ve consumer servisleri geliştirme', 'Asenkron, event-driven veri işleme', 'Fault-tolerant ve ölçeklenebilir mesaj işleme'],
        experience: 'NEW MIND\'da Apache Kafka producer ve consumer servisleri geliştirdim. Asenkron, event-driven veri işleme sistemleri kurduk. Kafka topic\'leri, partition\'lar ve consumer group\'lar kullanarak hata toleranslı ve ölçeklenebilir mesaj işleme sağladım.',
      },
    },
    {
      name: 'n8n',
      tier: 'secondary',
      detail: {
        what: ['Otomasyon workflow\'ları tasarlama', 'Web scraping, API çağrıları ve veri dönüştürme', 'Zamanlanmış ve izlenen veri pipeline\'ları'],
        experience: 'NEW MIND\'da n8n ile otomasyon workflow\'ları oluşturdum. Web scraping, API çağrıları, veri dönüştürme ve veritabanı işlemlerini orkestre ettim. Linux ve Docker tabanlı ortamlarda n8n örneklerini yükledim ve yapılandırdım.',
      },
    },
    {
      name: 'Next.js',
      tier: 'secondary',
      detail: {
        what: ['Full-stack React uygulamaları', 'SSR ve performans optimizasyonu', 'API routes ve sayfa mimarisi'],
        experience: 'Next.js ile full-stack React uygulamaları geliştirme deneyimi. SSR ve performans optimizasyonu konularında çalıştım.',
      },
    },
    {
      name: 'TypeScript',
      tier: 'secondary',
      detail: {
        what: ['Tip güvenli kod geliştirme', 'API ve state modelleri', 'Frontend ve backend kod paylaşımı'],
        experience: 'TypeScript ile tip güvenli kod geliştirme. Frontend ve backend projelerinde TypeScript kullanarak daha sürdürülebilir kod yazdım.',
      },
    },
    {
      name: 'Redis',
      tier: 'supporting',
      detail: {
        what: ['Cache stratejileri', 'Session yönetimi', 'Performans optimizasyonu'],
        experience: 'Redis ile cache stratejileri ve performans optimizasyonu. Backend servislerde Redis kullanarak veri erişim hızını artırdım.',
      },
    },
    {
      name: 'Data Processing',
      tier: 'supporting',
      detail: {
        what: ['Pandas ve NumPy ile veri analizi', 'Yüksek hacimli veri setlerini işleme', 'Veri temizleme ve normalleştirme'],
        experience: 'Pandas ve NumPy ile veri işleme ve analiz. Yüksek hacimli veri setlerini işleyip, temizleyip normalleştirdim.',
      },
    },
    {
      name: 'Git & GitHub',
      tier: 'supporting',
      detail: {
        what: ['Versiyon kontrolü', 'Kod paylaşımı ve işbirliği', 'CI/CD entegrasyonları'],
        experience: 'Git ve GitHub ile versiyon kontrolü ve kod paylaşımı. Ekip ortamlarında işbirlikçi geliştirme yaptım.',
      },
    },
    {
      name: 'Nginx',
      tier: 'supporting',
      detail: {
        what: ['Reverse proxy yapılandırması', 'Load balancing', 'Web sunucu yönetimi'],
        experience: 'Nginx ile reverse proxy ve web sunucu yönetimi. Production ortamlarında Nginx yapılandırması yaptım.',
      },
    },
    {
      name: 'REST APIs',
      tier: 'supporting',
      detail: {
        what: ['RESTful API tasarımı ve geliştirme', 'API dokümantasyonu', 'Backend-frontend entegrasyonu'],
        experience: 'RESTful API\'ler tasarladım ve dokümante ettim. Backend servisleri React.js tabanlı frontend uygulamalarla entegre ettim.',
      },
    },
    {
      name: 'JWT & Auth',
      tier: 'supporting',
      detail: {
        what: ['JWT tabanlı kimlik doğrulama', 'Güvenli authentication sistemleri', 'Kullanıcı yetkilendirme'],
        experience: 'JWT ve authentication sistemleri geliştirdim. Güvenli kullanıcı kimlik doğrulama ve yetkilendirme mekanizmaları kurduk.',
      },
    },
    {
      name: 'System Design',
      tier: 'supporting',
      detail: {
        what: ['Ölçeklenebilir sistem tasarımı', 'Sürdürülebilir mimari', 'Production-grade uygulamalar'],
        experience: 'Ölçeklenebilir, sürdürülebilir sistemler tasarladım. Production-grade uygulamalara katkıda bulundum ve işbirlikçi ekip ortamlarında çalıştım.',
      },
    },
    {
      name: 'Diğer',
      tier: 'supporting',
      detail: {
        what: [
          'HTML5, CSS3, Bootstrap — frontend teknolojileri',
          'Linux, Windows — işletim sistemleri',
          'GitLab — versiyon kontrolü',
          'Veri pipeline\'ları ve ETL süreçleri',
          'Kod incelemeleri ve teknik dokümantasyon',
        ],
        experience: 'Yukarıdaki teknolojiler ve pratiklerle çalıştım. Detaylar için ilgili skill kartlarına bakabilirsin.',
      },
    },
  ],

  // ——— Teknik Uzmanlık (Skills Matrix: usedIn = proje/deneyim bağlamı) ———
  // usedIn: { projects: ['id'], experience: ['id'] }
  skills: {
    core: [
      { name: 'Python', level: 'expert', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Node.js (NestJS, Express)', level: 'expert', usedIn: { projects: [], experience: ['1'] } },
      { name: 'React.js', level: 'expert', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Next.js', level: 'advanced', usedIn: { projects: [], experience: ['1'] } },
      { name: 'JavaScript & TypeScript', level: 'expert', usedIn: { projects: [], experience: ['1'] } },
      { name: 'REST APIs', level: 'expert', usedIn: { projects: [], experience: ['1'] } },
      { name: 'JWT & Authentication', level: 'expert', usedIn: { projects: [], experience: ['1'] } },
      { name: 'PostgreSQL', level: 'advanced', usedIn: { projects: [], experience: ['1'] } },
      { name: 'MongoDB', level: 'advanced', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Elasticsearch', level: 'advanced', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Redis', level: 'advanced', usedIn: { projects: [], experience: ['1'] } },
    ],
    tools: [
      { name: 'Web Scraping (Scrapy, BeautifulSoup, Selenium)', level: 'expert', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Data Processing (Pandas, NumPy)', level: 'advanced', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Docker', level: 'advanced', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Apache Kafka', level: 'advanced', usedIn: { projects: [], experience: ['1'] } },
      { name: 'n8n', level: 'advanced', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Git, GitHub, GitLab', level: 'expert', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Nginx', level: 'intermediate', usedIn: { projects: [], experience: ['1'] } },
      { name: 'HTML5, CSS3, Bootstrap', level: 'expert', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Linux & Windows', level: 'advanced', usedIn: { projects: [], experience: ['1'] } },
    ],
    soft: [
      { name: 'System Design', level: 'advanced', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Data Pipeline Design', level: 'expert', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Code Review', level: 'advanced', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Technical Documentation', level: 'advanced', usedIn: { projects: [], experience: ['1'] } },
      { name: 'Collaborative Development', level: 'expert', usedIn: { projects: [], experience: ['1'] } },
    ],
  },

  // ——— Deneyim Zaman Çizelgesi (year = filtre için) ———
  experience: [
    {
      id: '1',
      company: 'NEW MIND',
      role: 'Full Stack Developer',
      period: 'May 2023 — Oca 2026',
      periodShort: '2+ yıl',
      year: 2023,
      highlights: [
        'AI destekli hukuk teknolojisi platformları için Python ve Node.js ile backend servisler geliştirdim ve sürdürdüm; production ortamlarında büyük ölçekli hukuki veri setlerini işledim.',
        'Scrapy, BeautifulSoup, Selenium ve özel script\'ler kullanarak açık kaynak platformlardan hukuki belgeleri toplayan otomatik web scraping ve veri çıkarma pipeline\'ları tasarladım ve geliştirdim.',
        'Yüksek hacimli veri setlerini işleyip, temizleyip normalleştirerek veri tutarlılığı, doğruluğu ve kullanılabilirliğini sağladım; analitik ve arama sistemleri için hazır hale getirdim.',
        'Elasticsearch tabanlı full-text search, filtreleme ve indeksleme özellikleri geliştirdim; hukuki belgelere hızlı ve ölçeklenebilir erişim sağladım.',
        'RESTful API\'ler geliştirdim ve dokümante ettim; backend servisleri React.js tabanlı frontend uygulamalarla entegre ettim.',
        'PostgreSQL ve MongoDB veritabanlarını yönettim ve optimize ettim; veri modelleme, indeksleme ve performans tuning yaptım.',
        'Docker ile backend servisleri ve veri pipeline\'larını containerize ettim; Linux sistemlerinde deployment ve ortam tutarlılığını sağladım.',
        '1+ yıl süredir production ortamında veri alım pipeline\'larını tasarladım ve sürdürdüm; sürekli veri toplama ve işleme workflow\'larını yönettim.',
        'n8n ile web scraping, API çağrıları, veri dönüştürme ve veritabanı işlemlerini orkestre eden otomasyon workflow\'ları oluşturdum.',
        'Linux ve Docker tabanlı ortamlarda n8n örneklerini yükledim, yapılandırdım ve sürdürdüm; zamanlanmış ve izlenen veri pipeline\'ları kurduk.',
        'Apache Kafka producer ve consumer servisleri geliştirdim; scraping servisleri, backend sistemler ve downstream consumer\'lar arasında asenkron, event-driven veri işlemeyi sağladım.',
        'Yeni alınan ve işlenen veriler için Kafka mesajları ürettim; mesajları tüketerek veri indeksleme, dönüştürme ve kalıcılık workflow\'larını tetikledim.',
        'Kafka topic\'leri, partition\'lar ve consumer group\'lar kullanarak hata toleranslı ve ölçeklenebilir mesaj işleme sağladım.',
        'Kafka tabanlı pipeline\'ları PostgreSQL, MongoDB ve Elasticsearch ile entegre ettim; gerçek zamanlı ve batch veri işleme kullanım senaryolarını destekledim.',
      ],
    },
  ],

  education: [
    { degree: 'BSc, Yönetim Bilişim Sistemleri (Devam Ediyor)', school: 'Anadolu Üniversitesi', period: 'Eyl 2023 – Haz 2027' },
    { degree: 'Full Stack Developer Eğitimi', school: 'Bahçeşehir Üniversitesi (Wissen Academy)', period: 'Kas 2022 – Haz 2023' },
    { degree: 'BSc, İnşaat Mühendisliği', school: 'Kahramanmaraş Sütçü İmam Üniversitesi', period: 'Eyl 2018 – Tem 2021 | GPA: 2.85' },
  ],

  // ——— Projeler (tag'lere göre filtre; image opsiyonel) ———
  projects: [
    {
      id: '1',
      title: 'AI Destekli Hukuk Teknolojisi Platformu',
      description: 'NEW MIND\'da geliştirdiğim AI destekli hukuk teknolojisi platformu. Büyük ölçekli hukuki veri setlerini işleyen, Elasticsearch tabanlı arama sistemleri içeren full-stack uygulama.',
      longDescription: 'Python ve Node.js ile backend servisler, React.js ile frontend geliştirme. Web scraping pipeline\'ları, veri işleme ve normalleştirme sistemleri. Elasticsearch ile full-text search ve filtreleme özellikleri.',
      tags: ['Python', 'Node.js', 'React', 'Elasticsearch', 'PostgreSQL', 'MongoDB'],
      github: null,
      demo: null,
      image: null,
    },
    {
      id: '2',
      title: 'Otomatik Veri Toplama ve İşleme Pipeline\'ı',
      description: 'Açık kaynak platformlardan hukuki belgeleri toplayan, işleyen ve normalleştiren otomatik veri pipeline sistemi. Scrapy, BeautifulSoup, Selenium ve n8n kullanılarak geliştirildi.',
      longDescription: 'Web scraping ve veri çıkarma pipeline\'ları. Kafka ile event-driven veri işleme. PostgreSQL, MongoDB ve Elasticsearch entegrasyonları. 1+ yıl production ortamında sürekli veri toplama ve işleme.',
      tags: ['Python', 'Scrapy', 'BeautifulSoup', 'Selenium', 'Kafka', 'n8n', 'Docker'],
      github: null,
      demo: null,
      image: null,
    },
    {
      id: '3',
      title: 'Mecellem',
      description: 'mecellem.com üzerinde yer alan hukuk ve kurumsal yönetim SPA uygulamaları. Uyum yönetimi, risk analizi, hukuki içgörüler; 36+ ürün ve 300+ orkestrasyon modeli.',
      longDescription: 'Hukuk alanına özel platform; mevzuata uyumlu kararlar için uyum yönetimi, risk analizi ve hukuki içgörüler. Muamelat modülü ile karmaşık hukuki işlemlerin yönetimi. Next.js, React ve TypeScript ile geliştirilmiş SPA mimarisi.',
      tags: ['Next.js', 'React', 'TypeScript', 'SPA', 'Legal Tech'],
      github: null,
      demo: 'https://mecellem.com/en',
      image: null,
    },
  ],

  // ——— İletişim formu (serverless: Formspree / GitHub Actions / custom endpoint) ———
  contact: {
    // Örnek: 'https://formspree.io/f/xxxxx' veya GitHub Actions ile form-data endpoint
    formEndpoint: '',
    successMessage: 'Mesajınız alındı, en kısa sürede dönüş yapacağım.',
    fields: { name: 'Ad Soyad', email: 'E-posta', message: 'Mesaj' },
  },
}

// ——— English locale: same structure, English text ———
export const dataEn = {
  person: {
    name: 'Tarık Buğra Özcan',
    title: 'Full Stack Developer (Python, Node.js, React)',
    location: 'Istanbul, Turkey',
    valueProposition: 'Full Stack Developer building AI-assisted legal technology platforms, specializing in web scraping and large-scale data processing pipelines; designing Elasticsearch-based search systems and scalable, maintainable systems.',
    email: 'ozcantarkbugra@gmail.com',
    phone: '+90 545 550 50 02',
    linkedin: 'https://linkedin.com/in/ozcantarkbugra',
    github: 'https://github.com/ozcantarkbugra',
    cta: {
      primary: 'View Projects',
      secondary: 'Get in Touch',
    },
  },
  summary:
    'Full Stack Developer with 2+ years of experience building AI-assisted legal technology platforms. Strong background in backend development using Python and Node.js, combined with hands-on frontend experience in React.js. Specialized in web scraping, large-scale data processing pipelines, and search systems powered by Elasticsearch. Over 1 year of experience collecting data from open-source platforms, transforming and normalizing raw datasets, and storing structured data in PostgreSQL, MongoDB, and Elasticsearch. Experienced in designing scalable, maintainable systems and contributing to production-grade applications in collaborative team environments.',

  coreSkillsShowcase: [
    {
      name: 'Python',
      tier: 'primary',
      detail: {
        what: ['Backend service development and maintenance', 'Web scraping and data processing pipelines', 'Processing and normalizing large-scale datasets'],
        experience: '2+ years developing Python backend services for AI-assisted legal technology platforms at NEW MIND. Designed web scraping pipelines using Scrapy, BeautifulSoup, Selenium, and built large-scale data processing systems.',
      },
    },
    {
      name: 'React',
      tier: 'primary',
      detail: {
        what: ['Frontend development for AI-assisted legal technology platforms', 'RESTful API integrations', 'User interface and interaction design'],
        experience: 'Frontend development experience with React.js at NEW MIND. Contributed to production-grade applications integrated with backend services.',
      },
    },
    {
      name: 'Node.js',
      tier: 'secondary',
      detail: {
        what: ['Backend service development with NestJS and Express', 'RESTful API design and documentation', 'JWT and Authentication systems'],
        experience: 'Developed backend services with Node.js (NestJS, Express) at NEW MIND. Designed RESTful APIs and integrated them with React.js-based frontend applications.',
      },
    },
    {
      name: 'Elasticsearch',
      tier: 'secondary',
      detail: {
        what: ['Full-text search and filtering features', 'Indexing systems for legal documents', 'Fast and scalable search solutions'],
        experience: 'Developed Elasticsearch-based full-text search, filtering, and indexing features at NEW MIND. Built fast and scalable search systems for legal documents.',
      },
    },
    {
      name: 'Web Scraping',
      tier: 'secondary',
      detail: {
        what: ['Automated data collection with Scrapy, BeautifulSoup, Selenium', 'Data extraction from open-source platforms', 'Custom scraping scripts'],
        experience: '1+ years of experience collecting legal documents from open-source platforms. Designed automated web scraping and data extraction pipelines using Scrapy, BeautifulSoup, Selenium, and custom scripts.',
      },
    },
    {
      name: 'PostgreSQL',
      tier: 'secondary',
      detail: {
        what: ['Database management and optimization', 'Data modeling and indexing', 'Performance tuning and query optimization'],
        experience: 'Managed and optimized PostgreSQL databases at NEW MIND. Gained experience in data modeling, indexing, and performance tuning.',
      },
    },
    {
      name: 'MongoDB',
      tier: 'secondary',
      detail: {
        what: ['NoSQL database management', 'Structured data storage', 'Data transformation and normalization'],
        experience: 'Stored structured data with MongoDB at NEW MIND. Transformed and normalized raw datasets before storing them in the database.',
      },
    },
    {
      name: 'Docker',
      tier: 'secondary',
      detail: {
        what: ['Containerizing backend services', 'Containerizing data pipelines', 'Deployment on Linux systems'],
        experience: 'Containerized backend services and data pipelines with Docker at NEW MIND. Ensured deployment and environment consistency across Linux systems.',
      },
    },
    {
      name: 'Apache Kafka',
      tier: 'secondary',
      detail: {
        what: ['Developing producer and consumer services', 'Asynchronous, event-driven data processing', 'Fault-tolerant and scalable message processing'],
        experience: 'Developed Apache Kafka producer and consumer services at NEW MIND. Built asynchronous, event-driven data processing systems. Ensured fault-tolerant and scalable message processing using Kafka topics, partitions, and consumer groups.',
      },
    },
    {
      name: 'n8n',
      tier: 'secondary',
      detail: {
        what: ['Designing automation workflows', 'Web scraping, API calls, and data transformation', 'Scheduled and monitored data pipelines'],
        experience: 'Created automation workflows with n8n at NEW MIND. Orchestrated web scraping, API calls, data transformation, and database operations. Installed and configured n8n instances in Linux and Docker-based environments.',
      },
    },
    {
      name: 'Next.js',
      tier: 'secondary',
      detail: {
        what: ['Full-stack React applications', 'SSR and performance optimization', 'API routes and page architecture'],
        experience: 'Full-stack React application development experience with Next.js. Worked on SSR and performance optimization.',
      },
    },
    {
      name: 'TypeScript',
      tier: 'secondary',
      detail: {
        what: ['Type-safe code development', 'API and state models', 'Frontend and backend code sharing'],
        experience: 'Type-safe code development with TypeScript. Wrote more maintainable code using TypeScript in frontend and backend projects.',
      },
    },
    {
      name: 'Redis',
      tier: 'supporting',
      detail: {
        what: ['Cache strategies', 'Session management', 'Performance optimization'],
        experience: 'Cache strategies and performance optimization with Redis. Improved data access speed by using Redis in backend services.',
      },
    },
    {
      name: 'Data Processing',
      tier: 'supporting',
      detail: {
        what: ['Data analysis with Pandas and NumPy', 'Processing high-volume datasets', 'Data cleaning and normalization'],
        experience: 'Data processing and analysis with Pandas and NumPy. Processed, cleaned, and normalized high-volume datasets.',
      },
    },
    {
      name: 'Git & GitHub',
      tier: 'supporting',
      detail: {
        what: ['Version control', 'Code sharing and collaboration', 'CI/CD integrations'],
        experience: 'Version control and code sharing with Git and GitHub. Collaborated in team environments.',
      },
    },
    {
      name: 'Nginx',
      tier: 'supporting',
      detail: {
        what: ['Reverse proxy configuration', 'Load balancing', 'Web server management'],
        experience: 'Reverse proxy and web server management with Nginx. Configured Nginx in production environments.',
      },
    },
    {
      name: 'REST APIs',
      tier: 'supporting',
      detail: {
        what: ['RESTful API design and development', 'API documentation', 'Backend-frontend integration'],
        experience: 'Designed and documented RESTful APIs. Integrated backend services with React.js-based frontend applications.',
      },
    },
    {
      name: 'JWT & Auth',
      tier: 'supporting',
      detail: {
        what: ['JWT-based authentication', 'Secure authentication systems', 'User authorization'],
        experience: 'Developed JWT and authentication systems. Built secure user authentication and authorization mechanisms.',
      },
    },
    {
      name: 'System Design',
      tier: 'supporting',
      detail: {
        what: ['Scalable system design', 'Maintainable architecture', 'Production-grade applications'],
        experience: 'Designed scalable, maintainable systems. Contributed to production-grade applications and worked in collaborative team environments.',
      },
    },
    {
      name: 'Other',
      tier: 'supporting',
      detail: {
        what: [
          'HTML5, CSS3, Bootstrap — frontend technologies',
          'Linux, Windows — operating systems',
          'GitLab — version control',
          'Data pipelines and ETL processes',
          'Code reviews and technical documentation',
        ],
        experience: 'Worked with the above technologies and practices. See relevant skill cards for details.',
      },
    },
  ],

  skills: data.skills,

  experience: [
    {
      id: '1',
      company: 'NEW MIND',
      role: 'Full Stack Developer',
      period: 'May 2023 — Jan 2026',
      periodShort: '2+ yr',
      year: 2023,
      highlights: [
        'Developed and maintained backend services using Python and Node.js for AI-assisted legal technology platforms handling large-scale legal datasets in production environments.',
        'Designed and built automated web scraping and data extraction pipelines to collect legal documents from open-source platforms using Scrapy, BeautifulSoup, Selenium, and custom scripts.',
        'Processed, cleaned, and normalized high-volume datasets to ensure data consistency, accuracy, and usability for analytics and search systems.',
        'Implemented Elasticsearch-based full-text search, filtering, and indexing features to enable fast and scalable access to legal documents.',
        'Developed and documented RESTful APIs and integrated backend services with React.js-based frontend applications.',
        'Managed and optimized PostgreSQL and MongoDB databases, including data modeling, indexing, and performance tuning.',
        'Containerized backend services and data pipelines using Docker, supporting deployment and environment consistency across Linux systems.',
        'Designed and maintained data ingestion pipelines for over 1 year in production, handling continuous data collection and processing workflows.',
        'Built automation workflows using n8n to orchestrate web scraping, API calls, data transformation, and database operations.',
        'Installed, configured, and maintained n8n instances in Linux and Docker-based environments, enabling scheduled and monitored data pipelines.',
        'Implemented Apache Kafka producer and consumer services to enable asynchronous, event-driven data processing between scraping services, backend systems, and downstream consumers.',
        'Produced Kafka messages for newly ingested and processed data, and consumed messages to trigger data indexing, transformation, and persistence workflows.',
        'Ensured fault-tolerant and scalable message processing by leveraging Kafka topics, partitions, and consumer groups.',
        'Integrated Kafka-based pipelines with PostgreSQL, MongoDB, and Elasticsearch to support real-time and batch data processing use cases.',
      ],
    },
  ],

  education: [
    { degree: 'BSc, Management Information Systems (In Progress)', school: 'Anadolu University', period: 'Sep 2023 – Jun 2027' },
    { degree: 'Full Stack Developer Training', school: 'Bahçeşehir University (Wissen Academy)', period: 'Nov 2022 – Jun 2023' },
    { degree: 'BSc, Civil Engineering', school: 'Kahramanmaraş Sütçü İmam University', period: 'Sep 2018 – Jul 2021 | GPA: 2.85' },
  ],

  projects: [
    {
      id: '1',
      title: 'AI-Assisted Legal Technology Platform',
      description: 'AI-assisted legal technology platform I developed at NEW MIND. Full-stack application processing large-scale legal datasets with Elasticsearch-based search systems.',
      longDescription: 'Backend services with Python and Node.js, frontend development with React.js. Web scraping pipelines, data processing and normalization systems. Full-text search and filtering features with Elasticsearch.',
      tags: ['Python', 'Node.js', 'React', 'Elasticsearch', 'PostgreSQL', 'MongoDB'],
      github: null,
      demo: null,
      image: null,
    },
    {
      id: '2',
      title: 'Automated Data Collection and Processing Pipeline',
      description: 'Automated data pipeline system collecting, processing, and normalizing legal documents from open-source platforms. Developed using Scrapy, BeautifulSoup, Selenium, and n8n.',
      longDescription: 'Web scraping and data extraction pipelines. Event-driven data processing with Kafka. PostgreSQL, MongoDB, and Elasticsearch integrations. Continuous data collection and processing in production for 1+ years.',
      tags: ['Python', 'Scrapy', 'BeautifulSoup', 'Selenium', 'Kafka', 'n8n', 'Docker'],
      github: null,
      demo: null,
      image: null,
    },
    {
      id: '3',
      title: 'Mecellem',
      description: 'Legal and corporate governance SPA applications on mecellem.com. Compliance management, risk analysis, legal insights; 36+ products and 300+ orchestration models.',
      longDescription: 'Legal-tech platform for compliance, risk analysis, and legal insights. Muamelat module for managing complex legal transactions. SPA architecture developed with Next.js, React, and TypeScript.',
      tags: ['Next.js', 'React', 'TypeScript', 'SPA', 'Legal Tech'],
      github: null,
      demo: 'https://mecellem.com/en',
      image: null,
    },
  ],

  contact: {
    formEndpoint: '',
    successMessage: 'Your message has been received; I will get back to you as soon as possible.',
    fields: { name: 'Name', email: 'Email', message: 'Message' },
  },
}

/**
 * Returns locale-specific content (tr or en).
 * @param {string} locale - 'tr' | 'en'
 * @returns {typeof data}
 */
export function getData(locale) {
  return locale === "en" ? dataEn : data
}

export default data
