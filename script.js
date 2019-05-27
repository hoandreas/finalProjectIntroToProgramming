var p1Name = "Player 1";
var p2Name = "Player 2";
var p1TotalScore = 0;
var p2TotalScore = 0;

function assignNames() {
    // tampung value input ke variable
    player1 = document.getElementById("player1Value").value;
    player2 = document.getElementById("player2Value").value;

    // store variable tsbt di localstorage
    localStorage.setItem('p1Name', player1);
    localStorage.setItem('p2Name', player2);

    // pindah ke halaman game.html
    window.location.href = 'game.html';
}

function displayValues() {
    // ambil nama dari localt=storage
    var player1 = localStorage.getItem('p1Name');;
    var player2 = localStorage.getItem('p2Name');;

    // tampilkan nama dari localstorage
    document.getElementById("player1Name").innerHTML = player1;
    document.getElementById("player2Name").innerHTML = player2;

    // tampilkan score
    document.getElementById("scoreP1").innerHTML = p1TotalScore;
    document.getElementById("scoreP2").innerHTML = p2TotalScore;
}

function shuffle(){
    // clear div dadu1 dan dadu2
    document.getElementById("dadu1").innerHTML = "";
    document.getElementById("dadu2").innerHTML = "";

    // tampung angka random dari 1 - 6 ke variable
    var dice1 = Math.floor(Math.random() * 6)+1;
    var dice2 = Math.floor(Math.random() * 6)+1;

    // tampilkan gambar dadu yang sesuai dengan angka random yg di-generate
    var imgSrc;
    var imgSrc2;

    switch(dice1) {
        case 1: {imgSrc = "dices/white1.png"; break;}
        case 2: {imgSrc = "dices/white2.png"; break;}
        case 3: {imgSrc = "dices/white3.png"; break;}
        case 4: {imgSrc = "dices/white4.png"; break;}
        case 5: {imgSrc = "dices/white5.png"; break;}
        case 6: {imgSrc = "dices/white6.png"; break;}
    }

    switch(dice2) {
        case 1: {imgSrc2 = "dices/black1.png"; break;}
        case 2: {imgSrc2 = "dices/black2.png"; break;}
        case 3: {imgSrc2 = "dices/black3.png"; break;}
        case 4: {imgSrc2 = "dices/black4.png"; break;}
        case 5: {imgSrc2 = "dices/black5.png"; break;}
        case 6: {imgSrc2 = "dices/black6.png"; break;}
    }

    var img = document.createElement("img");
    var img2 = document.createElement("img");

    img.src = imgSrc;
    img2.src = imgSrc2;

    img.setAttribute('width','200px');
    img.setAttribute('height','200px');
    img2.setAttribute('width','200px');
    img2.setAttribute('height','200px');

    document.getElementById("dadu1").appendChild(img);
    document.getElementById("dadu2").appendChild(img2);

    // munculkan score sesuai hasil perbandingan
    if (dice1 > dice2) {
        p1TotalScore = p1TotalScore + 1;
    } else if (dice1 < dice2) {
        p2TotalScore = p2TotalScore + 1;
    } else if (dice1 == dice2) {
        p1TotalScore = p1TotalScore + 1;
        p2TotalScore = p2TotalScore + 1;
    }
    document.getElementById("scoreP1").innerHTML = p1TotalScore;
    document.getElementById("scoreP2").innerHTML = p2TotalScore;
}

function reset() {
    // clear div dadu1 dan dadu2
    document.getElementById("dadu1").innerHTML = "";
    document.getElementById("dadu2").innerHTML = "";

    // tampilkan gambar awal
    var img = document.createElement("img");
    var img2 = document.createElement("img");

    img.src = "dices/blackDiceRolling.gif";
    img2.src = "dices/blackDiceRolling.gif";

    img.setAttribute('width','200px');
    img.setAttribute('height','200px');
    img2.setAttribute('width','200px');
    img2.setAttribute('height','200px');

    document.getElementById("dadu1").appendChild(img);
    document.getElementById("dadu2").appendChild(img2);

    // reset variable total score p1 dan p2
    p1TotalScore = 0;
    p2TotalScore = 0;

    // update total score yg sdh di reset di html
    document.getElementById("scoreP1").innerHTML = p1TotalScore;
    document.getElementById("scoreP2").innerHTML = p2TotalScore;
}

function endGame() {
    // mengambil nama player dari local storage
    var player1 = localStorage.getItem('p1Name');;
    var player2 = localStorage.getItem('p2Name');;

    // clear div winner
    document.getElementById("winner").innerHTML = "";

    // tampilkan alert pemenang
    // if (p1TotalScore > p2TotalScore) {
    //     alert("The winner is " + player1);
    // } else if (p2TotalScore > p1TotalScore) {
    //     alert("The winner is " + player2);
    // } else if (p1TotalScore == p2TotalScore) {
    //     alert("Issa tie");
    // }

    // menampilakn pemenang
    var p = document.createElement("p");
    var winner;

    if (p1TotalScore > p2TotalScore) {
        winner = "The winner is " + player1;
    } else if (p2TotalScore > p1TotalScore) {
        winner = "The winner is " + player2;
    } else if (p1TotalScore == p2TotalScore) {
        winner = "Issa tie";
    }

    p.innerHTML = winner;

    document.getElementById("winner").appendChild(p);

    // reset
    reset();
}

function restart(){
    // me-restart game ke halaman index
    window.location.href = 'index.html';
}