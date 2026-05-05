// ── PROJECT CONFIG ──────────────────────────────────────────
import './style.css';

const projects = {
  flutter1: {
    name: "AutoSure App",
    type: "flutter",
    url: "https://autosure-app.vercel.app/",
    runCmd: "flutter run -d web-server --web-port=8080",
    desc: `
      <h2>🚗 AutoSure – Car Insurance Mobile App</h2>
      <p>AutoSure is a comprehensive mobile car insurance platform built with Flutter and Firebase, designed to simplify the entire insurance process.</p>
      <h3>📌 Key Features</h3>
      <ul>
        <li>🔐 User Authentication & Security (Firebase Auth)</li>
        <li>💰 Instant Insurance Quotes</li>
        <li>📝 Digital Insurance Application</li>
        <li>📊 Policy Management Dashboard</li>
        <li>🚨 Claims Submission & Tracking</li>
        <li>🔔 Smart Notifications</li>
        <li>🎨 Modern Responsive UI</li>
      </ul>
      <h3>🛠️ Tech Stack</h3>
      <p>Frontend: Flutter (Dart), Backend: Firebase, Database: Firebase Realtime Database</p>
      <h3>🎯 Why AutoSure Exists</h3>
      <p>Simplify insurance, provide transparency, empower users, and showcase modern development skills.</p>
      <h3>📈 Potential Improvements</h3>
      <ul>
        <li>Payment gateway integration</li>
        <li>Analytics for policies and claims</li>
        <li>Multi-language support</li>
        <li>Offline support for quote generation</li>
      </ul>
    `
  },
  flutter2: {
    name: "Igniscore Gas",
    type: "flutter",
    url: "https://igniscore-i74aq8yto-vusimuz-cybers-projects.vercel.app/",
    runCmd: "flutter run -d web-server --web-port=8081",
    desc: `
      <h2>Igniscore Gas App</h2>
      <p>A Flutter app to manage gas bookings, track deliveries, and monitor usage.</p>
      <ul>
        <li>Cross-platform mobile support</li>
        <li>Firebase backend integration</li>
        <li>Real-time booking updates</li>
      </ul>
    `
  },
  django1: {
    name: "Eazyinsure App",
    type: "django",
    url: "http://localhost:8000",
    runCmd: "python manage.py runserver",
    desc: `
      <h2>Eazyinsure Web App</h2>
      <p>A full-stack Django web application for managing insurance policies and clients.</p>
      <ul>
        <li>Django REST API for backend</li>
        <li>PostgreSQL database</li>
        <li>User authentication and admin dashboard</li>
      </ul>
    `
  },
  django2: {
    name: "Wellness Task App",
    type: "django",
    url: "http://localhost:8001",
    runCmd: "python manage.py runserver 8001",
    desc: `
      <h2>Wellness Task App</h2>
      <p>A Django-based task management app focusing on wellness and productivity.</p>
      <ul>
        <li>JWT Authentication</li>
        <li>REST API for tasks</li>
        <li>User dashboard and notifications</li>
      </ul>
    `
  }
};
// ────────────────────────────────────────────────────────────

function openDemo(id) {
  const p = projects[id];
  const modal = document.getElementById('demoModal');
  const body = document.getElementById('modalBody');

  document.getElementById('modalTitle').textContent = p.name + ' — Live Demo';
  document.getElementById('modalUrl').textContent = p.url;

  if (p.type === 'flutter') {
    body.innerHTML = `
      <div class="phone-frame-wrapper">
        <div class="phone-frame">
          <iframe src="${p.url}" title="${p.name}"></iframe>
        </div>
      </div>`;
  } else {
    body.innerHTML = `<iframe src="${p.url}" title="${p.name}"></iframe>`;
  }

  const iframe = body.querySelector('iframe');
  iframe.onerror = () => showInstructions(body, p);

  fetch(p.url, { mode: 'no-cors' })
    .catch(() => showInstructions(body, p));

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showInstructions(body, p) {
  const icon = p.type === 'flutter' ? '📱' : '🌐';
  body.innerHTML = `
    <div class="demo-placeholder">
      <div class="big-icon">${icon}</div>
      <h3>${p.name} — Not Running</h3>
      <p>${p.desc}</p>
      <p style="font-size:0.75rem; margin-top:0.5rem;">Run this in your terminal:</p>
      <code>$ ${p.runCmd}</code>
      <button class="btn btn-primary" style="margin-top:1.5rem" onclick="retryDemo('${Object.keys(projects).find(k=>projects[k]===p)}')">
        Retry Connection
      </button>
    </div>`;
}

function retryDemo(id) {
  closeDemo();
  setTimeout(() => openDemo(id), 100);
}

function openInfo(id) {
  const p = projects[id];
  const modal = document.getElementById('demoModal');
  const body = document.getElementById('modalBody');

  document.getElementById('modalTitle').textContent = p.name + ' — Details';
  body.innerHTML = `<div class="project-details">${p.desc}</div>`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDemo() {
  const modal = document.getElementById('demoModal');
  modal.classList.remove('open');
  document.getElementById('modalBody').innerHTML = '';
  document.body.style.overflow = '';
}

// Close on overlay click
document.getElementById('demoModal').addEventListener('click', function(e) {
  if (e.target === this) closeDemo();
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDemo();
});

// ── Make functions global for HTML onclick ──
window.openDemo = openDemo;
window.openInfo = openInfo;
window.closeDemo = closeDemo;
window.retryDemo = retryDemo;
