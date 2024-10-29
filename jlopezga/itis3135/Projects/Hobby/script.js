const what = document.getElementById('what');
const who = document.getElementById('who');
const when = document.getElementById('when');
const where = document.getElementById('where');
const how = document.getElementById('how');
const why = document.getElementById('why');
const ai = document.getElementById('ai');

const elements =[what, who, when, where, how, why, ai];

function hiding(id){
  elements.forEach((element) => {
    element.classList.add('hidden');
  });

  document.getElementById(id).classList.remove('hidden');
}

