# Ahmed Ali Ashour — Data Science & ML Engineering Portfolio

🔗 **Live Demo**: [ahmed-ali-ashour.vercel.app](https://ahmed-ali-ashour.vercel.app/)

A bilingual (English & Arabic) responsive portfolio website showcasing machine learning models, data science projects, and analytical skills. The application is built using React 19, Vite, and Vanilla CSS, featuring custom interactive animations, a particle background, and a backend-free contact system powered by EmailJS.

---

## 🌟 Key Features

*   **Bilingual Localization**: Seamlessly switches between English (LTR) and Arabic (RTL) with dynamic language translation context.
*   **Immersive Interactions**: Includes a customized cursor tracker, dynamic page loading indicator, and page scroll progress indicator.
*   **Vibrant Dark Theme**: Designed with smooth gradients, custom CSS properties, subtle micro-animations, and glassmorphic card overlays.
*   **Interactive Particle Background**: Equipped with lightweight floating particles to elevate visual feedback.
*   **Detailed Project Showcase**: Dynamically populated project grids highlighting technical tools, methodologies, and source code / demonstration links.
*   **Professional Experience Timeline**: Structured timeline displaying work history, roles, and key accomplishments.
*   **Certificates Gallery**: Visual showcase of professional certifications and achievements.
*   **Blog / Posts Section**: Read-only curated content section for articles, insights, and technical write-ups with search, category filtering, and likes.
*   **Downloadable CV**: One-click PDF download of the full CV directly from the About section.
*   **Functional Contact Form**: Direct message delivery to the portfolio owner using client-side EmailJS integration.

---

## 🛠️ Technology Stack

*   **Core**: React 19, Vite 7, HTML5, Vanilla CSS3 (Custom Variables).
*   **Localization**: React Context API for localized dictionary mapping.
*   **Form Communication**: `@emailjs/browser` (direct SMTP emailing without a custom backend server).
*   **Icons & Visuals**: UTF-8 and CSS-drawn illustrations.

---

## 📂 Repository Structure

```text
D:\my_web\
├── public/                 # Static assets and icons
│   ├── images/             # Image assets
│   └── Ahmed_Ali_Ashour_CV_ATS.pdf  # Downloadable CV file
├── src/
│   ├── assets/             # Brand logos and general media assets
│   ├── components/         # Reusable structural and layout components
│   │   ├── About.jsx       # Biography, background context, quick facts & CV download
│   │   ├── Certificates.jsx# Professional certifications gallery
│   │   ├── Contact.jsx     # Contact form with EmailJS client-side validation
│   │   ├── CustomCursor.jsx# Mouse-tracking interactive canvas cursor
│   │   ├── Experience.jsx  # Professional experience timeline
│   │   ├── Footer.jsx      # Sticky copyright and navigation footer
│   │   ├── Hero.jsx        # Dynamic role typing effect and primary CTA
│   │   ├── Navbar.jsx      # Navigation header with language toggling support
│   │   ├── PageLoader.jsx  # Intro spinner / animation on initial load
│   │   ├── ParticleBackground.jsx # Smooth visual backdrop particle animator
│   │   ├── Posts.jsx        # Blog articles and technical write-ups
│   │   ├── Projects.jsx    # Display grid for project portfolios
│   │   ├── ScrollProgress.jsx # Top scroll depth bar indicator
│   │   └── Skills.jsx      # Graph-based capability overview
│   ├── i18n/               # Internationalization files
│   │   ├── LanguageContext.jsx # Provider mapping state/functions for translation
│   │   └── translations.js # Structured dictionaries for English and Arabic locales
│   ├── App.css             # Main component layout styles
│   ├── App.jsx             # Core view orchestrator containing page sections
│   ├── index.css           # Global typography, resets, grids, and themes
│   └── main.jsx            # DOM mount entrypoint
├── index.html              # Core application wrapper shell
├── vite.config.js          # Vite build parameters
├── package.json            # Node dependency tree and script commands
└── README.md               # Documentation guide
```

---

## 📊 Projects Showcased

The portfolio displays 6 key data science and AI applications:

1.  **Customer Churn Predictor**: Machine learning pipeline utilizing XGBoost & SHAP to analyze and predict customer churn.
2.  **Sentiment Analysis Engine**: Fine-tuned BERT-based Natural Language Processing (NLP) model trained on Arabic and English reviews.
3.  **Sales Forecasting Dashboard**: Time-series forecasting application employing Prophet and Long Short-Term Memory (LSTM) networks.
4.  **Anomaly Detection System**: Unsupervised model detecting financial fraud using Isolation Forests and Autoencoders.
5.  **Computer Vision OCR**: Preprocessing pipeline coupled with CNN and Tesseract OCR optimized for digitizing Arabic documents.
6.  **Real-time Data Pipeline**: Kafka and Apache Spark Streaming ETL pipeline processing event-driven message architectures.

---

## 🚀 Getting Started

Follow the instructions below to run the portfolio on your local machine.

### Prerequisites

*   **Node.js**: Ensure Node.js (version 18.0 or above) is installed. Check with:
    ```bash
    node -v
    ```

### Installation

1.  Clone the repository or navigate to the directory:
    ```bash
    cd D:\my_web
    ```

2.  Install the required dependencies:
    ```bash
    npm install
    ```

### Development Environment

To start the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Once started, navigate to `http://localhost:5173` in your web browser.

### Production Build

To compile and bundle optimized static assets for hosting:
```bash
npm run build
```
The output files will be written to the `dist` directory. You can preview the production bundle locally with:
```bash
npm run preview
```

---

## ⚙️ Configuration & Customization

### Localized Text & Projects
To modify biographical descriptions, technical skills, or featured projects, edit the dictionary definitions inside:
*   [translations.js](file:///D:/my_web/src/i18n/translations.js)

### CV Download
The downloadable CV is served from the `public/` directory. To update it, replace the file at:
*   `public/Ahmed_Ali_Ashour_CV_ATS.pdf`

The download link is configured in:
*   [About.jsx](file:///D:/my_web/src/components/About.jsx#L75)

### Social Media & Links
To update linked social profiles (LinkedIn, GitHub, Kaggle, etc.), edit the `socials` array in:
*   [Contact.jsx](file:///D:/my_web/src/components/Contact.jsx#L18-L23)

### EmailJS Contact Form
The contact page uses EmailJS. The credentials are pre-configured, but can be updated or replaced by changing the following variables:
*   [Contact.jsx](file:///D:/my_web/src/components/Contact.jsx#L13-L15)
    ```javascript
    const EMAILJS_SERVICE_ID = 'service_5v7h9yf';
    const EMAILJS_TEMPLATE_ID = 'template_crvcikv';
    const EMAILJS_PUBLIC_KEY = '7Xfb-CU7ctjRWianV';
    ```
