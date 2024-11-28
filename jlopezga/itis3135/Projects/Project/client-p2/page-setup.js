document.addEventListener("DOMContentLoaded", function() {
  const elements = [
      document.getElementById('home'),
      document.getElementById('about'),
      document.getElementById('feedback'),
      document.getElementById('hall-of-fame'),
      document.getElementById('join-us')
  ];

  elements[0].addEventListener('click', function(){
    hiding(0);
  });

  function hiding(id){
    elements.forEach((element) => {
      element.classList.add('hidden');
    });

    document.getElementById([id]).classList.remove('hidden');
  }

});