import './styles.css';
import QRCode from 'qrcode';

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const brand = 'Mycaloriedoctor';
const supportEmail = 'support@Mycaloriedoctor.com';
const appStoreUrl = 'https://apps.apple.com/us/app/Mycaloriedoctor/id6765860622';
const googlePlayUrl =
  'https://play.google.com/store/apps/details?id=com.mycaloriedoctor.nutrition.aiscan&pcampaignid=web_share';
const privacyUrl = 'https://sites.google.com/view/www-Mycaloriedoctor-vom/privacy-policy';
const termsUrl = 'https://sites.google.com/view/www-Mycaloriedoctor-vom/terms-conditions';

/**
 * Real screenshots from the app, dropped into `public/screenshots/`.
 * A missing file shows a labelled empty phone instead of a broken image, so
 * the page still lays out while screenshots are being collected.
 */
type Screenshot = { file: string; label: string; alt: string };

const shots = {
  dashboard: {
    file: '/screenshots/dashboard.png',
    label: 'Dashboard',
    alt: 'Dashboard showing the daily calorie ring, eaten vs target and fat, carb and protein totals',
  },
  scan: {
    file: '/screenshots/scan.png',
    label: 'Smart Scan camera',
    alt: 'Smart Scan analysing a photo and identifying ingredients and nutrients',
  },
  scanResult: {
    file: '/screenshots/scan-result.png',
    label: 'Scan result',
    alt: 'Scan result with calories, macros and ingredients',
  },
  search: {
    file: '/screenshots/search.png',
    label: 'Search Food',
    alt: 'Search Food with AI results showing portion, calories and protein for each match',
  },
  plan: {
    file: '/screenshots/plan.png',
    label: 'Goals & targets',
    alt: 'Profile screen with daily calorie, protein, carb and fat targets',
  },
  progress: {
    file: '/screenshots/progress.png',
    label: 'Progress',
    alt: 'Progress screen with streak, weight, average calories, BMI and progress photos',
  },
} satisfies Record<string, Screenshot>;

type WhyItem = {
  title: string;
  copy: string;
  icon: string;
  shot: Screenshot;
  photo: string;
};

type Story = {
  number: string;
  chip: string;
  title: string;
  copy: string;
  shot: Screenshot;
  photo?: string;
};

type Faq = { question: string; answer: string };

const icons = {
  camera:
    '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  target:
    '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  sparkles:
    '<path d="M9.94 14.06 4 20M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/>',
  trend: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
  plus: '<path d="M5 12h14M12 5v14"/>',
  minus: '<path d="M5 12h14"/>',
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  flame:
    '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/>',
};

