const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

document.addEventListener('DOMContentLoaded', () => {
    let questions = [];

    async function fetchQuestion(){
        const response = await fetch('/');
        questions = await response.json();
    }

    fetchQuestion();

    const generateButton = document.getElementsById('generate-question');
    const questionDisplay = document.getElementById('quesiton-display');
    const answerDisplay = document.getElementById('answer-display');

    generateButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];

        questionDisplay.innerHTML = 
    })



  let selectedQuestions = [];

  const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

  const getRandomObject = (arr) => {
    const random = getRandomIndex(arr);

    const randomGenerator = () => {

    }
  }
  function getRandomQuestion(){

  }