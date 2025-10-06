// Typed intro animation
const phrases = ["AI & ML Enthusiast", "Data Science Explorer", "Web Developer"];
const el = document.getElementById("typedIntro");

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeLoop() {
  if (!el) return;
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    letterIndex--;
    el.textContent = currentPhrase.substring(0, letterIndex);
  } else {
    letterIndex++;
    el.textContent = currentPhrase.substring(0, letterIndex);
  }

  let timeout = isDeleting ? 40 : typingSpeed;

  if (!isDeleting && letterIndex === currentPhrase.length) {
    timeout = 1000;
    isDeleting = true;
  }

  if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    timeout = 300;
  }

  setTimeout(typeLoop, timeout);
}

typeLoop();

// Projects
const projects = [
  { title:"Spam Email Detection", desc:"Naïve Bayes classifier that detects spam emails using ML.", tags:["Python","NLP","Machine Learning"], link:"https://github.com/karthik-0211/spam-email-detection-ML-" },
  { title:"Movie Recommendation System", desc:"AI system recommending movies based on user preferences.", tags:["Python","Recommender","Data Science"], link:"https://github.com/karthik-0211/Movie-Recommendation-System" },
  { title:"Cloth Store Management", desc:"Inventory management system written in Python.", tags:["Python","OOP"], link:"" },
  { title:"TorrDroid Data Structure Study", desc:"Improved data structure efficiency inspired by TorrDroid.", tags:["Data Structures","Algorithms"], link:"" }
];

const grid = document.getElementById("projectsGrid");
if(grid){
  projects.forEach(p=>{
    const div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="badge-container">${p.tags.map(t=>`<span class='badge'>${t}</span>`).join('')}</div>
      ${p.link?`<a href='${p.link}' target='_blank' class='btn ghost'>View Repo</a>`:''}
    `;
    grid.appendChild(div);
  });
}

// Reveal animation
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("revealed");
  });
},{threshold:0.15});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

// Footer year
const yearEl = document.getElementById("year");
if(yearEl) yearEl.textContent = new Date().getFullYear();