const icon = (name: keyof typeof icons, size = 20) =>
  `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

const appleLogo =
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>';

const playLogo =
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/></svg>';

const whyItems: WhyItem[] = [
  {
    title: 'Smart meal scan',
    copy: 'Point your camera at a plate. The AI names the dish, lists each ingredient and estimates calories, protein, carbs and fat. You adjust portions before anything is saved.',
    icon: 'camera',
    shot: shots.scanResult,
    photo: '/images/hero-bowl.jpg',
  },
  {
    title: 'Search any food',
    copy: 'No photo? Type what you ate, like "chicken biryani" or "2 eggs and toast", and log the closest match in one tap.',
    icon: 'search',
    shot: shots.search,
    photo: '/images/meal-board.jpg',
  },
  {
    title: 'A plan built for you',
    copy: 'Share your goal, body metrics and activity level. You get daily calorie and macro targets, and a timeline you can actually follow.',
    icon: 'target',
    shot: shots.plan,
    photo: '/images/table-spread.jpg',
  },
  {
    title: 'What to eat next',
    copy: 'Meal ideas that fit the calories and macros you have left today, so the next decision is an easy one.',
    icon: 'sparkles',
    shot: shots.dashboard,
    photo: '/images/hero-bowl.jpg',
  },
  {
    title: 'Progress you can see',
    copy: 'Streaks, calorie trends, weight and before-and-after photos, all in one calm view.',
    icon: 'trend',
    shot: shots.progress,
    photo: '/images/meal-board.jpg',
  },
];

const stories: Story[] = [
  {
    number: '01',
    chip: 'Snap your plate',
    title: 'Your next meal is one photo away',
    copy: 'Smart Scan reads the whole plate, not just the main item, and turns it into calories and macros you can edit.',
    shot: shots.scan,
    photo: '/images/hero-bowl.jpg',
  },
  {
    number: '02',
    chip: 'Or just type it',
    title: 'Search any food',
    copy: 'Already eaten? Type it in.',
    shot: shots.search,
  },
  {
    number: '03',
    chip: 'Log it, done',
    title: 'Adjust and save',
    copy: 'Tweak portions, then log.',
    shot: shots.scanResult,
    photo: '/images/meal-board.jpg',
  },
];

const faqs: Faq[] = [
  {
    question: 'How accurate is the AI meal scan?',
    answer:
      'Scan results are estimates. The app shows every ingredient and portion it detected, and you can adjust them before saving the meal to your log.',
  },
  {
    question: 'Can I log food without taking a photo?',
    answer:
      'Yes. Search lets you type a food or a whole meal, like "2 eggs and toast", and log it in one tap. You can also re-log anything from your recent meals.',
  },
  {
    question: 'Does it replace advice from a doctor or dietitian?',
    answer: `No. ${brand} is built for everyday wellness tracking. It is not a medical device and does not provide medical advice, diagnosis or treatment.`,
  },
  {
    question: 'Is my data private?',
    answer: `We don't sell your personal data. Your meals, photos and body metrics are used to run the app and personalise your plan. The Privacy Policy explains exactly what is collected and why.`,
  },
  {
    question: 'How much does it cost?',
    answer: `${brand} is a subscription app. Current plans, and any free trial you're eligible for, are shown in the app before you subscribe. Billing and cancellation are handled by the App Store or Google Play.`,
  },
  {
    question: 'Which phones does it work on?',
    answer: 'iPhone and Android. Download it from the App Store or Google Play.',
  },
];

// ---------------------------------------------------------------------------
// Building blocks
// ---------------------------------------------------------------------------

const phone = (shot: Screenshot, className = '', eager = false) => `
  <figure class="device ${className}">
    <span class="device-island" aria-hidden="true"></span>
    <img
      src="${shot.file}"
      alt="${shot.alt}"
      loading="${eager ? 'eager' : 'lazy'}"
      decoding="async"
      onerror="this.closest('.device').classList.add('is-missing')"
    />
    <figcaption class="device-missing">Screenshot<strong>${shot.label}</strong></figcaption>
  </figure>
`;

const storeBadges = (className = '') => `
  <div class="store-badges ${className}">
    <a class="store-badge" href="${appStoreUrl}" target="_blank" rel="noopener">
      ${appleLogo}
      <span><small>Download on the</small>App Store</span>
    </a>
    <a class="store-badge" href="${googlePlayUrl}" target="_blank" rel="noopener">
      ${playLogo}
      <span><small>Get it on</small>Google Play</span>
    </a>
  </div>
`;

const header = (variant: 'overlay' | 'solid') => `
  <header class="site-header ${variant === 'solid' ? 'is-solid' : ''}" data-header="${variant}">
    <div class="header-inner">
      <a class="brand" href="/" aria-label="${brand} home">
        <img class="brand-logo" src="/images/logo-96.png" alt="" width="34" height="34" />
        <span>${brand}</span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="/#how-it-works">How it works</a>
        <a href="/#features">Features</a>
        <a href="/#faq">FAQ</a>
        <a href="/contact-support">Support</a>
      </nav>
      <a class="nav-cta" href="/#download">Download</a>
    </div>
  </header>
`;

