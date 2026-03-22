const navWrap = document.querySelector('.nav-wrap');
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle && navWrap) {
  menuToggle.addEventListener('click', () => navWrap.classList.toggle('open'));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const contactForm = document.querySelector('[data-mailto-form]');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const company = data.get('company') || '';
    const project = data.get('project') || '';
    const details = data.get('details') || '';
    const subject = encodeURIComponent(contactForm.dataset.subject || 'Projektanfrage');
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nUnternehmen: ${company}\nProjekt: ${project}\n\nDetails:\n${details}`
    );
    window.location.href = `mailto:kontakt@thea-ra.de?subject=${subject}&body=${body}`;
  });
}
