// ============================================
// Translations – English & Arabic
// ============================================

const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      blog: 'Blog',
      posts: 'Blog',
      certificates: 'Certificates',
      contact: 'Contact',
      hireme: 'Hire Me',
    },

    // Hero
    hero: {
      badge: 'Available for opportunities',
      name1: 'Ahmed Ali',
      name2: 'Ashour',
      rolePrefix: 'I am a ',
      roles: ['Data Scientist', 'ML Engineer', 'AI Enthusiast', 'Problem Solver'],
      bio: 'I help organizations transform complex data into meaningful insights and practical predictive solutions through end-to-end machine learning workflows and advanced data analysis.',
      viewWork: 'View My Projects',
      getInTouch: 'Contact Me',
      scroll: 'Scroll',
    },

    // About
    about: {
      label: 'About Me',
      title1: 'The Story ',
      title2: 'Behind the Data',
      greeting1: "Hey, I'm ",
      greeting2: 'Ahmed',
      greetingEmoji: '',
      para1: "I'm Ahmed Ashour, a third-year <strong>Computer Science</strong> student at Mansoura University focused on <strong>Machine Learning</strong> and <strong>Data Science</strong>.",
      para2: "I enjoy understanding not only how models work, but why they fail and how to fix them. That became real for me when I tracked down an <strong>overfitting bug</strong> in a purchase intent prediction model that was silently breaking our results — no obvious error, just a model that looked fine until it wasn't. That kind of problem, where the answer isn't in any tutorial, is what I find most interesting about this field.",
      para3: "I work primarily with <strong>Python, Pandas, NumPy, and Scikit-learn</strong>, with a strong foundation in <strong>statistics</strong> and hands-on experience building <strong>end-to-end ML pipelines</strong>. I'm currently exploring <strong>ML deployment</strong> and real-world engineering practices.",
      para4: "My next goal is to contribute to <strong>open-source ML projects</strong> — particularly in data preprocessing, model evaluation, and classical ML pipelines — areas where I can add real value and grow alongside engineers who are already doing this at scale.",
      facts: [
        { icon: '🎓', label: 'Education', val: 'B.Sc. Computer Science — Mansoura University' },
        { icon: '🌍', label: 'Location', val: 'Egypt' },
        { icon: '🧬', label: 'Focus', val: 'ML & AI Solutions' },
        { icon: '🔭', label: 'Career Goal', val: 'Contribute to impactful AI & Data Science projects' },
      ],
      connect: "🤝 Let's Connect",
      downloadCV: '📄 Download CV',
    },

    // Skills
    skills: {
      label: 'What I Do',
      title1: 'My ',
      title2: 'Tech Stack',
      subtitle: 'Tools and technologies I work with every day',
      toolsTitle: '⚙️ Tools & Technologies',
      items: [
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'Machine Learning', level: 90, icon: '🤖' },
        { name: 'Deep Learning', level: 82, icon: '🧠' },
        { name: 'Data Analysis & EDA', level: 93, icon: '📊' },
        { name: 'SQL', level: 88, icon: '🗄️' },
        { name: 'Scikit-learn', level: 92, icon: '🔬' },
        { name: 'MLflow & MLOps', level: 78, icon: '⚡' },
      ],
    },

    // Projects
    projects: {
      label: "What I've Built",
      title1: 'Featured ',
      title2: 'Projects',
      subtitle: 'A selection of my data science & ML projects',
      items: [
        {
          id: 1, title: 'Indian House Rent Prediction',
          desc: 'An end-to-end machine learning project that predicts house rental prices across major Indian cities — from raw data cleaning through model training, hyperparameter tuning, FastAPI deployment, and a web frontend.',
          tags: ['Python', 'Scikit-learn', 'FastAPI', 'Pandas', 'EDA'], icon: '🏠', color: '#d4a843', github: 'https://github.com/aashour06/Indian-House-Rent-Prediction', demo: '#',
        },
        {
          id: 2, title: 'User Behavior Analytics',
          desc: 'An end-to-end ML web application that analyzes e-commerce user behavior data and predicts purchase intent — featuring automated model comparison, FastAPI backend, and an interactive frontend with a probability gauge.',
          tags: ['Python', 'XGBoost', 'FastAPI', 'Scikit-learn', 'Pandas'], icon: '📊', color: '#a87c28', github: 'https://github.com/adamelhabian/user-behavior-analytics', demo: '#',
        },
        {
          id: 3, title: 'MediVision-AI',
          desc: 'Currently under development — stay tuned.',
          tags: ['Python', 'Deep Learning', 'AI', 'Healthcare'], icon: '🏥', color: '#f0c674', github: 'https://github.com/aashour06/MediVision-AI', demo: '#',
        },
      ],
    },

    // Posts
    posts: {
      label: 'Insights & Articles',
      title1: 'My ',
      title2: 'Blog',
      subtitle: 'Technical write-ups, practical ML lessons, and development notes',
      createBtn: 'Create Post',
      filterAll: 'All',
      searchPlaceholder: 'Search articles, topics or tags...',
      noPosts: 'No posts found matching your search.',
      readFull: 'Read Full Post',
      yourPostBadge: 'Your Post',
      deleteConfirm: 'Are you sure you want to delete this post?',
      deleteBtn: 'Delete',
      readTime: 'min read',
      likes: 'Likes',
      publishedOn: 'Published on',
      author: 'Ahmed Ali Ashour',
      shareTooltip: 'Copy link',
      copiedToast: 'Link copied to clipboard!',
      modalCreateTitle: 'Create a New Post',
      modalCreateDesc: 'Share your thoughts, discoveries, or technical breakdowns.',
      inputTitle: 'Title *',
      inputTitlePlaceholder: 'e.g. Solving Overfitting with Cross-Validation and Regularization',
      inputCategory: 'Category',
      inputTags: 'Tags (comma separated)',
      inputTagsPlaceholder: 'e.g. Python, Machine Learning, MLOps',
      inputSummary: 'Brief Summary *',
      inputSummaryPlaceholder: 'One or two sentences summarizing the key takeaway...',
      inputContent: 'Full Article Content *',
      inputContentPlaceholder: 'Write your post here. Share your methodology, learnings, and technical notes...',
      submitPublish: 'Publish Post',
      cancel: 'Cancel',
      closeModal: 'Close',
      categories: [
        'Machine Learning',
        'Data Science',
        'MLOps & Deployment',
        'Python & Code',
        'Thoughts & Tips',
      ],
      defaultPosts: [
        {
          id: 'default-post-1',
          title: 'Debugging the Overfitting Silent Killer in Purchase Intent Prediction',
          category: 'Machine Learning',
          date: 'Aug 2026',
          readTime: '4 min read',
          tags: ['Scikit-learn', 'Overfitting', 'Evaluation'],
          summary: 'How a model showing 94% training accuracy was silently failing in evaluation, and the exact steps taken to uncover data leakage and recalibrate feature engineering.',
          content: `In a real-world predictive workflow, high accuracy numbers can sometimes be your biggest red flag.\n\nWhile working on a purchase intent prediction model, our training curves looked exceptionally clean — almost 94% accuracy. But during cross-validation across holdout segments, prediction stability plummeted. There was no runtime exception, no obvious schema error, and no code crash. Just a silent failure.\n\nAfter systematic inspection, the issue came down to feature leakage: an engineered timestamp recency feature had subtly incorporated session-closing event signals that would never exist at inference time.\n\nKey takeaways:\n1. Always validate feature availability at true inference time, not post-session aggregation.\n2. Rely on stratified group splits rather than purely random train-test splitting.\n3. Treat any metric jump that seems "too good to be true" with healthy skepticism.\n\nFixing this problem taught me that the most valuable part of machine learning isn't just knowing which algorithm to run — it's developing the intuition to question why it behaves the way it does.`
        },
        {
          id: 'default-post-2',
          title: 'Building Reproducible ML Pipelines with Scikit-Learn & MLflow',
          category: 'MLOps & Deployment',
          date: 'Jul 2026',
          readTime: '5 min read',
          tags: ['MLflow', 'Pipelines', 'Python', 'Best Practices'],
          summary: 'Why moving beyond ad-hoc Jupyter Notebook experiments into structured, tracked pipelines is the most critical leap for aspiring ML engineers.',
          content: `Notebooks are great for rapid exploratory data analysis, but they can become chaotic when tracking hyperparameter sweeps, feature transformations, and model lineage.\n\nWhen preparing our DEPI machine learning capstone, introducing MLflow alongside structured Scikit-Learn pipelines transformed the development cycle:\n- Experiment Tracking: Automatically log hyperparameters, validation metrics (F1, ROC-AUC), and model artifacts.\n- Custom Transformers: Packaging preprocessing logic into Scikit-learn Pipeline objects ensures zero training-test data leakage during scaling or imputation.\n- Model Registry: Versioning models so that rollbacks and comparisons are one click away.\n\nTreating machine learning code with the same rigor as production software engineering makes all the difference when moving models from prototypes to reliable systems.`
        },
        {
          id: 'default-post-3',
          title: "When 99% Accuracy Doesn't Mean a Good Model",
          category: 'Machine Learning',
          date: 'Jun 2026',
          readTime: '6 min read',
          tags: ['Machine Learning', 'Evaluation', 'Classification', 'Metrics'],
          summary: "Why 99% accuracy can be meaningless on imbalanced datasets, and how metrics like Precision, Recall, and F1 Score reveal the real performance of a classification model.",
          content: `A Machine Learning model achieving 99% accuracy sounds impressive.\n\nBut in some situations, that number can be almost meaningless.\n\nThe reason is simple:\n\nAccuracy tells us how many predictions were correct, but it doesn't always tell us whether the model is useful.\n\nA Simple Example\n\nImagine we are building a model to detect fraudulent transactions.\n\nOur dataset contains:\n\n• 99,000 legitimate transactions\n• 1,000 fraudulent transactions\n\nSuppose the model predicts \u201Clegitimate\u201D for every transaction.\n\nIt will correctly classify all 99,000 legitimate transactions.\n\nIts accuracy would be:\n\n99,000 / 100,000 = 99%\n\nSo we have a model with 99% accuracy that detects zero fraudulent transactions.\n\nObviously, this is not a useful fraud detection system.\n\nLooking Beyond Accuracy\n\nFor classification problems, I usually look at the confusion matrix first.\n\nIt contains four important outcomes:\n\n                 Predicted\n               Negative  Positive\nActual Negative    TN        FP\nActual Positive    FN        TP\n\nFrom these values, we can calculate more informative metrics.\n\nPrecision\n\nPrecision answers: \u201CWhen the model predicts positive, how often is it correct?\u201D\n\nPrecision = TP / (TP + FP)\n\nRecall\n\nRecall answers: \u201COut of all actual positive cases, how many did the model find?\u201D\n\nRecall = TP / (TP + FN)\n\nF1 Score\n\nF1 combines precision and recall:\n\nF1 = 2 \u00D7 (Precision \u00D7 Recall) / (Precision + Recall)\n\nIt can be particularly useful when we care about balancing both false positives and false negatives.\n\nThe Threshold Changes Everything\n\nFor many classification models, the prediction is not simply 0 or 1. The model first produces a probability.\n\nFor example:\n\nTransaction A \u2192 0.91\nTransaction B \u2192 0.63\nTransaction C \u2192 0.21\n\nWith a threshold of 0.50:\n0.91 \u2192 Positive\n0.63 \u2192 Positive\n0.21 \u2192 Negative\n\nBut changing the threshold to 0.80 changes the predictions:\n0.91 \u2192 Positive\n0.63 \u2192 Negative\n0.21 \u2192 Negative\n\nSo the threshold can change the balance between precision and recall.\n\nThere Is No Universal \u201CBest\u201D Metric\n\nThe right metric depends on the problem.\n\nMedical Screening \u2014 Missing a real positive case can be extremely costly. So we may prioritize: High Recall.\n\nSpam Detection \u2014 Incorrectly sending an important email to spam can be frustrating. So we may care more about: High Precision.\n\nFraud Detection \u2014 We may need to balance both false positives and false negatives. So: Precision + Recall + F1 + business cost can provide a better evaluation.\n\nWhat I Learned From This\n\nOne of the biggest lessons in Machine Learning is that model evaluation is a problem-specific decision.\n\nA model shouldn't be considered successful simply because it produces a high score.\n\nBefore evaluating a model, I need to understand:\n\n\u2022 What does a false positive mean?\n\u2022 What does a false negative mean?\n\u2022 Which error is more expensive?\n\u2022 Is the dataset imbalanced?\n\u2022 What metric actually represents the business objective?\n\u2022 What happens when the classification threshold changes?\n\nFinal Takeaway\n\nA Machine Learning model is not good because it has a high metric.\n\nIt is good when its evaluation reflects the real-world problem it is supposed to solve.\n\nThe goal isn\u2019t to maximize a number. The goal is to build a model that makes useful decisions.`
        }
      ]
    },

    // Contact
    contact: {
      label: "Let's Talk",
      title1: 'Get In ',
      title2: 'Touch',
      subtitle: "Have a project in mind? Let's build something amazing together.",
      cardTitle: "Let's Work Together 🤝",
      cardText: "I'm always open to discussing new data science projects, creative ideas, or opportunities to be part of your vision.",
      details: [
        { icon: '🌍', label: 'Location', val: 'Egypt' },
        { icon: '📧', label: 'Email', val: 'a7med3shour10@gmail.com' },
        { icon: '🔗', label: 'LinkedIn', val: 'linkedin.com/in/ahmed-ali-ashour', link: 'https://www.linkedin.com/in/ahmed-ali-ashour' },
      ],
      formTitle: '✉️ Send a Message',
      labelName: 'Your Name',
      labelEmail: 'Email Address',
      labelMessage: 'Message',
      placeholderName: 'John Doe',
      placeholderEmail: 'john@example.com',
      placeholderMessage: 'Tell me about your project...',
      btnIdle: 'Send Message',
      btnSending: 'Sending…',
      btnSent: 'Sent Successfully!',
      btnError: 'Failed — Try Again',
    },

    // Experience
    experience: {
      label: 'My Journey',
      title1: 'Work ',
      title2: 'Experience',
      subtitle: 'Roles where I applied and built real ML & data skills',
      items: [
        {
          icon: '🧠',
          type: 'Training',
          date: 'July 2026 – Present',
          role: 'Microsoft Machine Learning Trainee',
          org: 'Digital Egypt Pioneers Initiative (DEPI)',
          duties: [
            'Developed hands-on experience in Machine Learning, Data Science, and AI through practical training.',
            'Applied Python, data preprocessing, EDA, feature engineering, and model evaluation techniques.',
            'Gained exposure to Deep Learning, NLP, Computer Vision, Azure AI, MLOps, MLflow, and Hugging Face.',
            'Executed end-to-end machine learning workflows through targeted assignments.',
          ],
          tags: ['Python', 'ML', 'NLP', 'Azure AI', 'MLflow', 'Hugging Face'],
        },
        {
          icon: '🤖',
          type: 'Member',
          date: 'January 2026 – Present',
          role: 'AI & Data Science Member',
          org: 'CIS Team MU',
          duties: [
            'Collaborated with a specialized team to develop data-driven solutions and ML projects.',
            'Applied machine learning concepts and Python tools to solve practical problems.',
            'Participated actively in team research, discussions, and technical implementation.',
          ],
          tags: ['Python', 'Data Science', 'Machine Learning', 'Teamwork'],
        },
        {
          icon: '🎨',
          type: 'Supervisor',
          date: 'July 2026 – Present',
          role: 'Graphic Designer Supervisor',
          org: 'CIS Team MU',
          duties: [
            'Supervised the graphic design team and coordinated design tasks.',
            'Reviewed designs and provided actionable feedback to maintain quality and consistency.',
            'Collaborated on visual content for organizational activities and events.',
          ],
          tags: ['Leadership', 'Design Supervision', 'Visual Communication'],
        },
        {
          icon: '📡',
          type: 'Training',
          date: 'July 2026 – August 2026',
          role: 'National Telecommunication Institute AI Trainee',
          org: 'National Telecommunication Institute (NTI)',
          duties: [
            'Built foundational knowledge in AI, Machine Learning, and Deep Learning.',
            'Worked with Python, Pandas, and NumPy for data analysis and preprocessing.',
            'Developed an understanding of Data Cleaning, Data Engineering, and Feature Engineering.',
            'Explored ML model development, training, and evaluation.',
            'Gained an overview of the end-to-end AI workflow.',
          ],
          tags: ['AI', 'Machine Learning', 'Deep Learning', 'Python', 'Feature Engineering'],
        },
      ],
    },

    // Certificates
    certificates: {
      label: 'Credentials',
      title1: 'My ',
      title2: 'Certificates',
      subtitle: 'Professional certifications validating my ML & data science expertise',
      viewCert: '🔗 View Certificate',
      pending: '⏳ Link coming soon',
      items: [
        {
          icon: '🧠',
          issuer: 'Coursera — DeepLearning.AI',
          title: 'Advanced Learning Algorithms',
          url: 'https://coursera.org/share/c696abefadc0dd1d3dad36c171e4efee',
        },
        {
          icon: '🤖',
          issuer: 'Coursera — DeepLearning.AI',
          title: 'Supervised Machine Learning: Regression and Classification',
          url: 'https://coursera.org/share/ef225b25775c34b280aa821502e92841',
        },
        {
          icon: '🔬',
          issuer: 'DataCamp',
          title: 'Supervised Learning with Scikit-learn',
          url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/018de780cbf7a4ae7ae8064b999ead819da5ddc3',
        },
        {
          icon: '📐',
          issuer: 'Coursera',
          title: 'Mathematics for Machine Learning: Multivariate Calculus',
          url: 'https://coursera.org/share/732bdff901d80b965011aae99a9cb358',
        },
        {
          icon: '⚡',
          issuer: 'DataCamp',
          title: 'Feature Engineering for Machine Learning in Python',
          url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/0be87a25776ebb984e08bec03b5fd74df0906815',
        },
        {
          icon: '🧮',
          issuer: 'Coursera',
          title: 'Mathematics for Machine Learning: Linear Algebra',
          url: 'https://coursera.org/share/ed75db84de2205780efe88efeeba7543',
        },
      ],
    },

    // Footer
    footer: {
      tagline: '⚡ Data Scientist · ML Engineer',
      copyright: '© {year} Ahmed Ali Ashour. All rights reserved.',
      links: ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Blog', 'Certificates', 'Contact'],
    },
  },

  // ============ ARABIC ============
  ar: {
    // Navbar
    nav: {
      home: 'الرئيسية',
      about: 'عنّي',
      skills: 'المهارات',
      experience: 'الخبرات',
      projects: 'المشاريع',
      blog: 'المدونة',
      posts: 'المدونة',
      certificates: 'الشهادات',
      contact: 'تواصل',
      hireme: 'وظّفني',
    },

    // Hero
    hero: {
      badge: 'متاح للفرص الجديدة',
      name1: 'أحمد علي',
      name2: 'عاشور',
      rolePrefix: 'أنا ',
      roles: ['عالم بيانات', 'مهندس تعلّم آلي', 'شغوف بالذكاء الاصطناعي', 'حلّال مشكلات'],
      bio: 'أحوّل البيانات الخام إلى رؤى قوية. أبني نماذج ذكية، وأكتشف أنماطاً مخفية، وأصمّم حلولاً مبنيّة على البيانات تُحدث فرقاً حقيقياً.',
      viewWork: 'شاهد أعمالي',
      getInTouch: 'تواصل معي',
      scroll: 'مرّر',
    },

    // About
    about: {
      label: 'عنّي',
      title1: 'القصة ',
      title2: 'وراء البيانات',
      greeting1: 'مرحباً، أنا ',
      greeting2: 'أحمد',
      greetingEmoji: '',
      para1: "أنا أحمد عاشور، طالب بالفرقة الثالثة في <strong>علوم الحاسوب</strong> بجامعة المنصورة، وأركز على <strong>التعلم الآلي</strong> و<strong>علم البيانات</strong>.",
      para2: "أستمتع بفهم ليس فقط كيف تعمل النماذج، بل لماذا تفشل وكيف يمكن إصلاحها. أصبح هذا حقيقياً بالنسبة لي عندما تتبعت <strong>خطأ فرط التخصيص (overfitting)</strong> في نموذج تنبؤ بنية الشراء والذي كان يفسد نتائجنا بصمت — لا يوجد خطأ واضح، مجرد نموذج يبدو جيداً حتى يتوقف عن ذلك. هذا النوع من المشاكل، حيث لا توجد الإجابة في أي برنامج تعليمي، هو ما أجده الأكثر إثارة للاهتمام في هذا المجال.",
      para3: "أعمل بشكل أساسي مع <strong>Python و Pandas و NumPy و Scikit-learn</strong>، مع أساس قوي في <strong>الإحصاء</strong> وخبرة عملية في بناء <strong>مسارات التعلم الآلي الشاملة (end-to-end ML pipelines)</strong>. أستكشف حالياً <strong>نشر نماذج التعلم الآلي (ML deployment)</strong> والممارسات الهندسية في العالم الحقيقي.",
      para4: "هدفي التالي هو المساهمة في <strong>مشاريع التعلم الآلي مفتوحة المصدر</strong> — خاصة في المعالجة المسبقة للبيانات، وتقييم النماذج، ومسارات التعلم الآلي الكلاسيكية — وهي مجالات يمكنني فيها إضافة قيمة حقيقية والنمو جنباً إلى جنب مع المهندسين الذين يقومون بذلك بالفعل على نطاق واسع.",
      facts: [
        { icon: '🎓', label: 'التعليم', val: 'بكالوريوس علوم الحاسوب — جامعة المنصورة' },
        { icon: '🌍', label: 'الموقع', val: 'مصر' },
        { icon: '🧬', label: 'التركيز', val: 'حلول التعلم الآلي والذكاء الاصطناعي' },
        { icon: '🔭', label: 'الهدف المهني', val: 'المساهمة في مشاريع الذكاء الاصطناعي وعلم البيانات' },
      ],
      connect: '🤝 تواصل معي',
      downloadCV: '📄 تحميل السيرة الذاتية',
    },

    // Skills
    skills: {
      label: 'ماذا أفعل',
      title1: 'مجموعة ',
      title2: 'أدواتي التقنية',
      subtitle: 'الأدوات والتقنيات التي أعمل بها يومياً',
      toolsTitle: 'الأدوات والتقنيات',
      items: [
        { name: 'بايثون', level: 95, icon: '🐍' },
        { name: 'التعلم الآلي', level: 90, icon: '🤖' },
        { name: 'التعلم العميق', level: 82, icon: '🧠' },
        { name: 'تحليل البيانات والتحليل الاستكشافي', level: 93, icon: '📊' },
        { name: 'SQL', level: 88, icon: '🗄️' },
        { name: 'Scikit-learn', level: 92, icon: '🔬' },
        { name: 'MLflow وعمليات التعلم الآلي', level: 78, icon: '⚡' },
      ],
    },

    // Projects
    projects: {
      label: 'ما بنيته',
      title1: 'مشاريع ',
      title2: 'مميّزة',
      subtitle: 'مجموعة مختارة من مشاريعي في علم البيانات والتعلم الآلي',
      items: [
        {
          id: 1, title: 'التنبؤ بإيجارات المنازل في الهند',
          desc: 'مشروع تعلم آلي شامل من البداية إلى النهاية يتنبأ بأسعار إيجارات المنازل في المدن الهندية الكبرى — من تنظيف البيانات الخام وتدريب النماذج وضبط المعاملات إلى نشر واجهة برمجة التطبيقات وواجهة الويب.',
          tags: ['Python', 'Scikit-learn', 'FastAPI', 'Pandas', 'EDA'], icon: '🏠', color: '#d4a843', github: 'https://github.com/aashour06/Indian-House-Rent-Prediction', demo: '#',
        },
        {
          id: 2, title: 'تحليل سلوك المستخدم',
          desc: 'تطبيق ويب شامل للتعلم الآلي يحلل بيانات سلوك مستخدمي التجارة الإلكترونية ويتنبأ بنية الشراء — يتضمن مقارنة آلية للنماذج وخادم FastAPI وواجهة تفاعلية مع مقياس احتمالية.',
          tags: ['Python', 'XGBoost', 'FastAPI', 'Scikit-learn', 'Pandas'], icon: '📊', color: '#a87c28', github: 'https://github.com/adamelhabian/user-behavior-analytics', demo: '#',
        },
        {
          id: 3, title: 'MediVision-AI',
          desc: 'قيد التطوير حالياً — ترقّبوا المزيد.',
          tags: ['Python', 'Deep Learning', 'AI', 'Healthcare'], icon: '🏥', color: '#f0c674', github: 'https://github.com/aashour06/MediVision-AI', demo: '#',
        },
      ],
    },

    // Posts (AR)
    posts: {
      label: 'مقالات وأفكار',
      title1: 'الـ',
      title2: 'مدونة',
      subtitle: 'مقالات تقنية، تجارب واقعية في التعلم الآلي، وملاحظات برمجية',
      createBtn: 'كتابة مقال جديد',
      filterAll: 'الكل',
      searchPlaceholder: 'ابحث في المنشورات، المواضيع أو الوسوم...',
      noPosts: 'لم يتم العثور على أي منشورات تطابق بحثك.',
      readFull: 'قراءة المنشور بالكامل',
      yourPostBadge: 'منشورك',
      deleteConfirm: 'هل أنت متأكد من رغبتك في حذف هذا المنشور؟',
      deleteBtn: 'حذف',
      readTime: 'دقائق قراءة',
      likes: 'إعجاب',
      publishedOn: 'نُشر في',
      author: 'أحمد علي عاشور',
      shareTooltip: 'نسخ الرابط',
      copiedToast: 'تم نسخ الرابط إلى الحافظة!',
      modalCreateTitle: 'إنشاء منشور جديد',
      modalCreateDesc: 'شارك أفكارك وتجاربك التقنية والحلول التي توصلت إليها.',
      inputTitle: 'عنوان المنشور *',
      inputTitlePlaceholder: 'مثال: حل مشكلة فرط التخصيص باستخدام التحقق المتقاطع والتنظيم',
      inputCategory: 'التصنيف',
      inputTags: 'الوسوم (مفصولة بفواصل)',
      inputTagsPlaceholder: 'مثال: بايثون, تعلم آلي, MLOps',
      inputSummary: 'ملخص موجز *',
      inputSummaryPlaceholder: 'جملة أو جملتان تلخصان الفكرة الجوهرية للمنشور...',
      inputContent: 'محتوى المقال كاملاً *',
      inputContentPlaceholder: 'اكتب تفاصيل المنشور هنا، يمكنك كتابة فقرات ونقاط وملاحظات...',
      submitPublish: 'نشر المنشور',
      cancel: 'إلغاء',
      closeModal: 'إغلاق',
      categories: [
        'التعلم الآلي',
        'علم البيانات',
        'عمليات ونشر النماذج',
        'بايثون وبرمجة',
        'أفكار ونصائح',
      ],
      defaultPosts: [
        {
          id: 'default-post-1',
          title: 'اكتشاف وإصلاح مشكلة فرط التخصيص الخفية في نموذج التنبؤ بنية الشراء',
          category: 'التعلم الآلي',
          date: 'أغسطس 2026',
          readTime: '4 دقائق قراءة',
          tags: ['Scikit-learn', 'Overfitting', 'Evaluation'],
          summary: 'كيف أظهر النموذج دقة 94% أثناء التدريب بينما كان يفشل بصمت في التقييم الفعلي، والخطوات الدقيقة لمعالجة تسريب البيانات وإعادة هندسة الميزات.',
          content: `في مشاريع التعلم الآلي الحقيقية، قد تكون نسب الدقة المرتفعة للغاية هي أول جرس إنذار يجب الانتباه إليه.\n\nأثناء العمل على نموذج للتنبؤ بنية الشراء، بدت منحنيات التدريب ممتازة للغاية — قاربت دقة 94%. ولكن أثناء التحقق المتقاطع على بيانات الاختبار المستقلة، تراجعت كفاءة التنبؤ بشكل غير متوقع، ودون أي رسالة خطأ أو انهيار في الكود.\n\nبعد فحص دقيق وشامل، تبين أن المشكلة تكمن في تسريب البيانات (Data Leakage): إحدى الميزات المحسوبة كانت تعتمد على إشارات زمنية تحدث فقط عند إتمام الجلسة، وهي معلومات يستحيل توفرها أثناء وقت الاستدلال الحقيقي (Inference Time).\n\nالدروس المستفادة:\n1. التحقق الدائم من توفر الميزة في الوقت الفعلي للتنبؤ وليس بعد تجميع البيانات.\n2. الاعتماد على تقسيمات العينات الطبقية (Stratified Splits).\n3. التعامل مع أي قفزة مفاجئة وغير مبررة في الدقة بتدقيق وشك منهجي.\n\nمعالجة هذه المشكلة علمتني أن أثمن مهارة في التعلم الآلي ليست مجرد معرفة أي خوارزمية تختار، بل امتلاك الحدس والتحليل لاكتشاف سبب تصرف النماذج بهذا الشكل.`
        },
        {
          id: 'default-post-2',
          title: 'بناء مسارات تعلم آلي قابلة للتكرار باستخدام Scikit-Learn و MLflow',
          category: 'عمليات ونشر النماذج',
          date: 'يوليو 2026',
          readTime: '5 دقائق قراءة',
          tags: ['MLflow', 'Pipelines', 'Python', 'أفضل الممارسات'],
          summary: 'لماذا يعد الانتقال من تجارب دفاتر Jupyter غير المنظمة إلى مسارات برمجية موثقة ومقاسة هو النقلة الأهم لكل مهندس تعلم آلي.',
          content: `دفاتر الملاحظات (Jupyter Notebooks) رائعة للاستكشاف الأولي للبيانات، لكنها قد تتحول إلى فوضى عند تتبع التجارب ونماذج التدريب والميزات.\n\nأثناء إعداد مشروع التخرج مع مبادرة مصر الرقمية DEPI، أحدث دمج أدوات MLflow مع مسارات Scikit-Learn فارقاً كبيراً:\n- تتبع التجارب (Experiment Tracking): تسجيل تلقائي للمعلمات الفائقة ومقاييس الأداء (F1, ROC-AUC).\n- كبسلة المعالجة المسبقة داخل كائنات Pipeline لتفادي تسريب البيانات نهائياً.\n- إدارة ومتابعة إصدارات النماذج (Model Versioning) لضمان سهولة النشر والرجوع إلى النسخ السابقة.\n\nمعاملة كود التعلم الآلي بنفس معايير هندسة البرمجيات الإنتاجية هو الفارق بين النموذج التجريبي والنظام الموثوق.`
        },
        {
          id: 'default-post-3',
          title: 'عندما لا تعني دقة 99% أن النموذج جيد',
          category: 'التعلم الآلي',
          date: 'يونيو 2026',
          readTime: '6 دقائق قراءة',
          tags: ['\u0627\u0644\u062A\u0639\u0644\u0645 \u0627\u0644\u0622\u0644\u064A', '\u0627\u0644\u062A\u0642\u064A\u064A\u0645', '\u0627\u0644\u062A\u0635\u0646\u064A\u0641', '\u0627\u0644\u0645\u0642\u0627\u064A\u064A\u0633'],
          summary: 'لماذا قد تكون دقة 99% بلا معنى في مجموعات البيانات غير المتوازنة، وكيف تكشف مقاييس مثل Precision وRecall وF1 عن الأداء الحقيقي لنموذج التصنيف.',
          content: `\u0646\u0645\u0648\u0630\u062C \u062A\u0639\u0644\u0645 \u0622\u0644\u064A \u064A\u062D\u0642\u0642 \u062F\u0642\u0629 99% \u064A\u0628\u062F\u0648 \u0645\u0628\u0647\u0631\u0627\u064B.\n\n\u0644\u0643\u0646 \u0641\u064A \u0628\u0639\u0636 \u0627\u0644\u062D\u0627\u0644\u0627\u062A\u060C \u0642\u062F \u064A\u0643\u0648\u0646 \u0647\u0630\u0627 \u0627\u0644\u0631\u0642\u0645 \u0628\u0644\u0627 \u0645\u0639\u0646\u0649 \u062A\u0642\u0631\u064A\u0628\u0627\u064B.\n\n\u0627\u0644\u0633\u0628\u0628 \u0628\u0633\u064A\u0637:\n\n\u0627\u0644\u062F\u0642\u0629 (Accuracy) \u062A\u062E\u0628\u0631\u0646\u0627 \u0628\u0639\u062F\u062F \u0627\u0644\u062A\u0646\u0628\u0624\u0627\u062A \u0627\u0644\u0635\u062D\u064A\u062D\u0629\u060C \u0644\u0643\u0646\u0647\u0627 \u0644\u0627 \u062A\u062E\u0628\u0631\u0646\u0627 \u062F\u0627\u0626\u0645\u0627\u064B \u0645\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0645\u0641\u064A\u062F\u0627\u064B.\n\n\u0645\u062B\u0627\u0644 \u0628\u0633\u064A\u0637\n\n\u062A\u062E\u064A\u0644 \u0623\u0646\u0646\u0627 \u0646\u0628\u0646\u064A \u0646\u0645\u0648\u0630\u062C\u0627\u064B \u0644\u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0644\u064A\u0629.\n\n\u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649:\n\n\u2022 99,000 \u0645\u0639\u0627\u0645\u0644\u0629 \u0634\u0631\u0639\u064A\u0629\n\u2022 1,000 \u0645\u0639\u0627\u0645\u0644\u0629 \u0627\u062D\u062A\u064A\u0627\u0644\u064A\u0629\n\n\u0644\u0646\u0641\u062A\u0631\u0636 \u0623\u0646 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u064A\u062A\u0646\u0628\u0623 \u0628\u0640 \u201C\u0634\u0631\u0639\u064A\u0629\u201D \u0644\u0643\u0644 \u0645\u0639\u0627\u0645\u0644\u0629.\n\n\u0633\u064A\u0635\u0646\u0641 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D \u062C\u0645\u064A\u0639 \u0627\u0644\u0640 99,000 \u0645\u0639\u0627\u0645\u0644\u0629 \u0634\u0631\u0639\u064A\u0629.\n\n\u0633\u062A\u0643\u0648\u0646 \u062F\u0642\u062A\u0647:\n\n99,000 / 100,000 = 99%\n\n\u0625\u0630\u0627\u064B \u0644\u062F\u064A\u0646\u0627 \u0646\u0645\u0648\u0630\u062C \u0628\u062F\u0642\u0629 99% \u0644\u0627 \u064A\u0643\u062A\u0634\u0641 \u0623\u064A \u0645\u0639\u0627\u0645\u0644\u0629 \u0627\u062D\u062A\u064A\u0627\u0644\u064A\u0629.\n\n\u0628\u0648\u0636\u0648\u062D\u060C \u0647\u0630\u0627 \u0644\u064A\u0633 \u0646\u0638\u0627\u0645 \u0643\u0634\u0641 \u0627\u062D\u062A\u064A\u0627\u0644 \u0645\u0641\u064A\u062F.\n\n\u0627\u0644\u0646\u0638\u0631 \u0641\u064A\u0645\u0627 \u0648\u0631\u0627\u0621 \u0627\u0644\u062F\u0642\u0629\n\n\u0641\u064A \u0645\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u060C \u0639\u0627\u062F\u0629\u064B \u0645\u0627 \u0623\u0646\u0638\u0631 \u0625\u0644\u0649 \u0645\u0635\u0641\u0648\u0641\u0629 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0643 (Confusion Matrix) \u0623\u0648\u0644\u0627\u064B.\n\n\u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0623\u0631\u0628\u0639 \u0646\u062A\u0627\u0626\u062C \u0645\u0647\u0645\u0629:\n\nTN (\u0633\u0644\u0628\u064A \u062D\u0642\u064A\u0642\u064A) \u2014 FP (\u0625\u064A\u062C\u0627\u0628\u064A \u0643\u0627\u0630\u0628)\nFN (\u0633\u0644\u0628\u064A \u0643\u0627\u0630\u0628) \u2014 TP (\u0625\u064A\u062C\u0627\u0628\u064A \u062D\u0642\u064A\u0642\u064A)\n\n\u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u0642\u064A\u0645\u060C \u064A\u0645\u0643\u0646\u0646\u0627 \u062D\u0633\u0627\u0628 \u0645\u0642\u0627\u064A\u064A\u0633 \u0623\u0643\u062B\u0631 \u0625\u0641\u0627\u062F\u0629.\n\n\u0627\u0644\u062F\u0642\u0629 \u0627\u0644\u0645\u0648\u062C\u0628\u0629 (Precision)\n\n\u062A\u062C\u064A\u0628 \u0639\u0644\u0649: \u201C\u0639\u0646\u062F\u0645\u0627 \u064A\u062A\u0646\u0628\u0623 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0628\u0625\u064A\u062C\u0627\u0628\u064A\u060C \u0643\u0645 \u0645\u0631\u0629 \u064A\u0643\u0648\u0646 \u0635\u062D\u064A\u062D\u0627\u064B\u061F\u201D\n\nPrecision = TP / (TP + FP)\n\n\u0627\u0644\u0627\u0633\u062A\u0631\u062C\u0627\u0639 (Recall)\n\n\u064A\u062C\u064A\u0628 \u0639\u0644\u0649: \u201C\u0645\u0646 \u0628\u064A\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0625\u064A\u062C\u0627\u0628\u064A\u0629 \u0627\u0644\u0641\u0639\u0644\u064A\u0629\u060C \u0643\u0645 \u0648\u062C\u062F \u0627\u0644\u0646\u0645\u0648\u0630\u062C\u061F\u201D\n\nRecall = TP / (TP + FN)\n\n\u0645\u0642\u064A\u0627\u0633 F1\n\n\u064A\u062C\u0645\u0639 F1 \u0628\u064A\u0646 \u0627\u0644\u062F\u0642\u0629 \u0627\u0644\u0645\u0648\u062C\u0628\u0629 \u0648\u0627\u0644\u0627\u0633\u062A\u0631\u062C\u0627\u0639:\n\nF1 = 2 \u00D7 (Precision \u00D7 Recall) / (Precision + Recall)\n\n\u064A\u0643\u0648\u0646 \u0645\u0641\u064A\u062F\u0627\u064B \u0628\u0634\u0643\u0644 \u062E\u0627\u0635 \u0639\u0646\u062F\u0645\u0627 \u0646\u0647\u062A\u0645 \u0628\u0645\u0648\u0627\u0632\u0646\u0629 \u0627\u0644\u0625\u064A\u062C\u0627\u0628\u064A\u0627\u062A \u0627\u0644\u0643\u0627\u0630\u0628\u0629 \u0648\u0627\u0644\u0633\u0644\u0628\u064A\u0627\u062A \u0627\u0644\u0643\u0627\u0630\u0628\u0629.\n\n\u0627\u0644\u0639\u062A\u0628\u0629 \u062A\u063A\u064A\u0631 \u0643\u0644 \u0634\u064A\u0621\n\n\u0641\u064A \u0643\u062B\u064A\u0631 \u0645\u0646 \u0646\u0645\u0627\u0630\u062C \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u060C \u0627\u0644\u062A\u0646\u0628\u0624 \u0644\u064A\u0633 \u0628\u0628\u0633\u0627\u0637\u0629 0 \u0623\u0648 1. \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u064A\u0646\u062A\u062C \u0627\u062D\u062A\u0645\u0627\u0644\u0627\u064B \u0623\u0648\u0644\u0627\u064B.\n\n\u0645\u062B\u0627\u0644:\n\n\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629 A \u2192 0.91\n\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629 B \u2192 0.63\n\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629 C \u2192 0.21\n\n\u0628\u0639\u062A\u0628\u0629 0.50:\n0.91 \u2192 \u0625\u064A\u062C\u0627\u0628\u064A\n0.63 \u2192 \u0625\u064A\u062C\u0627\u0628\u064A\n0.21 \u2192 \u0633\u0644\u0628\u064A\n\n\u0644\u0643\u0646 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0639\u062A\u0628\u0629 \u0625\u0644\u0649 0.80 \u064A\u063A\u064A\u0631 \u0627\u0644\u062A\u0646\u0628\u0624\u0627\u062A:\n0.91 \u2192 \u0625\u064A\u062C\u0627\u0628\u064A\n0.63 \u2192 \u0633\u0644\u0628\u064A\n0.21 \u2192 \u0633\u0644\u0628\u064A\n\n\u0625\u0630\u0627\u064B \u0627\u0644\u0639\u062A\u0628\u0629 \u064A\u0645\u0643\u0646\u0647\u0627 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062A\u0648\u0627\u0632\u0646 \u0628\u064A\u0646 \u0627\u0644\u062F\u0642\u0629 \u0627\u0644\u0645\u0648\u062C\u0628\u0629 \u0648\u0627\u0644\u0627\u0633\u062A\u0631\u062C\u0627\u0639.\n\n\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0642\u064A\u0627\u0633 \u201C\u0623\u0641\u0636\u0644\u201D \u0639\u0627\u0644\u0645\u064A\n\n\u0627\u0644\u0645\u0642\u064A\u0627\u0633 \u0627\u0644\u0635\u062D\u064A\u062D \u064A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0643\u0644\u0629.\n\n\u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A \u2014 \u062A\u0641\u0648\u064A\u062A \u062D\u0627\u0644\u0629 \u0625\u064A\u062C\u0627\u0628\u064A\u0629 \u062D\u0642\u064A\u0642\u064A\u0629 \u0642\u062F \u064A\u0643\u0648\u0646 \u0645\u0643\u0644\u0641\u0627\u064B \u0644\u0644\u063A\u0627\u064A\u0629. \u0644\u0630\u0627 \u0642\u062F \u0646\u0639\u0637\u064A \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629 \u0644\u0640: \u0627\u0633\u062A\u0631\u062C\u0627\u0639 \u0639\u0627\u0644\u064D.\n\n\u0643\u0634\u0641 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0645\u0632\u0639\u062C \u2014 \u0625\u0631\u0633\u0627\u0644 \u0628\u0631\u064A\u062F \u0645\u0647\u0645 \u0644\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0645\u0632\u0639\u062C \u0628\u0627\u0644\u062E\u0637\u0623 \u0623\u0645\u0631 \u0645\u062D\u0628\u0637. \u0644\u0630\u0627 \u0642\u062F \u0646\u0647\u062A\u0645 \u0623\u0643\u062B\u0631 \u0628\u0640: \u062F\u0642\u0629 \u0645\u0648\u062C\u0628\u0629 \u0639\u0627\u0644\u064A\u0629.\n\n\u0643\u0634\u0641 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0644 \u2014 \u0642\u062F \u0646\u062D\u062A\u0627\u062C \u0644\u0645\u0648\u0627\u0632\u0646\u0629 \u0627\u0644\u0625\u064A\u062C\u0627\u0628\u064A\u0627\u062A \u0627\u0644\u0643\u0627\u0630\u0628\u0629 \u0648\u0627\u0644\u0633\u0644\u0628\u064A\u0627\u062A \u0627\u0644\u0643\u0627\u0630\u0628\u0629. \u0644\u0630\u0627: Precision + Recall + F1 + \u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u064A\u0645\u0643\u0646\u0647\u0627 \u062A\u0642\u062F\u064A\u0645 \u062A\u0642\u064A\u064A\u0645 \u0623\u0641\u0636\u0644.\n\n\u0645\u0627 \u062A\u0639\u0644\u0645\u062A\u0647 \u0645\u0646 \u0647\u0630\u0627\n\n\u0645\u0646 \u0623\u0643\u0628\u0631 \u0627\u0644\u062F\u0631\u0648\u0633 \u0641\u064A \u0627\u0644\u062A\u0639\u0644\u0645 \u0627\u0644\u0622\u0644\u064A \u0623\u0646 \u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0642\u0631\u0627\u0631 \u062E\u0627\u0635 \u0628\u0627\u0644\u0645\u0634\u0643\u0644\u0629.\n\n\u0644\u0627 \u064A\u0646\u0628\u063A\u064A \u0627\u0639\u062A\u0628\u0627\u0631 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0646\u0627\u062C\u062D\u0627\u064B \u0644\u0645\u062C\u0631\u062F \u0623\u0646\u0647 \u064A\u0646\u062A\u062C \u062F\u0631\u062C\u0629 \u0639\u0627\u0644\u064A\u0629.\n\n\u0642\u0628\u0644 \u062A\u0642\u064A\u064A\u0645 \u0646\u0645\u0648\u0630\u062C\u060C \u0623\u062D\u062A\u0627\u062C \u0644\u0641\u0647\u0645:\n\n\u2022 \u0645\u0627\u0630\u0627 \u064A\u0639\u0646\u064A \u0627\u0644\u0625\u064A\u062C\u0627\u0628\u064A \u0627\u0644\u0643\u0627\u0630\u0628\u061F\n\u2022 \u0645\u0627\u0630\u0627 \u064A\u0639\u0646\u064A \u0627\u0644\u0633\u0644\u0628\u064A \u0627\u0644\u0643\u0627\u0630\u0628\u061F\n\u2022 \u0623\u064A \u062E\u0637\u0623 \u0623\u0643\u062B\u0631 \u062A\u0643\u0644\u0641\u0629\u061F\n\u2022 \u0647\u0644 \u0645\u062C\u0645\u0648\u0639\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0645\u062A\u0648\u0627\u0632\u0646\u0629\u061F\n\u2022 \u0623\u064A \u0645\u0642\u064A\u0627\u0633 \u064A\u0645\u062B\u0644 \u0641\u0639\u0644\u0627\u064B \u0647\u062F\u0641 \u0627\u0644\u0639\u0645\u0644\u061F\n\u2022 \u0645\u0627\u0630\u0627 \u064A\u062D\u062F\u062B \u0639\u0646\u062F \u062A\u063A\u064A\u064A\u0631 \u0639\u062A\u0628\u0629 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u061F\n\n\u0627\u0644\u062E\u0644\u0627\u0635\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629\n\n\u0646\u0645\u0648\u0630\u062C \u0627\u0644\u062A\u0639\u0644\u0645 \u0627\u0644\u0622\u0644\u064A \u0644\u064A\u0633 \u062C\u064A\u062F\u0627\u064B \u0644\u0623\u0646\u0647 \u064A\u0645\u0644\u0643 \u0645\u0642\u064A\u0627\u0633\u0627\u064B \u0639\u0627\u0644\u064A\u0627\u064B.\n\n\u0647\u0648 \u062C\u064A\u062F \u0639\u0646\u062F\u0645\u0627 \u064A\u0639\u0643\u0633 \u062A\u0642\u064A\u064A\u0645\u0647 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0627\u0644\u062A\u064A \u064A\u064F\u0641\u062A\u0631\u0636 \u0623\u0646 \u064A\u062D\u0644\u0647\u0627.\n\n\u0627\u0644\u0647\u062F\u0641 \u0644\u064A\u0633 \u062A\u0639\u0638\u064A\u0645 \u0631\u0642\u0645. \u0627\u0644\u0647\u062F\u0641 \u0647\u0648 \u0628\u0646\u0627\u0621 \u0646\u0645\u0648\u0630\u062C \u064A\u062A\u062E\u0630 \u0642\u0631\u0627\u0631\u0627\u062A \u0645\u0641\u064A\u062F\u0629.`
        }
      ]
    },

    // Contact
    contact: {
      label: 'لنتحدّث',
      title1: 'تواصل ',
      title2: 'معي',
      subtitle: 'لديك مشروع في ذهنك؟ لنبنِ شيئاً مذهلاً معاً.',
      cardTitle: 'لنعمل معاً 🤝',
      cardText: 'أنا دائماً منفتح لمناقشة مشاريع علم البيانات الجديدة، والأفكار الإبداعية، أو فرص المشاركة في رؤيتك.',
      details: [
        { icon: '🌍', label: 'الموقع', val: 'مصر' },
        { icon: '📧', label: 'البريد', val: 'a7med3shour10@gmail.com' },
        { icon: '🔗', label: 'لينكد إن', val: 'linkedin.com/in/ahmed-ali-ashour', link: 'https://www.linkedin.com/in/ahmed-ali-ashour' },
      ],
      formTitle: '✉️ أرسل رسالة',
      labelName: 'اسمك',
      labelEmail: 'البريد الإلكتروني',
      labelMessage: 'الرسالة',
      placeholderName: 'محمد أحمد',
      placeholderEmail: 'example@email.com',
      placeholderMessage: 'أخبرني عن مشروعك...',
      btnIdle: 'أرسل الرسالة',
      btnSending: 'جارٍ الإرسال…',
      btnSent: 'تم الإرسال بنجاح!',
      btnError: 'فشل — حاول مجدداً',
    },

    // Experience (AR)
    experience: {
      label: 'مسيرتي',
      title1: 'الخبرة ',
      title2: 'العملية',
      subtitle: 'الأدوار التي طبّقت فيها مهاراتي في الذكاء الاصطناعي وعلم البيانات',
      items: [
        {
          icon: '🧠',
          type: 'تدريب',
          date: 'يوليو 2026 – حتى الآن',
          role: 'متدرّب تعلم آلي من مايكروسوفت',
          org: 'مبادرة مصر الرقمية (DEPI)',
          duties: [
            'اكتسبت خبرة عملية في التعلم الآلي وعلم البيانات والذكاء الاصطناعي.',
            'طبّقت بايثون ومعالجة البيانات والتحليل الاستكشافي وهندسة الميزات وتقييم النماذج.',
            'تعرّضت لمجالات متقدمة: التعلم العميق، NLP، رؤية الحاسوب، Azure AI، MLOps، MLflow، وHugging Face.',
            'نفّذت سير عمل التعلم الآلي الكاملة من خلال مهام تدريبية مستهدفة.',
          ],
          tags: ['Python', 'ML', 'NLP', 'Azure AI', 'MLflow', 'Hugging Face'],
        },
        {
          icon: '🤖',
          type: 'عضو',
          date: 'يناير 2026 – حتى الآن',
          role: 'عضو الذكاء الاصطناعي وعلم البيانات',
          org: 'فريق CIS جامعة المنصورة',
          duties: [
            'تعاونت مع فريق متخصص لتطوير حلول قائمة على البيانات ومشاريع تعلم آلي.',
            'طبّقت مفاهيم التعلم الآلي وأدوات بايثون لحل مشكلات عملية.',
            'شاركت بفاعلية في الأبحاث الجماعية والنقاشات والتطبيق التقني.',
          ],
          tags: ['Python', 'علم البيانات', 'تعلم آلي', 'عمل جماعي'],
        },
        {
          icon: '🎨',
          type: 'مشرف',
          date: 'يوليو 2026 – حتى الآن',
          role: 'مشرف مصممين جرافيك',
          org: 'فريق CIS جامعة المنصورة',
          duties: [
            'أشرفت على فريق التصميم الجرافيكي ونسّقت مهام التصميم.',
            'راجعت التصاميم وقدّمت ملاحظات قابلة للتطبيق للحفاظ على الجودة والاتساق.',
            'تعاونت على المحتوى المرئي للأنشطة والفعاليات التنظيمية.',
          ],
          tags: ['قيادة', 'إشراف تصميم', 'تواصل بصري'],
        },
        {
          icon: '📡',
          type: 'تدريب',
          date: 'يوليو 2026 – أغسطس 2026',
          role: 'متدرّب ذكاء اصطناعي لدى المعهد القومي للاتصالات',
          org: 'المعهد القومي للاتصالات (NTI)',
          duties: [
            'بناء معرفة تأسيسية في الذكاء الاصطناعي، والتعلم الآلي، والتعلم العميق.',
            'العمل باستخدام Python و Pandas و NumPy لتحليل البيانات والمعالجة المسبقة.',
            'تطوير فهم شامل لتنظيف البيانات، وهندسة البيانات، وهندسة الميزات.',
            'استكشاف مراحل تطوير نماذج التعلم الآلي وتدريبها وتقييمها.',
            'اكتساب نظرة عامة على دورة عمل الذكاء الاصطناعي الشاملة (End-to-End AI Workflow).',
          ],
          tags: ['ذكاء اصطناعي', 'تعلم آلي', 'تعلم عميق', 'Python', 'هندسة الميزات'],
        },
      ],
    },

    // Certificates (AR)
    certificates: {
      label: 'الإنجازات',
      title1: 'شهاداتي ',
      title2: 'المهنية',
      subtitle: 'شهادات احترافية تُثبت خبرتي في التعلم الآلي وعلم البيانات',
      viewCert: '🔗 عرض الشهادة',
      pending: '⏳ الرابط قريباً',
      items: [
        {
          icon: '🧠',
          issuer: 'Coursera — DeepLearning.AI',
          title: 'خوارزميات التعلم المتقدمة',
          url: 'https://coursera.org/share/c696abefadc0dd1d3dad36c171e4efee',
        },
        {
          icon: '🤖',
          issuer: 'Coursera — DeepLearning.AI',
          title: 'التعلم الآلي الخاضع للإشراف: الانحدار والتصنيف',
          url: 'https://coursera.org/share/ef225b25775c34b280aa821502e92841',
        },
        {
          icon: '🔬',
          issuer: 'DataCamp',
          title: 'التعلم الخاضع للإشراف مع Scikit-learn',
          url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/018de780cbf7a4ae7ae8064b999ead819da5ddc3',
        },
        {
          icon: '📐',
          issuer: 'Coursera',
          title: 'رياضيات التعلم الآلي: حساب التفاضل متعدد المتغيرات',
          url: 'https://coursera.org/share/732bdff901d80b965011aae99a9cb358',
        },
        {
          icon: '⚡',
          issuer: 'DataCamp',
          title: 'هندسة الميزات للتعلم الآلي بلغة بايثون',
          url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/0be87a25776ebb984e08bec03b5fd74df0906815',
        },
        {
          icon: '🧮',
          issuer: 'Coursera',
          title: 'رياضيات التعلم الآلي: الجبر الخطي',
          url: 'https://coursera.org/share/ed75db84de2205780efe88efeeba7543',
        },
      ],
    },

    // Footer
    footer: {
      tagline: '⚡ عالم بيانات · مهندس تعلم آلي',
      copyright: '© {year} أحمد علي عاشور. جميع الحقوق محفوظة.',
      links: ['الرئيسية', 'عنّي', 'المهارات', 'الخبرات', 'المشاريع', 'المدونة', 'الشهادات', 'تواصل'],
    },
  },
}

export default translations
