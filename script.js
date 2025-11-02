let currentLevel= 0;
let currentQuestion= 0;
const levels= ["Worker", "Committee Head", "Manager", "CEO", "Capitalist"];

const sounds = {
    levelUp: new Audio('Sounds/LevelUp.mp3'),
    notification: new Audio('Sounds/Notification.mp3')
  };

  const levelColors = [
    // Level 0 — Discipline Start
    "linear-gradient(180deg, #0f0f0f, #1a1a1a)",
  
    // Level 1 — Monk Green
    "linear-gradient(180deg, #0b130c, #101a13)",
  
    // Level 2 — Warm grounded brown
    "linear-gradient(180deg, #120e0b, #1a1310)",
  
    // Level 3 — Midnight blue
    "linear-gradient(180deg, #090a11, #0d0e18)",
  
    // Level 4 — Deep plum
    "linear-gradient(180deg, #0b080c, #160f19)"
  ];
  

let pressureFlags = {
    money: false,
    morale: false,
    family: false,
    health: false
  };

let player={
    money: 50,
    morale: 50,
    family: 50,
    health: 50,
}
function chooseOption(option)
{
   const effect= questions[currentQuestion].effects[option-1];
   
   player.money+= effect.money;
   player.morale+= effect.morale;
   player.family+= effect.family;
   player.health+= effect.health;

lifePressure();  
updatestats();
if (checkGameOver()) {
    return; // stop further processing
}
currentQuestion++;

if ((currentQuestion % 5 === 0) && (currentLevel < levels.length)) {
    playSound('levelUp');
    levelUpBarUpdate();
    currentLevel++;
    applyLevelColor();
    document.getElementById("level").innerText = "Level: " + levels[currentLevel];
}

if (currentQuestion<questions.length)
{
    showQuestion();
}
else
{
    endGame();
}
}
function updatestats()
{
    document.getElementById("money").innerText = player.money;
    document.getElementById("morale").innerText = player.morale;
    document.getElementById("family").innerText = player.family;
    document.getElementById("health").innerText = player.health;
}
 function checkGameOver() {
        if (player.money <= 0) { gameOver("You went broke!"); return true; }
        if (player.morale <= 0) { gameOver("You got mentally depressed!"); return true; }
        if (player.family <= 0) { gameOver("Your family is dead!"); return true; }
        if (player.health <= 0) { gameOver("You are dead!"); return true; }
        return false; // no game-over
    }

function showQuestion()
{
    const q= questions[currentQuestion];// saved a question set from position currentQuestion
    document.getElementById("question").innerText=q.question;// updated display question
    const btns= document.getElementById("buttonSet").children;// saved data from buttonSet elements to btns
    btns[0].innerText= q.options[0];
    btns[1].innerText= q.options[1];
}
function gameOver(message)
{
    document.getElementById("question").innerText=message;
    document.getElementById("buttonSet").style.display="none";

    const replayBtn= document.createElement("button");
    replayBtn.innerText="Play Again";

    replayBtn.onclick=function(){
        window.location.reload();
    }
    document.getElementById("questionSet").appendChild(replayBtn);
}
function endGame()
{
    let message= "";

    if(player.money >= 150 && player.morale >= 50) {
    triggerConfetti();
        message = "Laughs in rich! You've become the capitalist";
        document.getElementById('level').style.display="none";
        document.getElementsByClassName('notification').style.display="none";
    } else if(player.morale < 30) {
        message = "You burned out before reaching the top.";
        document.getElementById('level').style.display="none";
        document.getElementsByClassName('notification').style.display="none";
    } else {
        message = "You stayed loyal but never climbed higher.";
        document.getElementById('level').style.display="none";
        document.getElementsByClassName('notification').style.display="none";
    }

    document.getElementById("question").innerText=message;
    document.getElementById("buttonSet").style.display="none";

    const replayBtn= document.createElement("button");
    replayBtn.innerText="Play Again";

    replayBtn.onclick=function(){
        window.location.reload();
    }
    document.getElementById("questionSet").appendChild(replayBtn);
    
}
function lifePressure()
{
    if ((player.money>100 || player.family<30) && !pressureFlags.money)
    {
        player.family-=3;
        notifyPlayer("Work is consuming your evenings. Your family feels distant.");
        pressureFlags.money=true;
    }
    else if ((player.morale>100 || player.health<30) && !pressureFlags.morale)
    {
        player.health-=3;
        notifyPlayer("You’ve been pushing too hard lately. Your body needs rest.");
        pressureFlags.morale=true;
    }
    else if ((player.family>100 || player.money<30) && !pressureFlags.family)
    {
        player.money-=3;
        notifyPlayer("You’re spending beautiful days together… but work is falling behind.");
        pressureFlags.family=true;
    }
    else if ((player.health>100 || player.morale<30) && !pressureFlags.health)
    {
        player.morale-=3;
        notifyPlayer("Life feels calm, but routine is numbing your spirit.");
        pressureFlags.health=true;
    }
}
function notifyPlayer(message){
    const notif=document.createElement('div');
    notif.className='notification';
    notif.innerText= message;

    document.body.appendChild(notif);
    playSound('notification');

    setTimeout(() => {
        notif.classList.add('fade');
        setTimeout(() => notif.remove(), 1000);
      }, 3000);
    }

    function playSound(name){
        if (sounds[name]){
        const soundClone= sounds[name].cloneNode(true);
        soundClone.volume= 1;
        soundClone.play();
    }
}
function levelUpBarUpdate() {
    const bar = document.getElementById('progressBar');
    let progress = ((currentLevel + 1) / levels.length) * 100;

    if (window.matchMedia("(max-width: 600px)").matches) {
        // Mobile: grow sideways
        bar.style.width = progress + "%";
        bar.style.height = "100%";
    } else {
        // Desktop: grow vertically
        bar.style.height = progress + "%";
        bar.style.width = "100%";
    }
}

      function applyLevelColor() {
        document.body.style.transition = "background 1s ease-in-out"; // smooth bg change
        document.body.style.background = levelColors[currentLevel];   // just change bg
    }
    
    
    
      function triggerConfetti() {
        confetti({
            particleCount: 200, // Number of particles
            spread: 100,         // Spread angle in degrees
            origin: { y: 0.6 }  // Where on the screen it starts
        });
    }