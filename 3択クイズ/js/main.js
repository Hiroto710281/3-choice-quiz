'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p')


  const quizSet = shuffle([
    {q: '世界で一番大きな湖は？?', c: ['カスピ海', 'おおお', 'A2']},
    {q: '２の８条は?', c: ['２５６', 'B1', 'B2']},
    {q: '最初にリリースされたげんごは?', c: ['Python', 'C1', 'C2']},
  ]);
  let currentNum = 0;
  let isAnswered;
  let score =0;
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0 ; i--) {
      const j =Math.floor(Math.random() * (i + 1));
      [arr[j],arr[i]] = [arr[i],arr[j]]
    }
    return arr;
    }
function checkAnswe(li) {
  // if (isAnswered === true) {
  if (isAnswered) {
    return;
  }
  isAnswered = true;

  if (li.textContent === quizSet[currentNum].c[0]) {
    li.classList.add('correct');
    score++;
  }else{
    li.classList.add('wrong');
  }
btn.classList.remove('disabled');


}
    function setQuiz() {
      isAnswered =false;

      question.textContent = quizSet[currentNum].q;

      while(choices.firstChild) {
        choices.removeChild(choices.firstChild);
      }
    
const shuffleChoices = shuffle([...quizSet[currentNum].c]);
shuffleChoices.forEach(choice => {
  const li = document.createElement('li');
  li.textContent = choice;
  li.addEventListener('click', () =>{
checkAnswe(li);
  });
  choices.appendChild(li);
});
if (currentNum === quizSet.length - 1) {
  btn.textContent = 'show Score'
}
}

setQuiz();
btn.addEventListener('click',() => {
  if (btn.classList.contains('disabled')) {
    return;
  }
  btn.classList.add('disabled');

  if(currentNum === quizSet.length - 1) {
    // console.log(`Score:${score} / ${quizSet.length}`);
    scoreLabel.textContent =`Score:${score} / ${quizSet.length}`;
    result.classList.remove('hidden')
  }else{

    currentNum++;
    setQuiz();
  }
  

});
}

