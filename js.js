/*to up btn*/
const totop = document.querySelector('.to-top');

window.addEventListener("scroll", () => {
    if(window.scrollY > 150){
        totop.classList.add('active');
    }else {
        totop.classList.remove('active');
    }
});

/*header*/

const headt = document.querySelector('.header');

window.addEventListener("scroll", () => {
    if (window.scrollY > 100){
        headt.classList.add('header-scrolled');
    }else {
        headt.classList.remove('header-scrolled');
    }
})

/*dark theme*/

const themeToggleBtn = document.getElementById('themeToggleBtn');

const root = document.documentElement;

const originalColors = {
  '--first-maintheme-color': '#050c9c',
  '--second-maintheme-color': '#3572ef',
  '--third-maintheme-color': '#3abef9',
  '--fourth-maintheme-color': '#a7e6ff',
  '--white_two-color': '#f3f4fe',
  '--black-color': '#1a1a1a'
};

const newColors = {
  '--first-maintheme-color': '#000000',
  '--second-maintheme-color': '#0A0A0A',
  '--third-maintheme-color': '#141414',
  '--fourth-maintheme-color': '#1F1F1F',
  '--white_two-color': '#292929',
  '--black-color': '#868686'

};

let currentTheme = 'original';

function toggleTheme() {
  if (currentTheme === 'original') {
    Object.entries(newColors).forEach(([variable, value]) => {
      root.style.setProperty(variable, value);
    });
    currentTheme = 'new';
  } else {
    Object.entries(originalColors).forEach(([variable, value]) => {
      root.style.setProperty(variable, value);
    });
    currentTheme = 'original';
  }
}

themeToggleBtn.addEventListener('click', toggleTheme);
