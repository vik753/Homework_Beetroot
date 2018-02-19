// Программа должна
// 1. Вывести для пользователя 3 вопроса из массива questions (использовать функцию prompt())
// 2. По ответам пользователя подсчитать и сохранить количество правильных и неправильных ответов
//    Подсказка:  Результаты сохранять в  массивах rightAnswers, wrongAnswers
// 3. Вывести результаты в div с id="result" так, как показано на слайдах work4.pptx
//    Подсказка:  То есть надо в цикле по очереди обойти массивы  rightAnswers, wrongAnswers
//    и сформировать строку с результатами. Жту строку потосм с помощью innerHTML
//    вставить в div с id="result"


var questions = [
    ["2 + 2", 4], // 2 + 2 -> это вопрос, 4 -> правильный ответ
    ["9 / 3", 3],
    ["5 * 5", 25]
];

var rightAnswers = new Array();
var wrongAnswers = new Array();

for (let x = 0, ln = questions.length; x < ln; x++) {
    console.log();
    if (String(questions[x][1]) === prompt(questions[x][0], '')) {
        rightAnswers[rightAnswers.length] = questions[x][0];
    } else {
        wrongAnswers[wrongAnswers.length] = questions[x][0];
    }
}

var rightAnswersArrLength = rightAnswers.length;
var wrongAnswersArrLength = wrongAnswers.length;
let title = document.getElementById('result__title');
let text = document.getElementById('result__text');
//if all right
if(rightAnswersArrLength === 3){
    title.innerHTML = 'You got 3 right answers!';
    text.innerHTML = 'Right answers: <br>';
    rightAnswers.forEach(function (item, id, array) {
        document.write(++id + ') ' + item + ';<br>');
    });
}
//if all wrong
if(wrongAnswersArrLength === 3){
    title.innerHTML = 'You got 3 wrong answers!';
    text.innerHTML = 'Wrong answers: <br>';
    wrongAnswers.forEach(function (item, id, array) {
        document.write(++id + ') ' + item + ';<br>');
    });
}
//middle result
if(rightAnswersArrLength !== 3 && wrongAnswersArrLength !== 3){
    title.innerHTML = 'You got ' + rightAnswersArrLength + ' right answers!';
    text.innerHTML = 'Right answers: <br>';
    rightAnswers.forEach(function (item, id, array) {
        document.write(++id + ') ' + item + ';<br>');
    });
    document.write('<br>Wrong answers:<br>');
    wrongAnswers.forEach(function (item, id, array) {
        document.write(++id + ') ' + item + ';<br>');
    });
}