const footer = () => `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="brand" href="/" aria-label="${brand} home">
            <img class="brand-logo" src="/images/logo-96.png" alt="" width="34" height="34" />
            <span>${brand}</span>
          </a>
          <p>AI calorie, macro and meal planning for everyday wellness tracking.</p>
        </div>
        <nav class="footer-column" aria-label="Product links">
          <h3>Product</h3>
          <a href="/#how-it-works">How it works</a>
          <a href="/#features">Features</a>
          <a href="/#download">Download</a>
        </nav>
        <nav class="footer-column" aria-label="Legal links">
          <h3>Legal</h3>
          <a href="${privacyUrl}" target="_blank" rel="noopener">Privacy Policy</a>
          <a href="${termsUrl}" target="_blank" rel="noopener">Terms &amp; Conditions</a>
        </nav>
        <div class="footer-column">
          <h3>Support</h3>
          <a href="/contact-support">Contact support</a>
          <a href="mailto:${supportEmail}">${supportEmail}</a>
        </div>
      </div>
      <p class="footer-disclaimer">
        ${brand} is designed for general wellness and nutrition tracking. AI-generated estimates and suggestions may not always be accurate and should be reviewed by the user. This app is not a medical device and does not provide medical advice, diagnosis or treatment.
      </p>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${brand}. All rights reserved.</span>
        <span>Available on iOS &amp; Android</span>
      </div>
    </div>
  </footer>
`;

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------

