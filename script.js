const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let  velocityX = 0, velocityY = 0;
let setIntervalId;
let score = 0;

let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerHTML = `High score: ${highScore}`;

const changFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
  clearInterval(setIntervalId);
  alert("Peligros existentes en nuestra tarea laboral o en nuestro propio entorno o lugares de trabajo, que puede provocar accidentes o cualquier tipo de siniestro, que, a su vez, sean factores que puedan provocar heridas, daños físicos, y psicológicos, traumatismos, etc");
  window.prompt("Respuesta")
  alert("Suceso repentino que sobrevenga por causa o con ocasión del trabajo, y que produzca en el trabajador una lesión orgánica, perturbación funcional, invalidez o muerte.");
  window.prompt("Respuesta")
  alert("Se refiere a todas las acciones y decisiones humanas, que pueden causar una situación insegura o incidente, con consecuencias para el trabajador, la producción, el medio ambiente y otras personas..");
  window.prompt("Respuesta")
  alert("Enfermedad contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ha visto obligado a trabajar..");
  window.prompt("Respuesta")
  location.reload();
}






const changeDirection = (e) =>{
  // console.log(e);
  if(e.key === "ArrowUp" && velocityY != 1) {
     velocityX = 0;
     velocityY = -1;
  } else if(e.key === "ArrowDown" && velocityY != -1) {
    velocityX = -0;
    velocityY = 1;
  } else if (e.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if(e.key === "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = -0;
 }
 initGame();
} 

const initGame = () => {
    if(gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    if(snakeX === foodX && snakeY === foodY ) {
      changFoodPosition();
      snakeBody.push([foodX, foodY]);
      // console.log(snakeBody);
      score ++;
     
      highScore = score >= highScore ? score : highScore;
      localStorage.setItem("high-score", highScore);
      scoreElement.innerHTML = `score: ${score}`;

      highScoreElement.innerHTML = `High score: ${highScore}`;
    }

    for(let i = snakeBody.length - 1; i > 0; i--){
      snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY];

     snakeX += velocityX;
     snakeY += velocityY; // y = 10 - 1 = 9

     if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30 ) {
       gameOver = true;
     }

     for(let i = 0; i < snakeBody.length; i++) {
      htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
      if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
         gameOver = true;
      }
  }  
    playBoard.innerHTML = htmlMarkup;
}

changFoodPosition();
// initGame();
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
