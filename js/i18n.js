/* =============================================
   Alretaj – i18n Translation System (EN / AR)
   ============================================= */

(function () {
    'use strict';

    /* ─── Translations ─── */
    var T = {
        en: {
            /* Nav */
            'nav-services': 'Services',
            'nav-about': 'About',
            'nav-solutions': 'Solutions',
            'nav-impact': 'Impact',
            'nav-clients': 'Clients',
            'nav-contact': 'Contact',
            'nav-cta': 'Get Started',
            'lang-toggle': 'عربي',

            /* Hero */
            'hero-badge': 'Trusted by 500+ Companies Worldwide',
            'hero-title': 'Transform Your Business<br/><span class="gradient-text">With Smart Solutions</span>',
            'hero-subtitle': 'We deliver enterprise-grade technology solutions that help companies scale faster, operate smarter, and compete in the digital age.',
            'hero-btn1': 'Explore Solutions',
            'hero-btn2': 'Book a Consultation',
            'clients-label': 'Trusted by leading brands',

            /* Services */
            'svc-tag': 'What We Offer',
            'svc-title': 'Comprehensive <span class="gradient-text">Enterprise Services</span>',
            'svc-sub': 'From strategy to implementation, we cover every aspect of your digital journey.',
            'svc1-title': 'Digital Transformation',
            'svc1-desc': 'End-to-end transformation strategy to modernize your infrastructure, workflows, and customer experiences.',
            'svc2-title': 'Cloud Solutions',
            'svc2-desc': 'Seamless cloud migration, architecture, and managed services across AWS, Azure, and Google Cloud.',
            'svc3-title': 'Cybersecurity',
            'svc3-desc': 'Comprehensive security audits, threat detection, compliance management, and zero-trust architecture.',
            'svc4-title': 'AI & Automation',
            'svc4-desc': 'Intelligent process automation, machine learning models, and AI-driven insights for operational excellence.',
            'svc5-title': 'Data Analytics',
            'svc5-desc': 'Turn raw data into actionable intelligence with advanced BI dashboards, data pipelines, and predictive analytics.',
            'svc6-title': 'Custom Software',
            'svc6-desc': 'Bespoke enterprise applications, API integrations, and platform development tailored to your business needs.',
            'learn-more': 'Learn more',

            /* About */
            'about-tag': 'About Alretaj',
            'about-title': 'Powering the Next Generation of <span class="gradient-text">Enterprise Innovation</span>',
            'about-desc1': 'Founded in 2015, Alretaj has been at the forefront of enterprise technology consulting and implementation. We combine deep domain expertise with cutting-edge technology to solve complex business challenges.',
            'about-desc2': 'Our multidisciplinary teams work as strategic partners embedded within your organization, ensuring solutions that not only meet today\'s needs but scale for tomorrow\'s growth.',
            'about-feat1': 'ISO 27001 Certified & SOC 2 Compliant',
            'about-feat2': 'Global delivery with 12 offices worldwide',
            'about-feat3': 'Agile delivery with dedicated success managers',
            'about-feat4': '24/7 support with guaranteed SLA response times',
            'about-btn': 'Partner With Us',
            'about-uptime': 'Uptime SLA',
            'about-clients': 'Happy Clients',

            /* Solutions */
            'sol-tag': 'Solutions by Industry',
            'sol-title': 'Built for Every <span class="gradient-text">Industry</span>',
            'sol-sub': 'Specialized solutions tailored to the unique challenges of your sector.',
            'tab-finance': 'Finance',
            'tab-healthcare': 'Healthcare',
            'tab-retail': 'Retail',
            'tab-mfg': 'Manufacturing',
            'tab-logistics': 'Logistics',

            /* Finance panel */
            'fin-title': 'Financial Services Solutions',
            'fin-desc': 'Modernize legacy financial systems, ensure regulatory compliance, and deliver superior customer experiences with our fintech-grade solutions.',
            'fin-li1': 'Core banking modernization & API banking',
            'fin-li2': 'Real-time fraud detection with AI',
            'fin-li3': 'RegTech compliance automation',
            'fin-li4': 'Open banking integration platforms',
            'fin-btn': 'Get Finance Solutions',
            'fin-m1': 'Cost Reduction',
            'fin-m2': 'Faster Processing',
            'fin-m3': 'Compliance Rate',

            /* Healthcare panel */
            'hc-title': 'Healthcare Technology Solutions',
            'hc-desc': 'Streamline clinical workflows, protect patient data, and leverage AI diagnostics to deliver better patient outcomes at scale.',
            'hc-li1': 'EHR/EMR system integration & optimization',
            'hc-li2': 'HIPAA-compliant cloud infrastructure',
            'hc-li3': 'AI-powered diagnostic assistance',
            'hc-li4': 'Telemedicine platform development',
            'hc-btn': 'Get Healthcare Solutions',
            'hc-m1': 'Faster Diagnostics',
            'hc-m2': 'Admin Cost Saving',
            'hc-m3': 'HIPAA Compliant',

            /* Retail panel */
            'ret-title': 'Retail & E-Commerce Solutions',
            'ret-desc': 'Unify online and offline experiences, personalize at scale, and optimize your supply chain with intelligent retail technologies.',
            'ret-li1': 'Omnichannel commerce platform',
            'ret-li2': 'AI-powered personalization engine',
            'ret-li3': 'Inventory & demand forecasting',
            'ret-li4': 'Customer loyalty & engagement systems',
            'ret-btn': 'Get Retail Solutions',
            'ret-m1': 'Revenue Growth',
            'ret-m2': 'Conversion Increase',
            'ret-m3': 'ROI Average',

            /* Manufacturing panel */
            'mfg-title': 'Manufacturing Solutions',
            'mfg-desc': 'Accelerate Industry 4.0 adoption with IoT integration, predictive maintenance, and smart factory automation.',
            'mfg-li1': 'IoT sensor networks & edge computing',
            'mfg-li2': 'Predictive maintenance AI systems',
            'mfg-li3': 'Digital twin factory simulation',
            'mfg-li4': 'Quality control automation',
            'mfg-btn': 'Get Manufacturing Solutions',
            'mfg-m1': 'Downtime Reduction',
            'mfg-m2': 'Efficiency Gain',
            'mfg-m3': 'Defect Reduction',

            /* Logistics panel */
            'log-title': 'Logistics & Supply Chain Solutions',
            'log-desc': 'Gain full supply chain visibility, optimize routing, and automate warehouse operations for end-to-end logistics excellence.',
            'log-li1': 'Real-time supply chain visibility platform',
            'log-li2': 'AI route optimization & fleet management',
            'log-li3': 'Warehouse management systems (WMS)',
            'log-li4': 'Last-mile delivery optimization',
            'log-btn': 'Get Logistics Solutions',
            'log-m1': 'Shipping Cost Reduction',
            'log-m2': 'Faster Fulfillment',
            'log-m3': 'On-Time Delivery',

            /* Stats */
            'stat1-label': 'Enterprise Clients',
            'stat2-label': 'Projects Delivered',
            'stat3-label': 'Years of Excellence',
            'stat4-label': 'Client Satisfaction',

            /* Process */
            'proc-tag': 'How We Work',
            'proc-title': 'Our Proven <span class="gradient-text">4-Step Process</span>',
            'proc-sub': 'A structured methodology that minimizes risk and maximizes value at every phase.',
            'step1-title': 'Discover & Assess',
            'step1-desc': 'Deep-dive analysis of your current processes, technology landscape, and strategic goals to identify high-impact opportunities.',
            'step2-title': 'Design & Plan',
            'step2-desc': 'Architect a tailored solution roadmap with clear milestones, risk mitigation strategies, and measurable success metrics.',
            'step3-title': 'Build & Implement',
            'step3-desc': 'Agile development and deployment with continuous integration, rigorous testing, and transparent progress reporting.',
            'step4-title': 'Optimize & Scale',
            'step4-desc': 'Ongoing monitoring, performance optimization, and scaling support to ensure your solution grows with your business.',

            /* Testimonials */
            'test-tag': 'Client Stories',
            'test-title': 'What Our <span class="gradient-text">Clients Say</span>',
            'test-sub': 'Real results from real companies that trust Alretaj.',
            't1-name': 'James Mitchell',
            't1-role': 'CTO, Apex Financial Group',
            't1-text': '"Alretaj\'s cloud migration strategy reduced our operational costs by 43% and improved system reliability to 99.97% uptime. Their team\'s expertise in fintech gave us unparalleled confidence throughout the project."',
            't2-name': 'Sarah Reynolds',
            't2-role': 'VP Operations, HealthFirst Network',
            't2-text': '"The AI diagnostic assistance tool Alretaj built has been transformative for our clinics. We process 60% more patients with better accuracy. Their HIPAA compliance expertise made them the natural choice."',
            't3-name': 'David Kim',
            't3-role': 'CEO, GlobalRetail Inc.',
            't3-text': '"Our e-commerce platform overhaul delivered by Alretaj resulted in a 55% conversion rate increase in just 6 months. The personalization engine they built is light-years ahead of what we had before."',
            't4-name': 'Laura Weber',
            't4-role': 'Director IT, Precision Manufacturing GmbH',
            't4-text': '"The predictive maintenance system Alretaj deployed has saved us over $2M in the first year alone by eliminating unplanned downtime. Their IoT expertise and hands-on approach exceeded all expectations."',

            /* CTA */
            'cta-title': 'Ready to Transform<br/><span class="gradient-text">Your Business?</span>',
            'cta-sub': "Join 500+ companies that have accelerated growth with Alretaj's enterprise solutions. Let's build your future together.",
            'cta-btn1': 'Start Your Journey',
            'cta-btn2': 'View All Services',
            'cta-trust1': 'Free initial consultation',
            'cta-trust2': 'No long-term commitment required',
            'cta-trust3': 'Response within 24 hours',

            /* Contact */
            'contact-tag': 'Get In Touch',
            'contact-title': "Let's Start a <span class=\"gradient-text\">Conversation</span>",
            'contact-desc': "Whether you're ready to build or just exploring options, our experts are standing by to help you discover the perfect solution for your business.",
            'phone-label': 'Phone',
            'email-label': 'Email',
            'addr-label': 'Head Office',
            'addr-val': '120 Innovation Drive, San Francisco, CA 94105',

            /* Form */
            'form-fname-l': 'First Name',
            'form-fname-ph': 'John',
            'form-lname-l': 'Last Name',
            'form-lname-ph': 'Doe',
            'form-email-l': 'Work Email',
            'form-email-ph': 'john@company.com',
            'form-company-l': 'Company Name',
            'form-company-ph': 'Acme Corporation',
            'form-svc-l': 'Service Interest',
            'form-svc-ph': 'Select a service...',
            'form-svc-1': 'Digital Transformation',
            'form-svc-2': 'Cloud Solutions',
            'form-svc-3': 'Cybersecurity',
            'form-svc-4': 'AI & Automation',
            'form-svc-5': 'Data Analytics',
            'form-svc-6': 'Custom Software',
            'form-svc-7': 'Other',
            'form-msg-l': 'Message',
            'form-msg-ph': 'Tell us about your project and challenges...',
            'form-submit': 'Send Message',
            'form-success': "Thank you! We'll be in touch within 24 hours.",

            /* Footer */
            'footer-tagline': 'Powering enterprise innovation with world-class technology solutions since 2015.',
            'footer-svc-head': 'Services',
            'footer-ind-head': 'Industries',
            'footer-comp-head': 'Company',
            'footer-legal-head': 'Legal',
            'footer-f-transform': 'Digital Transformation',
            'footer-f-cloud': 'Cloud Solutions',
            'footer-f-sec': 'Cybersecurity',
            'footer-f-ai': 'AI & Automation',
            'footer-f-data': 'Data Analytics',
            'footer-f-soft': 'Custom Software',
            'footer-i-finance': 'Finance',
            'footer-i-health': 'Healthcare',
            'footer-i-retail': 'Retail',
            'footer-i-mfg': 'Manufacturing',
            'footer-i-log': 'Logistics',
            'footer-c-about': 'About Us',
            'footer-c-cases': 'Case Studies',
            'footer-c-careers': 'Careers',
            'footer-c-blog': 'Blog',
            'footer-c-contact': 'Contact',
            'footer-l-privacy': 'Privacy Policy',
            'footer-l-terms': 'Terms of Service',
            'footer-l-cookie': 'Cookie Policy',
            'footer-l-gdpr': 'GDPR',
            'footer-copy': '© 2024 Alretaj, Inc. All rights reserved.',
            'footer-made': 'Built with passion for enterprise innovation.',
        },

        ar: {
            /* Nav */
            'nav-services': 'خدماتنا',
            'nav-about': 'من نحن',
            'nav-solutions': 'الحلول',
            'nav-impact': 'تأثيرنا',
            'nav-clients': 'عملاؤنا',
            'nav-contact': 'تواصل',
            'nav-cta': 'ابدأ الآن',
            'lang-toggle': 'English',

            /* Hero */
            'hero-badge': 'موثوق به من أكثر من 500 شركة حول العالم',
            'hero-title': 'حوّل أعمالك<br/><span class="gradient-text">بحلول ذكية ومتطورة</span>',
            'hero-subtitle': 'نقدّم حلولاً تقنية على مستوى المؤسسات تساعد الشركات على النمو بشكل أسرع والعمل بذكاء أكبر والتنافس في العصر الرقمي.',
            'hero-btn1': 'استكشف الحلول',
            'hero-btn2': 'احجز استشارة',
            'clients-label': 'موثوق به من كبرى العلامات التجارية',

            /* Services */
            'svc-tag': 'ما نقدّمه',
            'svc-title': 'خدمات مؤسسية <span class="gradient-text">شاملة</span>',
            'svc-sub': 'من الاستراتيجية إلى التنفيذ، نغطّي كل جانب من رحلتك الرقمية.',
            'svc1-title': 'التحول الرقمي',
            'svc1-desc': 'استراتيجية تحول شاملة لتحديث بنيتك التحتية وسير عملك وتجارب عملائك.',
            'svc2-title': 'حلول السحابة',
            'svc2-desc': 'ترحيل سلس للسحابة وهندسة وخدمات مُدارة عبر AWS وAzure وGoogle Cloud.',
            'svc3-title': 'الأمن السيبراني',
            'svc3-desc': 'تدقيقات أمنية شاملة واكتشاف التهديدات وإدارة الامتثال وهندسة الثقة الصفرية.',
            'svc4-title': 'الذكاء الاصطناعي والأتمتة',
            'svc4-desc': 'أتمتة العمليات الذكية ونماذج التعلم الآلي والرؤى المدعومة بالذكاء الاصطناعي لتحقيق التميز التشغيلي.',
            'svc5-title': 'تحليل البيانات',
            'svc5-desc': 'حوّل البيانات الخام إلى ذكاء قابل للتنفيذ بلوحات BI المتقدمة وخطوط أنابيب البيانات والتحليلات التنبؤية.',
            'svc6-title': 'البرمجيات المخصصة',
            'svc6-desc': 'تطبيقات مؤسسية مصممة خصيصاً وتكاملات API وتطوير منصات مُفصّلة لاحتياجات أعمالك.',
            'learn-more': 'اعرف المزيد',

            /* About */
            'about-tag': 'عن الرتاج',
            'about-title': 'تمكين الجيل القادم من <span class="gradient-text">الابتكار المؤسسي</span>',
            'about-desc1': 'تأسّست الرتاج عام 2015، وكانت في طليعة استشارات التكنولوجيا المؤسسية وتنفيذها. نجمع بين الخبرة المتعمقة في المجال وأحدث التقنيات لحل التحديات التجارية المعقدة.',
            'about-desc2': 'تعمل فرقنا متعددة التخصصات كشركاء استراتيجيين منغمسين داخل مؤسستك، لضمان حلول تلبي احتياجات اليوم وتتوسع لنمو الغد.',
            'about-feat1': 'معتمد وفق ISO 27001 ومتوافق مع SOC 2',
            'about-feat2': 'تسليم عالمي مع 12 مكتباً حول العالم',
            'about-feat3': 'تسليم رشيق مع مديري نجاح متخصصين',
            'about-feat4': 'دعم على مدار 24/7 مع أوقات استجابة SLA مضمونة',
            'about-btn': 'شارك معنا',
            'about-uptime': 'ضمان التشغيل',
            'about-clients': 'عميل سعيد',

            /* Solutions */
            'sol-tag': 'حلول حسب القطاع',
            'sol-title': 'مصمّم لكل <span class="gradient-text">قطاع</span>',
            'sol-sub': 'حلول متخصصة مُصممة لمعالجة التحديات الفريدة في قطاعك.',
            'tab-finance': 'التمويل',
            'tab-healthcare': 'الرعاية الصحية',
            'tab-retail': 'التجزئة',
            'tab-mfg': 'التصنيع',
            'tab-logistics': 'اللوجستيات',

            /* Finance panel */
            'fin-title': 'حلول الخدمات المالية',
            'fin-desc': 'حدّث الأنظمة المالية القديمة وضمن الامتثال التنظيمي وقدّم تجارب عملاء متميزة بحلولنا على مستوى التكنولوجيا المالية.',
            'fin-li1': 'تحديث الخدمات المصرفية الأساسية وبنك API',
            'fin-li2': 'كشف الاحتيال في الوقت الفعلي بالذكاء الاصطناعي',
            'fin-li3': 'أتمتة الامتثال التنظيمي',
            'fin-li4': 'منصات تكامل الخدمات المصرفية المفتوحة',
            'fin-btn': 'احصل على حلول التمويل',
            'fin-m1': 'خفض التكاليف',
            'fin-m2': 'أسرع في المعالجة',
            'fin-m3': 'معدل الامتثال',

            /* Healthcare panel */
            'hc-title': 'حلول تقنية للرعاية الصحية',
            'hc-desc': 'سيّل سير العمل السريري وحماية بيانات المرضى والاستفادة من تشخيصات الذكاء الاصطناعي لتحقيق نتائج أفضل.',
            'hc-li1': 'تكامل وتحسين أنظمة السجلات الصحية الإلكترونية',
            'hc-li2': 'بنية تحتية سحابية متوافقة مع HIPAA',
            'hc-li3': 'مساعدة التشخيص المدعومة بالذكاء الاصطناعي',
            'hc-li4': 'تطوير منصات الطب عن بُعد',
            'hc-btn': 'احصل على حلول الرعاية الصحية',
            'hc-m1': 'تشخيص أسرع',
            'hc-m2': 'توفير تكاليف إدارية',
            'hc-m3': 'متوافق مع HIPAA',

            /* Retail panel */
            'ret-title': 'حلول التجزئة والتجارة الإلكترونية',
            'ret-desc': 'وحّد التجارب الرقمية والمادية وخصّص على نطاق واسع وحسّن سلسلة التوريد بتقنيات التجزئة الذكية.',
            'ret-li1': 'منصة تجارة متعددة القنوات',
            'ret-li2': 'محرك تخصيص مدعوم بالذكاء الاصطناعي',
            'ret-li3': 'إدارة المخزون والتنبؤ بالطلب',
            'ret-li4': 'أنظمة ولاء وتفاعل العملاء',
            'ret-btn': 'احصل على حلول التجزئة',
            'ret-m1': 'نمو الإيرادات',
            'ret-m2': 'زيادة التحويل',
            'ret-m3': 'متوسط العائد على الاستثمار',

            /* Manufacturing panel */
            'mfg-title': 'حلول التصنيع',
            'mfg-desc': 'سرّع اعتماد الصناعة 4.0 بتكامل إنترنت الأشياء والصيانة التنبؤية وأتمتة المصنع الذكي.',
            'mfg-li1': 'شبكات أجهزة الاستشعار وحوسبة الحافة',
            'mfg-li2': 'أنظمة ذكاء اصطناعي للصيانة التنبؤية',
            'mfg-li3': 'محاكاة التوأم الرقمي للمصنع',
            'mfg-li4': 'أتمتة مراقبة الجودة',
            'mfg-btn': 'احصل على حلول التصنيع',
            'mfg-m1': 'خفض وقت التوقف',
            'mfg-m2': 'تحسين الكفاءة',
            'mfg-m3': 'خفض العيوب',

            /* Logistics panel */
            'log-title': 'حلول اللوجستيات وسلسلة التوريد',
            'log-desc': 'احصل على رؤية كاملة لسلسلة التوريد وحسّن التوجيه وأتمت عمليات المستودع لتحقيق التميز اللوجستي.',
            'log-li1': 'منصة رؤية سلسلة التوريد في الوقت الفعلي',
            'log-li2': 'تحسين المسار بالذكاء الاصطناعي وإدارة الأسطول',
            'log-li3': 'أنظمة إدارة المستودعات',
            'log-li4': 'تحسين التوصيل في الميل الأخير',
            'log-btn': 'احصل على حلول اللوجستيات',
            'log-m1': 'خفض تكاليف الشحن',
            'log-m2': 'تنفيذ أسرع',
            'log-m3': 'التسليم في الموعد',

            /* Stats */
            'stat1-label': 'عميل مؤسسي',
            'stat2-label': 'مشروع تم تسليمه',
            'stat3-label': 'سنوات من التميز',
            'stat4-label': 'رضا العملاء',

            /* Process */
            'proc-tag': 'كيف نعمل',
            'proc-title': 'عمليتنا المثبتة <span class="gradient-text">في 4 خطوات</span>',
            'proc-sub': 'منهجية منظمة تقلّل المخاطر وتزيد القيمة في كل مرحلة.',
            'step1-title': 'الاكتشاف والتقييم',
            'step1-desc': 'تحليل معمّق لعملياتك الحالية وبيئتك التقنية وأهدافك الاستراتيجية لتحديد الفرص عالية التأثير.',
            'step2-title': 'التصميم والتخطيط',
            'step2-desc': 'بناء خارطة طريق حلول مُخصصة مع معالم واضحة واستراتيجيات للحد من المخاطر ومقاييس نجاح قابلة للقياس.',
            'step3-title': 'البناء والتنفيذ',
            'step3-desc': 'تطوير ونشر رشيق مع تكامل مستمر واختبار صارم وتقارير شفافة عن التقدم.',
            'step4-title': 'التحسين والتوسع',
            'step4-desc': 'مراقبة مستمرة وتحسين الأداء ودعم التوسع لضمان نمو حلك مع أعمالك.',

            /* Testimonials */
            'test-tag': 'قصص العملاء',
            'test-title': 'ماذا يقول <span class="gradient-text">عملاؤنا</span>',
            'test-sub': 'نتائج حقيقية من شركات حقيقية تثق في الرتاج.',
            't1-name': 'جيمس ميتشيل',
            't1-role': 'مدير التقنية، مجموعة Apex المالية',
            't1-text': '"ساعدت استراتيجية ترحيل السحابة لدى الرتاج في خفض تكاليفنا التشغيلية بنسبة 43٪ وتحسين موثوقية النظام إلى نسبة تشغيل 99.97٪. أعطتنا خبرة الفريق في التكنولوجيا المالية ثقة لا مثيل لها طوال المشروع."',
            't2-name': 'سارة رينولدز',
            't2-role': 'نائب رئيس العمليات، شبكة HealthFirst',
            't2-text': '"كانت أداة مساعدة التشخيص بالذكاء الاصطناعي التي بنتها الرتاج تحويلية لعياداتنا. نعالج 60٪ من المرضى أكثر بدقة أفضل. جعلت خبرتهم في الامتثال الخيار الطبيعي لنا."',
            't3-name': 'ديفيد كيم',
            't3-role': 'الرئيس التنفيذي، GlobalRetail Inc.',
            't3-text': '"أسفر تجديد منصة التجارة الإلكترونية الذي أنجزته الرتاج عن زيادة معدل التحويل بنسبة 55٪ في 6 أشهر فقط. محرك التخصيص الذي بنوه يتقدم بمراحل على ما كنا نمتلكه من قبل."',
            't4-name': 'لورا ويبر',
            't4-role': 'مدير تقنية المعلومات، Precision Manufacturing GmbH',
            't4-text': '"وفّر نظام الصيانة التنبؤية الذي طوّرته الرتاج أكثر من 2 مليون دولار في العام الأول وحده من خلال القضاء على التوقفات غير المخططة."',

            /* CTA */
            'cta-title': 'هل أنت مستعد للتحول؟<br/><span class="gradient-text">لأعمالك؟</span>',
            'cta-sub': 'انضم إلى أكثر من 500 شركة حقّقت نمواً متسارعاً مع حلول الرتاج المؤسسية. دعنا نبني مستقبلك معاً.',
            'cta-btn1': 'ابدأ رحلتك',
            'cta-btn2': 'عرض جميع الخدمات',
            'cta-trust1': 'استشارة أولية مجانية',
            'cta-trust2': 'لا التزام طويل الأمد مطلوب',
            'cta-trust3': 'الرد خلال 24 ساعة',

            /* Contact */
            'contact-tag': 'تواصل معنا',
            'contact-title': 'دعنا <span class="gradient-text">نتحدث</span>',
            'contact-desc': 'سواء كنت مستعداً للبناء أو تستكشف الخيارات فقط، خبراؤنا في انتظارك لمساعدتك في اكتشاف الحل المثالي لأعمالك.',
            'phone-label': 'الهاتف',
            'email-label': 'البريد الإلكتروني',
            'addr-label': 'المقر الرئيسي',
            'addr-val': '120 Innovation Drive، سان فرانسيسكو، كاليفورنيا 94105',

            /* Form */
            'form-fname-l': 'الاسم الأول',
            'form-fname-ph': 'محمد',
            'form-lname-l': 'اسم العائلة',
            'form-lname-ph': 'العبدالله',
            'form-email-l': 'البريد الإلكتروني للعمل',
            'form-email-ph': 'mohammed@company.com',
            'form-company-l': 'اسم الشركة',
            'form-company-ph': 'شركة الأمثلة',
            'form-svc-l': 'الخدمة المطلوبة',
            'form-svc-ph': 'اختر خدمة...',
            'form-svc-1': 'التحول الرقمي',
            'form-svc-2': 'حلول السحابة',
            'form-svc-3': 'الأمن السيبراني',
            'form-svc-4': 'الذكاء الاصطناعي والأتمتة',
            'form-svc-5': 'تحليل البيانات',
            'form-svc-6': 'البرمجيات المخصصة',
            'form-svc-7': 'أخرى',
            'form-msg-l': 'الرسالة',
            'form-msg-ph': 'أخبرنا عن مشروعك وتحدياتك...',
            'form-submit': 'إرسال الرسالة',
            'form-success': 'شكراً لك! سنتواصل معك خلال 24 ساعة.',

            /* Footer */
            'footer-tagline': 'تمكين الابتكار المؤسسي بحلول تقنية عالمية منذ عام 2015.',
            'footer-svc-head': 'الخدمات',
            'footer-ind-head': 'القطاعات',
            'footer-comp-head': 'الشركة',
            'footer-legal-head': 'قانوني',
            'footer-f-transform': 'التحول الرقمي',
            'footer-f-cloud': 'حلول السحابة',
            'footer-f-sec': 'الأمن السيبراني',
            'footer-f-ai': 'الذكاء الاصطناعي والأتمتة',
            'footer-f-data': 'تحليل البيانات',
            'footer-f-soft': 'البرمجيات المخصصة',
            'footer-i-finance': 'التمويل',
            'footer-i-health': 'الرعاية الصحية',
            'footer-i-retail': 'التجزئة',
            'footer-i-mfg': 'التصنيع',
            'footer-i-log': 'اللوجستيات',
            'footer-c-about': 'من نحن',
            'footer-c-cases': 'دراسات الحالة',
            'footer-c-careers': 'الوظائف',
            'footer-c-blog': 'المدونة',
            'footer-c-contact': 'تواصل معنا',
            'footer-l-privacy': 'سياسة الخصوصية',
            'footer-l-terms': 'شروط الخدمة',
            'footer-l-cookie': 'سياسة ملفات تعريف الارتباط',
            'footer-l-gdpr': 'اللائحة العامة لحماية البيانات',
            'footer-copy': '© 2024 الرتاج. جميع الحقوق محفوظة.',
            'footer-made': 'صُنع بشغف للابتكار المؤسسي.',
        }
    };

    /* ─── DOM Helpers ─── */
    function applyLang(lang) {
        var t = T[lang];
        if (!t) return;

        /* Text nodes */
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.textContent = t[key];
        });

        /* HTML nodes (preserve inner spans/markup) */
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (t[key] !== undefined) el.innerHTML = t[key];
        });

        /* Placeholders */
        document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-ph');
            if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
        });

        /* RTL / LTR */
        var html = document.documentElement;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        /* Font */
        document.body.classList.toggle('lang-ar', lang === 'ar');

        /* Toggle button label */
        var btn = document.getElementById('lang-toggle');
        if (btn) btn.textContent = t['lang-toggle'];

        /* Persist */
        try { localStorage.setItem('alretaj-lang', lang); } catch (_) { }

        window._currentLang = lang;
    }

    /* ─── Init ─── */
    document.addEventListener('DOMContentLoaded', function () {
        var saved = 'en';
        try { saved = localStorage.getItem('alretaj-lang') || 'en'; } catch (_) { }

        applyLang(saved);

        var btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.addEventListener('click', function () {
                var next = (window._currentLang === 'en') ? 'ar' : 'en';
                applyLang(next);
            });
        }
    });

})();
