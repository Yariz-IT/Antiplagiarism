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
        const uniquePercent =  checkUniqueWords(original, duplicate)
        renderResult(uniquePercent)
    } else {
        alert('Please enter tex')
    }

}

//  Проверка на уникальность текса в %

function checkUnique(original, duplicate) {
    const regularExpressions = /[ \n]+/
    original = original.trim()
    duplicate = duplicate.trim()
    original = original.split(regularExpressions)
    duplicate = duplicate.split(regularExpressions)

    // Проверка через пустые строки, 
    // как атльтернативный вариант регулярным выражениям

    // original = original.split('')
    // duplicate = duplicate.split('')

    // original = original.split(' ')
    // duplicate = duplicate.split(' ')

    const unique = duplicate.filter((value, index) => {
        return original[index] !== value
    })

    let percent = duplicate.length / 100 * unique.length
    percent = percent.toFixed(1)

    return percent
}


//  Проверка на уникальность текса в % по словам

function checkUniqueWords(original, duplicate) {
    const regularExpressions = /[,.;:?!]?[ ]+[а-я]{1,3}[ ]+|[ ,.;:?!]+/i
    original = original.trim()
    duplicate = duplicate.trim()
    original = original.split(regularExpressions)
    duplicate = duplicate.split(regularExpressions)
    original = original.filter(value => value.length > 3)
    duplicate = duplicate.filter(value => value.length > 3)


    original.forEach(word => {
        const index = duplicate.indexOf(word)
        if (index >= 0)
            duplicate.splice(index, 1)
    })


    let percent = original.length / 100 * duplicate.length
    percent = percent.toFixed(1)

    return(percent)

}

// Вывод уникальности текста в %

function renderResult(percent) {
    main.result.classList.add('view')
    main.percent.classList.remove('sight')
    main.percent.innerHTML = percent
}

