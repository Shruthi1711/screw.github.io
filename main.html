const translations = {
  de: {
    nav_home:"Start", nav_about:"Über uns", nav_demo:"Demo", nav_pub:"Publikationen", nav_contact:"Kontakt",
    hero_badge:"Forschungsprojekt",
    hero_h1:"Intelligentes Qualitätsmanagement in industriellen Verschraubungsprozessen",
    hero_p:"Wir entwickeln maschinelle Lernverfahren zur Erkennung fehlerhafter Schraubverbindungen und stellen der Forschungsgemeinschaft reale Industriedatensätze bereit.",
    hero_btn1:"Mehr erfahren", hero_btn2:"Zum Demo",
    s_problem:"Problemstellung", s_goal:"Zielsetzung", s_approach:"Vorgehensweise", s_news:"Neuigkeiten", s_funding:"Förderhinweis",
    problem_h:"Herausforderung in der Qualitätssicherung",
    problem_p:"Schrauben ist eines der wichtigsten Fügeverfahren der industriellen Fertigung. Die derzeit eingesetzten Methoden der statistischen Prozessüberwachung stoßen bei komplexen Anwendungsfällen an ihre Grenzen. Fehlerhafte Verschraubungen führen zu kostspieligen Demontagemaßnahmen und Rückrufaktionen.",
    goal_h:"Unsere Ziele",
    goal_p:"Aufbau eines Innovationszentrums mit fünf Schraubstationen, Bereitstellung offener Datensätze und Entwicklung von ML-Methoden zur Anomalieerkennung.",
    approach_h:"Systematisches Vorgehen",
    approach_p:"Die Umsetzung erfolgt in fünf Arbeitspaketen über 30 Monate – von der Infrastrukturanbindung bis zum Wissenstransfer.",
    s_news:"Neuigkeiten", s_funding:"Förderhinweis",
    funding_p:"Das Vorhaben wird über die EURONORM GmbH im Rahmen des Förderprogramms <em>„Innovationskompetenz INNO-KOM"</em> des Bundesministeriums für Wirtschaft und Energie (BMWE) gefördert.",
    footer_imp:"Impressum", footer_priv:"Datenschutz",
  },
  en: {
    nav_home:"Home", nav_about:"About", nav_demo:"Demo", nav_pub:"Publications", nav_contact:"Contact",
    hero_badge:"Research Project",
    hero_h1:"Intelligent Quality Management in Industrial Screw-Fastening Processes",
    hero_p:"We develop machine learning methods for detecting defective screw connections and provide real industrial datasets to the research community.",
    hero_btn1:"Learn more", hero_btn2:"View Demo",
    s_problem:"Problem Statement", s_goal:"Objectives", s_approach:"Methodology", s_news:"News", s_funding:"Funding",
    problem_h:"Quality Assurance Challenge",
    problem_p:"Screw fastening is one of the most important joining processes in manufacturing. Current statistical process control methods reach their limits in complex use cases. Defective connections result in costly disassembly and recall actions.",
    goal_h:"Our Goals",
    goal_p:"Establishing an innovation center with five screwing stations, providing open datasets, and developing ML methods for anomaly detection.",
    approach_h:"Systematic Approach",
    approach_p:"Implementation takes place in five work packages over 30 months — from infrastructure integration to knowledge transfer.",
    funding_p:"This project is funded via EURONORM GmbH as part of the <em>\"Innovation Competence INNO-KOM\"</em> program of the Federal Ministry for Economic Affairs and Energy (BMWE).",
    footer_imp:"Legal Notice", footer_priv:"Privacy Policy",
  }
};

let currentLang = localStorage.getItem('lang') || 'de';
let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('btn-theme');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  const btn = document.getElementById('btn-lang');
  if (btn) btn.textContent = lang === 'de' ? 'EN' : 'DE';
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang);

  document.getElementById('btn-theme')?.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
  });

  document.getElementById('btn-lang')?.addEventListener('click', () => {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    applyLang(currentLang);
  });

  const ham = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (ham && navLinks) ham.addEventListener('click', () => navLinks.classList.toggle('open'));

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
    else a.classList.remove('active');
  });

  // Demo bars
  if (document.querySelector('.demo-bar')) {
    const heights = [60,90,45,110,75,130,95,60,140,85];
    document.querySelectorAll('.demo-bar').forEach((bar, i) => {
      bar.style.height = heights[i % heights.length] + 'px';
    });
  }
});
