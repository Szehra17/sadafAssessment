/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'How many months have 28 days?',
      o: ['1', '2', 'All of them', 'Depends if there is a leap year or not'],
      a: 2,
    },
    {
      q: 'How many 0.5cm slices can you cut from a bread that is 25cm long?',
      o: ['50', '38', '20', '15'],
      a: 0,
    },

  ];

  /*let timer;
  let timeLeft = 60; // 60 seconds countdown
  let score = 0;  // Track score
  let userAnswers = []; // Store user answers*/

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
          liElement.style.backgroundColor = 'lightgreen';
        }

        if (radioElement.checked && quizItem.a == i) {
          score++;
        }
      }
    });

    document.getElementById('score').textContent = "Your score: " + score;
    
  };

  // Event listener for the submit button 
  document.getElementById('btnSubmit').addEventListener('click', () => { 
    calculateScore();

   });

  // call the displayQuiz function
  displayQuiz();
});

  

/*function startTimer() {
  const timerElement = document.getElementById('timer');
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerElement.textContent = timeLeft;
    } else {
      clearInterval(timer);
      submitQuiz();
    }
  }, 1000);
} */

// Reload the current page

document.getElementById('btnReset').addEventListener('click', function() { 
  window.location.reload();

});