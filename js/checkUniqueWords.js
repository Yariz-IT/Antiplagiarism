//  Проверка на уникальность текса в % по словам

export function checkUniqueWords(original, duplicate) {
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