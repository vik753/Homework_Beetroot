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

questions.forEach(function (item, id, array) {
    let ansver = prompt(array[id][0], '');
    if (ansver === String(array[id][1])) {
        array[id][2] = true;
    } else {
        array[id][2] = false;
    }
});

let allRightAnswers = questions.every(function (e) {
    return e[2] === true;
});

let title = document.getElementById('result_title');
let text = document.getElementById('result__text');


//all Right
if (allRightAnswers) {
    title.innerHTML = 'You got 3 right answers!';
    text.innerHTML = 'Right answers: <br>';
    questions.forEach(function (item, id, array) {
        document.write(++id + ') ' + item[0] + ' = ' + item[1] + ';<br>');
    });

}
//all Wrong
let allWrongAnswers = questions.every(function (e) {
    return e[2] === false;
});
if (allWrongAnswers) {
    title.innerHTML = 'You got 3 wrong answers!';
    text.innerHTML = 'Wrong answers: <br>';
    questions.forEach(function (item, id, array) {
        document.write(++id + ') ' + item[0] + ';<br>');
    });
}
//middle result
if (!allRightAnswers && !allWrongAnswers) {
    let someRightAnswers = questions.filter(function (e) {
        return e[2] === true;
    });
    let someWrongAnswers = questions.filter(function (e) {
        return e[2] === false;
    });

    title.innerHTML = 'You got ' + someRightAnswers.length + ' right answers!';
    text.innerHTML = 'Right answers: <br>';
    someRightAnswers.forEach(function (item, id, array) {
        document.write(++id + ') ' + item[0] + ' = ' + item[1] + ';<br>');
    });
    document.write('<br>Wrong answers:<br>');
    someWrongAnswers.forEach(function (item, id, array) {
        document.write(++id + ') ' + item[0] + ';<br>');
    });
}






