const switchBtn = document.getElementById('langSwitch');
const root = document.documentElement;

function setLanguage(lang){
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-en][data-ar]').forEach(el=>{
    el.textContent = lang === 'ar' ? el.dataset.ar : el.dataset.en;
  });
  localStorage.setItem('sizma-lang', lang);
}
const saved = localStorage.getItem('sizma-lang') || 'en';
setLanguage(saved);
switchBtn.addEventListener('click',()=>setLanguage(root.lang === 'en' ? 'ar' : 'en'));

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('show')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
