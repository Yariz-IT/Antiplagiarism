import { checkUniqueWords } from "./checkUniqueWords.js"

const main = {
    result: document.getElementById('result'),
    percent: document.getElementById('percent'),
    original: document.getElementById('original'),
    duplicate: document.getElementById('duplicate'),
    btn: document.getElementById('btn'),
}

//  Проверка на заполненость окна тексом

main.btn.onclick = () => {
    const original = main.original.value
    const duplicate = main.duplicate.value

    if (original && duplicate) {
        const uniquePercent = checkUniqueWords(original, duplicate)
        renderResult(uniquePercent)
    } else {
        alert('Please enter tex')
    }
}

// Вывод уникальности текста в %

function renderResult(percent) {
    main.result.classList.add('view')
    main.percent.innerHTML = percent
}


