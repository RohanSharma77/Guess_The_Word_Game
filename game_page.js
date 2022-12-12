player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+ " : ";
document.getElementById("player2_name").innerHTML=player2_name+ " : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn : "+ player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn : "+ player2_name;

function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lower case=" + word);

    word_1=word.charAt(1);
    console.log(word_1);

    length_divide_2=Math.floor(word.length/2);
    word_2=word.charAt(length_divide_2);
    console.log(word_2);

    length_minus_1=word.length-1;
    word_3=word.charAt(length_minus_1);
    console.log(word_3);

    remove_letter_1=word.replace(word_1 ,"_");

    remove_letter_2=remove_letter_1.replace(word_2, "_");
    remove_letter_3=remove_letter_2.replace(word_3,"_")


    question_word = "<h4 id='word_display'> Q. "+remove_letter_3+"</h4>";

    input_box = "<br>Answer : <input type='text' id='input_check_box'>";

    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
                       
    row = question_word + input_box + check_button ;

    document.getElementById("output").innerHTML = row;

    document.getElementById("word").value = "";

}

question_turn="player_1"
answer_turn="player_2"

function check(){

get_answer=document.getElementById("input_check_box").value;

answer=get_answer.toLowerCase();

console.log("answer in lowercase = = " + answer);

if (answer == word){

    if(answer_turn=="player_1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
}

if(question_turn== "player_1"){
    question_turn="player_2";
    document.getElementById("player_question").innerHTML="Question Turn : "+ player2_name;
} 

else{
    question_turn="player_1";
    document.getElementById("player_question").innerHTML="Question Turn : "+ player1_name;
}

if(answer_turn== "player_1"){
    answer_turn="player_2";
    document.getElementById("player_answer").innerHTML="Answer Turn : "+ player2_name;
} 

else{
    answer_turn="player_1";
    document.getElementById("player_answer").innerHTML="Answer Turn : "+ player1_name;
}

}