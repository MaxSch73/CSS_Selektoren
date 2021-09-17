const h4 = document.querySelector('h4');
h4.style.fontWeight = 'bold';

const p1 = document.querySelector('p');
p1.style.border = '2px dashed green';

const span = document.querySelectorAll('span');
for (let index = 1; index < 4; index++) {
  span[index].style.fontWeight = 'bold';
  span[index].style.fontSize = '22px';
}

const li = document.querySelectorAll('li');
li[0].style.color = 'blue';
li[1].style.color = 'red';

const p = document.querySelector('.important');
const wichtig = p.querySelector('span');
wichtig.style.fontStyle = 'italic';
