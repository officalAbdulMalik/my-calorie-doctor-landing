import './styles.css';

type Feature = {
  title: string;
  copy: string;
  icon: string;
  image?: string;
  imageAlt?: string;
};

type Step = {
  number: string;
  title: string;
  copy: string;
  icon: string;
  preview: string;
};

type Review = {
  name: string;
  role: string;
  quote: string;
};

type Faq = {
  question: string;
  answer: string;
};

const supportEmail = 'support@mycaloriedoctor.com';

const features: Feature[] = [
  {
    title: 'Smart Meal Scan',
    copy: 'Take a photo of your meal and get quick nutrition estimates powered by AI. No more manual searching for ingredients or portion sizes.',
    icon: '◎',
  },
  {
    title: 'Calorie & Macro Tracking',
    copy: 'Track daily calories and macros with a dashboard designed for fast, simple decisions. Real-time feedback helps you stay on track.',
    icon: '◫',
    image: '/images/onboarding_slide_1_bowl.png',
    imageAlt: 'Food bowl scan preview',
  },
  {
    title: 'AI Meal Plans',
    copy: 'Create a personalized daily nutrition plan based on your goals and body metrics. Adjust as your progress evolves.',
    icon: '✕',
  },
  {
    title: 'What to Eat Next',
    copy: 'Get meal recommendations that fit the rest of your day. Based on your remaining macros and nutrition preferences, the AI recommends practical next meals.',
    icon: '⌕',
    image: '/images/onboarding_meal_plans_food.jpg',
    imageAlt: 'AI meal plan preview',
  },
  {
    title: 'Progress Tracking',
    copy: 'Follow your consistency, calorie trends, and body progress in one clear place. Beautiful charts make your journey visible and rewarding.',
    icon: '↗',
  },
];

const steps: Step[] = [
  {
    number: '1',
    title: 'Create Your Profile',
    copy: 'Set your specific goals, body metrics, food preferences, and dietary restrictions. Your personalised journey starts here.',
    icon: '◎',
    preview: 'Tell MyCalorieDoctor your goals, body details, food preferences, and daily routine so the app can shape your nutrition plan from the start.',
  },
  {
    number: '2',
    title: 'Log Your Meals',
    copy: 'Scan, search, or speak to log a meal in seconds. No manual calorie counting, just point and log.',
    icon: '◫',
    preview: 'Use image scanning, search, or quick entry to save meals fast. The app turns your logs into clear calorie and macro progress.',
  },
  {
    number: '3',
    title: 'Follow Your Plan',
    copy: 'Receive and follow your AI-generated daily nutrition plan. It evolves with your feedback and progress in real time.',
    icon: '▣',
    preview: 'Your AI-curated nutrition plan adapts daily to keep you on track without boring repetition.',
  },
  {
    number: '4',
    title: 'Track Progress',
    copy: 'Watch your nutrition and wellness stats transform. Celebrate milestones and stay motivated with data-driven insights.',
    icon: '↗',
    preview: 'Review calorie trends, streaks, macros, weight changes, and progress photos so every improvement is easy to understand.',
  },
];

const reviews: Review[] = [
  {
    name: 'Maya R.',
    role: 'Busy professional',
    quote:
      'The scan flow made tracking feel light instead of tedious. I can see calories and macros without turning every meal into homework.',
  },
  {
    name: 'Daniel K.',
    role: 'Strength training',
    quote:
      'The What to Eat Next suggestions are the part I use every day. It helps me make a quick meal choice that still fits my target.',
  },
  {
    name: 'Aisha M.',
    role: 'Wellness routine',
    quote:
      'I like that the app feels calm and visual. Progress tracking keeps me consistent without making the experience feel clinical.',
  },
];

const faqs: Faq[] = [
  {
    question: 'How accurate is the AI meal scan?',
    answer:
      'AI scan results are estimates. Users should review the food, portion size, and nutrition details before saving a log.',
  },
  {
    question: 'Is my data safe and private?',
    answer:
      'MyCalorieDoctor does not sell personal information. Data is processed to provide app functionality, personalization, and support.',
  },
  {
    question: 'Where can I get the app?',
    answer:
      'Use the App Store or Google Play buttons on this page. They can point to the live store listings as soon as the app is published.',
  },
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root was not found.');
}

