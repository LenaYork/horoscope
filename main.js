const rootDiv = document.querySelector('#root');
console.log(rootDiv);
let signValue;

const signs = [
    "Козерог",
     "Водолей",
     "Рыбы",
     "Овен",
     "Телец",
     "Близнецы",
     "Рак",
     "Лев",
     "Дева",
     "Весы",
     "Скорпион",
     "Змееносец",
     "Стрелец"
 ];
 
 const signDates = [
     "20 января - 16 февраля",
     "16 февраля - 11 марта",
     "11 марта - 18 апреля",
     "18 апреля - 13 мая",
     "13 мая - 21 июня",
     "21 июня - 20 июля",
     "20 июля - 10 августа", 
     "10 августа - 16 сентября",
     "16 сентября - 30 октября", 
     "30 октября - 23 ноября",
     "23 ноября - 29 ноября",
     "29 ноября - 17 декабря",
     "17 декабря - 20 января" 
 ];

const heading = document.createElement('h1');
heading.innerText = 'Как узнать свой настоящий знак зодиака?';
rootDiv.appendChild(heading);
const explanation = document.createElement('p');
explanation.innerHTML = 'Недавнее <a href="https://www.theguardian.com/science/2016/sep/30/nasa-new-zodiac-sign-ophiuchus-astrology-space"' +
'title="Да, это ссыль на оригинал"> '+
'<b>заявление НАСА</b></a> повергло многих в шок. Оказывается, знаков зодиака не 12, а 13. Весь гороскоп из-за этого факта пришлось перекроить. '+
' Змееносца влепили между Скорпионом и Стрельцом, и в результате весь график поплыл, даты сдвинулись. Хотите узнать ваш НАСТОЯЩИЙ знак зодиака? '+
'Вспоминайте дату рождения и смело выбирайте ее чуть ниже. Мы откроем вам глаза! :D ';

rootDiv.appendChild(explanation);

const form = document.createElement('form');
form.setAttribute('method', 'post');
rootDiv.appendChild(form);

let signList = document.createElement('select');
signList.setAttribute('id', 'select');
form.appendChild(signList);

signs.map( (elem, i) => {
    let newOption = document.createElement('option');
    newOption.setAttribute('value', elem);
    newOption.innerText = signDates[i];
    signList.appendChild(newOption);
});

let inputButton = document.createElement('input');
inputButton.className = 'inputButton';
inputButton.setAttribute('type', 'button');
inputButton.setAttribute('value', 'Узнать свой знак');
form.appendChild(inputButton);

let realSign = document.createElement('p');
realSign.className = 'realSign';
realSign.setAttribute('id', 'realSign');
rootDiv.appendChild(realSign);

inputButton.addEventListener("click", getRealSign);

function getRealSign() {
    signValue = signList.options[signList.selectedIndex].value;
    realSign.innerHTML = `Ваш настоящий знак зодиака - <b>${signValue}</b>. Не волнуйтесь, это никак не отразится на вашей жизни!`;
}


