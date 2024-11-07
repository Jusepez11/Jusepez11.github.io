const home = document.getElementById('home');
const about = document.getElementById('about');

const elements =[ home, about];

function hiding(id){
  elements.forEach((element) => {
    element.classList.add('hidden');
  });

  document.getElementById(id).classList.remove('hidden');
}