const landingPage = `
  <header class="site-header">
    <a class="brand" href="/" aria-label="MyCalorieDoctor home">
      <img class="brand-logo" src="/images/app_logo.png" alt="" />
      <span>MyCalorieDoctor</span>
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href="/#features">Features</a>
      <a href="/#how-it-works">How It Works</a>
      <a href="/#download">Download</a>
      <a href="/#privacy">Privacy</a>
      <a href="/contact-support">Contact</a>
    </nav>
    <a class="nav-cta" href="/#download">Get Started</a>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">AI-Powered Tracking</p>
        <h1>MyCalorieDoctor</h1>
        <p class="hero-lede">
          Scan meals, track calories, and follow an AI-powered nutrition plan built around your goals. Achieve vitality through effortless daily tracking.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#download">Get Started Free</a>
          <a class="button button-secondary" href="#features">Explore Features</a>
        </div>
        <p class="trust-note">Built for everyday wellness tracking. Not medical advice.</p>
      </div>

      <div class="hero-art" aria-label="Animated app screen previews">
        <div class="nutrition-board">
          <span>Today’s Nutrition</span>
          <strong>Looking great, keep it up!</strong>
          <div class="board-macro">
            <div><span>Protein</span><b>134g / 160g</b></div>
            <i class="protein-fill"></i>
          </div>
          <div class="board-macro">
            <div><span>Carbohydrates</span><b>210g / 250g</b></div>
            <i class="carbs-fill"></i>
          </div>
          <div class="board-macro">
            <div><span>Fat</span><b>48g / 60g</b></div>
            <i class="fat-fill"></i>
          </div>
          <div class="board-rings">
            <div><b>70%</b><span>Calories</span></div>
            <div><b>50%</b><span>Hydration</span></div>
          </div>
        </div>
        <div class="burn-card">
          <span>🔥</span>
          <small>Calories burned</small>
          <b>386 kcal</b>
          <em>30 min walk + gym</em>
        </div>
        <div class="nutrition-chip chip-protein">45g protein</div>
        <div class="nutrition-chip chip-carbs">60g carbs</div>
        <div class="nutrition-chip chip-fat">35g fat</div>
        <div class="orbit-dot dot-one"></div>
        <div class="orbit-dot dot-two"></div>
        <div class="hero-phone hero-phone-main">
          <div class="phone-island"></div>
          <div class="mock-screen dashboard-screen">
            <div class="mock-header">
              <strong>Dashboard</strong>
              <span>⚙</span>
            </div>
            <div class="date-card">
              <b>May 2026</b>
              <div class="date-row">
                <span>Mon<br><b>18</b></span>
                <span>Tue<br><b>19</b></span>
                <span>Wed<br><b>20</b></span>
                <span class="active">Sat<br><b>23</b></span>
              </div>
            </div>
            <div class="calorie-card">
              <div class="calorie-ring">
                <b>5,500</b>
                <span>Calorie</span>
              </div>
              <div class="cal-row">
                <span>Eaten<br><b>0 Cal</b></span>
                <span>Target<br><b>5500 Cal</b></span>
              </div>
              <div class="macro-bars">
                <i class="fat"></i><i class="carbs"></i><i class="protein"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-phone hero-phone-side progress-mock">
          <div class="phone-island small"></div>
          <div class="mock-screen">
            <div class="mock-header">
              <strong>Progress</strong>
              <span>⚙</span>
            </div>
            <div class="streak-card">🔥 <b>1-day streak</b><small>Nice start. Keep it going today.</small></div>
            <div class="metric-grid">
              <div class="metric-orange"><span>Weight</span><b>156.0 kg</b></div>
              <div><span>Avg Calories</span><b>0</b></div>
              <div><span>BMI</span><b>3.4</b></div>
            </div>
          </div>
        </div>
        <div class="floating-scan-card">
          <img src="/images/onboarding_slide_1_bowl.png" alt="AI scanned burrito bowl" />
          <div>
            <b>720 kcal</b>
            <span>45g protein · 60g carbs</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section feature-section" id="features">
      <div class="section-heading centered">
        <h2>Empowered by Intelligence</h2>
        <p>The next generation of personal nutrition management.</p>
      </div>
      <div class="feature-mosaic">
        ${features
          .map(
            (feature) => `
              <article class="feature-tile ${feature.image ? 'feature-image-tile' : ''}">
                ${
                  feature.image
                    ? `<img src="${feature.image}" alt="${feature.imageAlt ?? ''}" />`
                    : `
                      <div class="feature-symbol">${feature.icon}</div>
                      <h3>${feature.title}</h3>
                      <p>${feature.copy}</p>
                    `
                }
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="section steps-section" id="how-it-works">
      <div class="steps-layout">
        <div class="steps-line">
          ${steps
            .map(
              (step, index) => `
                <article class="step-item ${index === 0 ? 'is-active' : ''}" data-step-index="${index}">
                  <span class="step-number step-${index + 1}">${step.number}</span>
                  <div>
                    <h3>${step.title}</h3>
                    <p>${step.copy}</p>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
        <aside class="steps-preview-card" aria-label="Step preview">
          <span class="steps-preview-icon" id="stepsPreviewIcon">${steps[0].icon}</span>
          <h2 id="stepsPreviewTitle">${steps[0].title}</h2>
          <p id="stepsPreviewCopy">${steps[0].preview}</p>
        </aside>
      </div>
    </section>

    <section class="dashboard-band">
      <div class="dashboard-copy">
        <p class="dashboard-eyebrow">Your Command Centre</p>
        <h2>A Dashboard <span>Built for Life</span></h2>
        <p>Experience a UI that breathes. No clutter, just the data you need to make smarter choices throughout your day.</p>
        <ul>
          <li>Interactive macro breakdowns with trend analysis</li>
          <li>Dynamic water and activity tracking throughout the day</li>
          <li>Smart meal motivations and goal reminders</li>
          <li>Weekly reports delivered straight to your inbox</li>
        </ul>
      </div>
      <div class="dashboard-showcase" aria-label="Dashboard, log history, progress, and scan result previews">
        <article class="showcase-card wide-card">
          <span class="mini-label">Home</span>
          <div class="mini-calorie-ring"><b>5,500</b><small>Calorie</small></div>
          <div class="showcase-macros">
            <span class="fat">Fat 0g</span>
            <span class="carbs">Carb 0g</span>
            <span class="protein">Prot 0g</span>
          </div>
        </article>
        <article class="showcase-card">
          <span class="mini-label">Log History</span>
          <div class="log-row">
            <img src="/images/onboarding_slide_1_bowl.png" alt="Burrito bowl meal" />
            <div><b>Spicy Chicken Bowl</b><small>720 kcal · Breakfast</small></div>
          </div>
        </article>
        <article class="showcase-card orange-card">
          <span>Weight</span>
          <b>156.0 kg</b>
          <small>↑ 0.0kg</small>
        </article>
        <article class="showcase-card scan-detail-card">
          <img src="/images/onboarding_slide_1_bowl.png" alt="AI scan meal details" />
          <div>
            <b>720 kcal</b>
            <small>60g carbs · 45g protein · 35g fat</small>
          </div>
        </article>
      </div>
    </section>

    <section class="section reviews-section">
      <div class="section-heading centered">
        <h2>Loved by Consistent Trackers</h2>
        <p>Realistic, calm nutrition support for people who want clarity without complexity.</p>
      </div>
      <div class="review-grid">
        ${reviews
          .map(
            (review) => `
              <article class="review-card">
                <div class="stars">★★★★★</div>
                <p>“${review.quote}”</p>
                <strong>${review.name}</strong>
                <span>${review.role}</span>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="section download-section" id="download">
      <div class="section-heading centered">
        <h2>Download MyCalorieDoctor</h2>
        <p>Start tracking from your phone. Choose your store and install the app when it becomes available.</p>
      </div>
      <div class="store-grid">
        <a class="store-button" href="mailto:${supportEmail}?subject=iOS%20App%20Access">
          <img src="/images/apple_logo.svg" alt="" />
          <span><small>Download on the</small>App Store</span>
        </a>
        <a class="store-button" href="mailto:${supportEmail}?subject=Android%20App%20Access">
          <img src="/images/google_logo.svg" alt="" />
          <span><small>Get it on</small>Google Play</span>
        </a>
      </div>
      <p class="billing-note">Subscriptions, if offered, are managed securely through Apple App Store or Google Play.</p>
    </section>

    <section class="section faq-section">
      <div class="section-heading centered">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="faq-list">
        ${faqs
          .map(
            (faq) => `
              <details>
                <summary>${faq.question}</summary>
                <p>${faq.answer}</p>
              </details>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="privacy-band" id="privacy">
      <div class="privacy-icon">◇</div>
      <div>
        <h2>Your Privacy Is Our Priority</h2>
        <p>We do not sell your data. Wellness data is used for personalization. AI suggestions may not always be accurate and should be reviewed by the user.</p>
      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo-row">
            <img class="footer-logo" src="/images/app_logo.png" alt="" />
            <strong>MyCalorieDoctor</strong>
          </div>
          <p>AI-powered calorie, macro, and meal planning app for everyday wellness tracking.</p>
          <a href="mailto:${supportEmail}">${supportEmail}</a>
        </div>
        <nav class="footer-column" aria-label="Product links">
          <h3>Product</h3>
          <a href="/#features">Features</a>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#download">Download</a>
          <a href="/#top">App Preview</a>
        </nav>
        <nav class="footer-column" aria-label="Legal links">
          <h3>Legal</h3>
          <a href="https://sites.google.com/view/www-mycaloriedoctor-vom/privacy-policy">Privacy Policy</a>
          <a href="https://sites.google.com/view/www-mycaloriedoctor-vom/terms-conditions">Terms & Conditions</a>
        </nav>
        <div class="footer-column">
          <h3>Support</h3>
          <a href="/contact-support">Contact Support</a>
          <p>Available via email. We reply within 48 hours.</p>
        </div>
      </div>
      <div class="footer-disclaimer">
        <p><strong>Disclaimer:</strong> MyCalorieDoctor is designed for general wellness and nutrition tracking. AI-generated estimates and suggestions may not always be accurate and should be reviewed by the user. This app is not a medical device and does not provide medical advice, diagnosis, or treatment.</p>
      </div>
      <div class="footer-bottom">
        <span>© 2026 MyCalorieDoctor. All rights reserved.</span>
        <span>Available on iOS & Android</span>
      </div>
    </div>
  </footer>
`;

const contactSupportPage = `
  <header class="site-header">
    <a class="brand" href="/" aria-label="MyCalorieDoctor home">
      <img class="brand-logo" src="/images/app_logo.png" alt="" />
      <span>MyCalorieDoctor</span>
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href="/#features">Features</a>
      <a href="/#how-it-works">How It Works</a>
      <a href="/#download">Download</a>
      <a href="/#privacy">Privacy</a>
      <a href="/contact-support">Contact</a>
    </nav>
    <a class="nav-cta" href="/#download">Get Started</a>
  </header>

  <main class="support-page">
    <section class="support-hero">
      <div>
        <p class="eyebrow">Contact Support</p>
        <h1>How can we help?</h1>
        <p class="hero-lede">Send your question to the MyCalorieDoctor support team. Your email app will open with the message ready to send.</p>
      </div>
      <div class="support-card">
        <img src="/images/app_logo.png" alt="" />
        <strong>MyCalorieDoctor Support</strong>
        <span>${supportEmail}</span>
        <p>Available by email. We usually reply within 48 hours.</p>
      </div>
    </section>

    <section class="section contact-section support-form-section">
      <div class="contact-copy">
        <h2>Contact Support</h2>
        <p>Use this form for account questions, app issues, billing help, feature feedback, or partnership requests.</p>
        <div class="contact-meta">
          <strong>Support email</strong>
          <a href="mailto:${supportEmail}">${supportEmail}</a>
        </div>
      </div>
      <form class="contact-form" id="contactForm">
        <label>
          Name
          <input id="contactName" name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input id="contactEmail" name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Message
          <textarea id="contactMessage" name="message" rows="6" placeholder="Tell us what you need help with" required></textarea>
        </label>
        <button class="button button-primary" type="submit">Send Support Email</button>
      </form>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo-row">
            <img class="footer-logo" src="/images/app_logo.png" alt="" />
            <strong>MyCalorieDoctor</strong>
          </div>
          <p>AI-powered calorie, macro, and meal planning app for everyday wellness tracking.</p>
          <a href="mailto:${supportEmail}">${supportEmail}</a>
        </div>
        <nav class="footer-column" aria-label="Product links">
          <h3>Product</h3>
          <a href="/#features">Features</a>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#download">Download</a>
          <a href="/#top">App Preview</a>
        </nav>
        <nav class="footer-column" aria-label="Legal links">
          <h3>Legal</h3>
          <a href="https://sites.google.com/view/www-mycaloriedoctor-vom/privacy-policy">Privacy Policy</a>
          <a href="https://sites.google.com/view/www-mycaloriedoctor-vom/terms-conditions">Terms & Conditions</a>
        </nav>
        <div class="footer-column">
          <h3>Support</h3>
          <a href="/contact-support">Contact Support</a>
          <p>Available via email. We reply within 48 hours.</p>
        </div>
      </div>
      <div class="footer-disclaimer">
        <p><strong>Disclaimer:</strong> MyCalorieDoctor is designed for general wellness and nutrition tracking. AI-generated estimates and suggestions may not always be accurate and should be reviewed by the user. This app is not a medical device and does not provide medical advice, diagnosis, or treatment.</p>
      </div>
      <div class="footer-bottom">
        <span>© 2026 MyCalorieDoctor. All rights reserved.</span>
        <span>Available on iOS & Android</span>
      </div>
    </div>
  </footer>
`;

const bindContactForm = () => {
  const contactForm = document.querySelector<HTMLFormElement>('#contactForm');

  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector<HTMLInputElement>('#contactName')?.value.trim() ?? '';
    const email = document.querySelector<HTMLInputElement>('#contactEmail')?.value.trim() ?? '';
    const message = document.querySelector<HTMLTextAreaElement>('#contactMessage')?.value.trim() ?? '';

    const subject = encodeURIComponent('MyCalorieDoctor Contact Request');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
  });
};

let stepRotationTimer: number | undefined;

const bindStepTabs = () => {
  window.clearInterval(stepRotationTimer);

  const stepItems = Array.from(document.querySelectorAll<HTMLElement>('.step-item[data-step-index]'));
  const previewIcon = document.querySelector<HTMLElement>('#stepsPreviewIcon');
  const previewTitle = document.querySelector<HTMLElement>('#stepsPreviewTitle');
  const previewCopy = document.querySelector<HTMLElement>('#stepsPreviewCopy');

  if (!stepItems.length || !previewIcon || !previewTitle || !previewCopy) {
    return;
  }

  let activeStep = 0;

  const setActiveStep = (index: number) => {
    activeStep = index % steps.length;

    stepItems.forEach((item, itemIndex) => {
      item.classList.toggle('is-active', itemIndex === activeStep);
    });

    const step = steps[activeStep];
    previewIcon.textContent = step.icon;
    previewTitle.textContent = step.title;
    previewCopy.textContent = step.preview;
  };

  const startRotation = () => {
    window.clearInterval(stepRotationTimer);
    stepRotationTimer = window.setInterval(() => {
      setActiveStep(activeStep + 1);
    }, 3200);
  };

  stepItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      setActiveStep(index);
      startRotation();
    });
  });

  setActiveStep(0);
  startRotation();
};

const render = () => {
  app.innerHTML = window.location.pathname === '/contact-support' ? contactSupportPage : landingPage;
  bindContactForm();
  bindStepTabs();

  if (window.location.hash) {
    document.querySelector(window.location.hash)?.scrollIntoView();
  } else {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
};

document.addEventListener('click', (event) => {
  const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="/"]');

  if (!link || link.target || link.origin !== window.location.origin) {
    return;
  }

  event.preventDefault();
  history.pushState(null, '', link.href);
  render();
});

window.addEventListener('popstate', render);
render();
