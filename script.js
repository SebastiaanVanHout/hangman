
var easy = ['dab', 'rat', 'cat', 'pop', 'sip', 'dip', 'nip', 'hip', 'hug', 'bug', 'dug', 'top', 'red', 'led','antidisestablishmentarianism'];
var medium = ['drab', 'crab', 'scab', 'scat', 'dime', 'prime', 'death', 'hair', 'brain', 'drain', 'cane','dame', 'birch', 'search'];
var hard = ['deprived', 'dictatorial', 'diclofenac', 'circumstantial', 'circumcision', 'circumnavigate', 'circumduction', 'deprioritised','deportees', 'aardvark', 'onyx', 'quiz', 'squished', 'jazz', 'abruptly', 'psychedelic', 'psionic', 'zany', 'hieronymus', 'glycerol', 'quadriplegic', 'iridosiklitis'];
var mixed = ['deprived', 'dictatorial', 'jurisdiction','diclofenac', 'mixed', 'circumstantial', 'circumcision', 'circumnavigate', 'circumduction', 'deprioritised', 'olive', 'sharp', 'shark', 'coral', 'deportees', 'aardvark', 'onyx', 'quiz', 'squished', 'jazz', 'abruptly', 'create', 'psychedelic', 'psionic', 'zany', 'hieronymus', 'glycerol', 'quadriplegic', 'iridosiklitis', 'drab', 'crab', 'scab', 'scat', 'dime', 'prime', 'death', 'hair', 'brain', 'drain', 'cane','dame', 'birch', 'search', 'dab', 'rat', 'cat', 'pop', 'sip', 'dip', 'nip', 'hip', 'hug', 'bug', 'dug', 'top', 'red', 'led','antidisestablishmentarianism'];
var chess = ['jacob', 'bosko', 'djakhangir', 'simen', 'varuzhan', 'vladimir', 'yuriy', 'aloyzas', 'bogdan', 'jahongir', 'zhao', 'jurij']
var randomWord = "";
var guessedLetters= [];
var wrongLetters=[];
var wrongLetterString = "";
var rightLetters=[];


//This function makes things dissapear that we don't need to see initially. The for loops in my code with the class loop
//variables defined above them are for styling all elements in a class.
function gone(){
    document.getElementById("lost").style.display = 'none';
    var classLoop = document.getElementsByClassName("letters").length;
    for(var i=0; i<classLoop; i++) {
        document.getElementsByClassName("letters")[i].style.display = 'none';
    }
    document.getElementById("wrongLetters").style.display = 'none';
    document.getElementById("youWon").style.display = 'none';
}

//This function runs when submit is clicked and makes necessary items appear
function runMe(){
    document.getElementById("wrongLetters").style.display = 'inline';

    var classLoop2 = document.getElementsByClassName("initial").length;
    for(var i=0; i<classLoop2; i++) {
        document.getElementsByClassName("initial")[i].style.display = 'none';
    }
    chooseWord();
    printSpaces();

}

//This function chooses a random word from the selected difficulty array
function chooseWord(){
    var difficulty = document.getElementById("chooseDifficulty").value;
    if(difficulty==0){
        randomWord = chooseDifficulty[Math.floor(Math.random() * chooseDifficulty.length)];
    }
    if(difficulty==1){
        randomWord = easy[Math.floor(Math.random() * easy.length)];
    }
    if(difficulty==2){
        randomWord = medium[Math.floor(Math.random()* medium.length)];
    }
    if(difficulty==3){
        randomWord = hard[Math.floor(Math.random()* hard.length)];
    }
    if(difficulty==4){
        randomWord = mixed[Math.floor(Math.random()* mixed.length)];
    }
    if(difficulty==5){
        randomWord = chess[Math.floor(Math.random()* chess.length)];
    }
    console.log(randomWord);


}

//This function contains printSpaces() and pushes letters into arrays, and makes the wrong letter string
function buttonAnalyzer(element){
    console.log(element);
    guessedLetters.push(element.id);
    if(randomWord.indexOf(element.id)==-1){
       wrongLetters.push(element.id) ;
    }
    if(randomWord.indexOf(element.id)!= -1){
        rightLetters.push(element.id);
    }
    printSpaces();
    element.style.color = 'black';
    element.disabled=true;
    if(randomWord.indexOf(element.id)==-1) {
        for (i = 0; i < wrongLetters.length; i++) {
            wrongLetterString = wrongLetters[i] + ", ";
        }
        document.getElementById("wrongLetters").innerHTML += wrongLetterString;
        

    }
    console.log(wrongLetterString);
}

//Bulk of code. It handles the guesses and also handles wins or losses.
function printSpaces(){
    var partialWord = "";
    var numberOfGuesses= wrongLetters.length;
    for(i=0; i<randomWord.length; i++){
        if(guessedLetters.indexOf(randomWord[i])== -1){
            partialWord += "_";
            //wrongLetters.push(lettersThatAreWrong);
            if(numberOfGuesses <9){
                var images = document.getElementById("image").innerHTML = "<img src='img/" + "Hang" + numberOfGuesses + ".jpg'>";
            }else{
                var images = document.getElementById("image").innerHTML = "<img src='img/" + "Hang" + numberOfGuesses + ".jpg'>";
                document.getElementById("wrongLetters").style.display='none';
                var classLoop3 = document.getElementsByClassName("letters").length;
                for(var i=0; i<classLoop3; i++) {
                    document.getElementsByClassName("letters")[i].style.display = 'none';
                }
                document.getElementById("lost").style.display = 'inline';
            }

        }else{
            partialWord += randomWord[i];
        }
    }
    if(numberOfGuesses==9){
        document.getElementsByClassName("letters").disabled = true;
        document.getElementsByClassName("letters").style.color = 'black';
    }
    document.getElementById("lettersAndDashes").innerHTML = partialWord;
    var run = document.getElementsByClassName("letters").length;
    for(var i=0; i<run; i++) {
        document.getElementsByClassName("letters")[i].style.display = 'inline';
    }
    if(partialWord.indexOf('_')==-1){
        var classLoop4 = document.getElementsByClassName("letters").length;
        for(var i=0; i<classLoop4; i++) {
            document.getElementsByClassName("letters")[i].disabled = 'true';
        }
        var classLoop5 = document.getElementsByClassName("letters").length;
        for(var i=0; i<classLoop5; i++) {
            document.getElementsByClassName("letters")[i].style.display = 'none';
        }
        document.getElementById("youWon").style.display = 'inline';
        document.getElementById("wrongLetters").style.display = 'none';
    }
    return images;

}

//Restart button
function restart(){
    location.reload();
}


/*
My restart button that was never completed  :(
function restart(){
    var runny = document.getElementsByClassName("initial").length;
    for(var i=0; i<runny; i++) {
        document.getElementsByClassName("initial")[i].style.color = 'darkred';
    }
    var runeses = document.getElementsByClassName("letters").length;
    for(var i=0; i<runeses; i++) {
        document.getElementsByClassName("letters")[i].disabled = false;
    }
    gone();
    document.getElementById("lettersAndDashes").style.display = 'none';
    document.getElementById("image").style.display = 'none';
    document.getElementById("submitDifficulty").style.display = 'inline';
    document.getElementById("chooseDifficulty").style.display = 'inline';
    guessedLetters = [];
    wrongLetters=[];
    wrongLetterString = "";
    rightLetters=[];
    randomWord = "";
    document.getElementById("wrongLetters").innerHTML= "Wrong Letters:"


}
*/
