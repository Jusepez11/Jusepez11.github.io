const elements = [
    document.getElementById('home'),
    document.getElementById('about'),
    document.getElementById('feedback'),
    document.getElementById('hall-of-fame'),
    document.getElementById('join-us')
];

function hiding(id){
  elements.forEach((element) => {
    element.classList.add('hidden');
  });

  document.getElementById(id).classList.remove('hidden');
}