const landingPage = () => `
  ${header('overlay')}

  <main id="top">
    <section class="hero">
      <img class="hero-photo" src="/images/hero-bowl.jpg" alt="" fetchpriority="high" />
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="hero-content">
        <p class="hero-chip">AI calorie &amp; macro tracker</p>
        <h1>Snap. Track.<br />Thrive.</h1>
        <p class="hero-lede">Point your camera at any meal and see calories and macros in seconds. Or just type what you ate.</p>
        ${storeBadges('hero-badges')}
      </div>
    </section>

    <section class="section how" id="how-it-works">
      <div class="container">
        <div class="section-intro centered" data-reveal>
          <p class="eyebrow">How it works</p>
          <h2>Eat normally. We'll do the maths.</h2>
          <p>Every meal you log becomes calories, protein, carbs and fat, measured against a plan built around your goal.</p>
        </div>

        <div class="bento" data-reveal>
          <article class="bento-card bento-photo bento-a">
            <img src="/images/meal-board.jpg" alt="A plated meal ready to scan" loading="lazy" />
            <h3>Every plate becomes data</h3>
          </article>
          <article class="bento-card bento-stat bento-b">
            ${icon('flame', 28)}
            <strong>4</strong>
            <p>numbers tracked for every meal: calories, protein, carbs and fat</p>
          </article>
          <article class="bento-card bento-photo bento-c">
            <img src="/images/hero-bowl.jpg" alt="A colourful grain bowl" loading="lazy" />
            <h3>Know what to eat next</h3>
          </article>
          <article class="bento-card bento-photo bento-d">
            <img src="/images/table-spread.jpg" alt="A table of shared dishes" loading="lazy" />
            <h3>Plans that fit real life</h3>
          </article>
        </div>
      </div>
    </section>

    <section class="showcase">
      <div class="container">
        <div class="section-intro centered" data-reveal>
          <p class="eyebrow">The app</p>
          <h2>Your whole day, at a glance.</h2>
        </div>
        <div class="showcase-stage" data-reveal>
          ${phone(shots.dashboard, 'device-xl')}
        </div>
      </div>
    </section>

    <section class="section stories">
      <div class="container">
        <h2 class="stories-title" data-reveal>Logging that keeps up with you</h2>
        <div class="story-grid" data-reveal>
          ${stories
            .map(
              (story, index) => `
                <article class="story-card ${index === 0 ? 'story-wide' : ''} ${story.photo ? 'has-photo' : ''}">
                  ${story.photo ? `<img class="story-photo" src="${story.photo}" alt="" loading="lazy" />` : ''}
                  <div class="story-chips">
                    <span class="chip chip-number">${story.number}</span>
                    <span class="chip">${story.chip}</span>
                  </div>
                  ${phone(story.shot, 'device-story')}
                  <div class="story-text">
                    <h3>${story.title}</h3>
                    <p>${story.copy}</p>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="why" id="features" style="--count: ${whyItems.length}">
      <div class="why-sticky">
        <div class="container why-layout">
          <div class="why-head">
            <p class="eyebrow">Why it works</p>
            <h2>Smarter tracking, with a plan behind it</h2>
          </div>
          <p class="why-lede">${brand} isn't just a calorie counter. It turns what you eat into clear numbers, then tells you what to do next.</p>

          <div class="why-list" role="tablist" aria-label="Features">
            ${whyItems
              .map(
                (item, index) => `
                  <button class="why-item" type="button" role="tab" data-why-index="${index}" aria-selected="false">
                    <span class="why-item-icon">${icon(item.icon as keyof typeof icons)}</span>
                    <span class="why-item-body">
                      <span class="why-item-title">${item.title}</span>
                      <span class="why-item-copy">${item.copy}</span>
                    </span>
                    <span class="why-item-toggle" aria-hidden="true">
                      <span class="toggle-plus">${icon('plus', 16)}</span>
                      <span class="toggle-minus">${icon('minus', 16)}</span>
                    </span>
                  </button>
                `,
              )
              .join('')}
            <div class="why-progress" aria-hidden="true">
              ${whyItems.map(() => '<span></span>').join('')}
            </div>
          </div>

          <div class="why-visuals">
            ${whyItems
              .map(
                (item, index) => `
                  <div class="why-visual" data-why-visual="${index}">
                    <img class="why-visual-photo" src="${item.photo}" alt="" loading="lazy" />
                    ${phone(item.shot, 'device-why')}
                  </div>
                `,
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="section download" id="download">
      <div class="container">
        <div class="download-card" data-reveal>
          <div class="download-copy">
            <p class="eyebrow eyebrow-light">Free to download</p>
            <h2>Start your first scan today.</h2>
            <p>Available on iPhone and Android. Set your goal, get your plan, then snap your first meal.</p>
            ${storeBadges('download-badges')}
            <div class="qr-block">
              <canvas id="qrCodeCanvas" aria-label="QR code to the App Store listing"></canvas>
              <span>Scan with your iPhone camera to open the App Store.</span>
            </div>
          </div>
          <img class="download-photo" src="/images/salad-cutout.png" alt="" loading="lazy" />
        </div>
      </div>
    </section>

    <section class="section faq" id="faq">
      <div class="container faq-layout">
        <div class="faq-head" data-reveal>
          <p class="eyebrow">FAQ</p>
          <h2>Questions, answered.</h2>
          <p>Something else on your mind? <a href="/contact-support">Contact support</a> and we'll reply within 48 hours.</p>
        </div>
        <div class="faq-list" data-reveal>
          ${faqs
            .map(
              (faq) => `
                <details>
                  <summary>${faq.question}<span class="faq-toggle" aria-hidden="true">${icon('plus', 18)}</span></summary>
                  <p>${faq.answer}</p>
                </details>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  </main>

  ${footer()}
`;

const contactSupportPage = () => `
  ${header('solid')}

  <main class="support-page">
    <div class="container support-layout">
      <div class="support-copy">
        <p class="eyebrow">Contact support</p>
        <h1>How can we help?</h1>
        <p>Questions about your account, billing, a bug, or an idea for the app. Send a message and your email app opens with it ready to go.</p>
        <a class="support-email" href="mailto:${supportEmail}">
          <span class="support-email-icon">${icon('mail')}</span>
          <span><small>Email us directly</small>${supportEmail}</span>
        </a>
        <p class="support-note">We usually reply within 48 hours.</p>
      </div>
      <form class="contact-form" id="contactForm">
        <label>
          Name
          <input id="contactName" name="name" type="text" placeholder="Your name" autocomplete="name" required />
        </label>
        <label>
          Email
          <input id="contactEmail" name="email" type="email" placeholder="you@example.com" autocomplete="email" required />
        </label>
        <label>
          Message
          <textarea id="contactMessage" name="message" rows="6" placeholder="Tell us what you need help with" required></textarea>
        </label>
        <button class="button-primary" type="submit">Send support email ${icon('arrow', 18)}</button>
      </form>
    </div>
  </main>

  ${footer()}
`;

// ---------------------------------------------------------------------------
// Behaviour
// ---------------------------------------------------------------------------

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root was not found.');
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktop = window.matchMedia('(min-width: 961px)');

let cleanups: Array<() => void> = [];

const bindContactForm = () => {
  const contactForm = document.querySelector<HTMLFormElement>('#contactForm');

  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector<HTMLInputElement>('#contactName')?.value.trim() ?? '';
    const email = document.querySelector<HTMLInputElement>('#contactEmail')?.value.trim() ?? '';
    const message = document.querySelector<HTMLTextAreaElement>('#contactMessage')?.value.trim() ?? '';

    const subject = encodeURIComponent(`${brand} Contact Request`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
  });
};

/** Header sits transparent over the hero photo, then turns solid. */
const bindHeader = () => {
  const headerEl = document.querySelector<HTMLElement>('[data-header="overlay"]');
  if (!headerEl) return;

  const update = () => headerEl.classList.toggle('is-solid', window.scrollY > 24);
  update();
  window.addEventListener('scroll', update, { passive: true });
  cleanups.push(() => window.removeEventListener('scroll', update));
};

/** Fade sections in as they scroll into view. */
const bindReveal = () => {
  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  );
  targets.forEach((el) => observer.observe(el));
  cleanups.push(() => observer.disconnect());
};

/**
 * "Why it works": on desktop the section pins while you scroll and each
 * stretch of scroll opens the next item. On smaller screens it's a normal
 * accordion that rotates on its own until the user picks an item.
 */
const bindWhy = () => {
  const section = document.querySelector<HTMLElement>('.why');
  const items = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-why-index]'));
  const visuals = Array.from(document.querySelectorAll<HTMLElement>('[data-why-visual]'));
  const dots = Array.from(document.querySelectorAll<HTMLElement>('.why-progress span'));
  if (!section || !items.length) return;

  let active = -1;
  let timer: number | undefined;

  const setActive = (index: number) => {
    if (index === active) return;
    active = index;
    items.forEach((item, i) => {
      item.classList.toggle('is-active', i === index);
      item.setAttribute('aria-selected', String(i === index));
    });
    visuals.forEach((visual, i) => visual.classList.toggle('is-active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
  };

  const scrollRange = () => {
    const top = section.getBoundingClientRect().top + window.scrollY;
    return { top, length: section.offsetHeight - window.innerHeight };
  };

  const onScroll = () => {
    if (!desktop.matches) return;
    const { top, length } = scrollRange();
    const progress = Math.min(Math.max((window.scrollY - top) / Math.max(length, 1), 0), 0.9999);
    setActive(Math.floor(progress * items.length));
  };

  const stopRotation = () => window.clearInterval(timer);
  const startRotation = () => {
    stopRotation();
    if (desktop.matches || reducedMotion.matches) return;
    timer = window.setInterval(() => setActive((active + 1) % items.length), 4500);
  };

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (desktop.matches) {
        const { top, length } = scrollRange();
        window.scrollTo({
          top: top + ((index + 0.5) / items.length) * length,
          behavior: reducedMotion.matches ? 'auto' : 'smooth',
        });
      } else {
        stopRotation();
        setActive(index);
      }
    });
  });

  const onModeChange = () => {
    onScroll();
    startRotation();
  };

  setActive(0);
  onScroll();
  startRotation();
  window.addEventListener('scroll', onScroll, { passive: true });
  desktop.addEventListener('change', onModeChange);
  cleanups.push(() => {
    stopRotation();
    window.removeEventListener('scroll', onScroll);
    desktop.removeEventListener('change', onModeChange);
  });
};

const generateQRCode = async () => {
  const canvas = document.querySelector<HTMLCanvasElement>('#qrCodeCanvas');
  if (!canvas) return;
  try {
    await QRCode.toCanvas(canvas, appStoreUrl, {
      width: 96,
      margin: 1,
      color: { dark: '#111111', light: '#ffffff' },
    });
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
};

const render = () => {
  cleanups.forEach((cleanup) => cleanup());
  cleanups = [];

  const isSupport = window.location.pathname.replace(/\/$/, '') === '/contact-support';
  app.innerHTML = isSupport ? contactSupportPage() : landingPage();
  document.title = isSupport
    ? `Contact Support | ${brand}`
    : `${brand} | AI-Powered Nutrition Tracking`;

  bindContactForm();
  bindHeader();
  bindReveal();
  bindWhy();
  void generateQRCode();

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

  const samePage = link.pathname === window.location.pathname;
  history.pushState(null, '', link.href);

  // An in-page anchor shouldn't re-render the page (and reset the header,
  // animations and pinned section); just scroll to it.
  if (samePage && link.hash) {
    document.querySelector(link.hash)?.scrollIntoView({
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
    });
    return;
  }

  render();
});

window.addEventListener('popstate', render);
render();
