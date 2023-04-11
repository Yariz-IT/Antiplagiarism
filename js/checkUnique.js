//  Проверка на уникальность текса в %

export function checkUnique(original, duplicate) {
    const regularExpressions = /[ \n]+/
    original = original.trim()
    duplicate = duplicate.trim()
    original = original.split(regularExpressions)
    duplicate = duplicate.split(regularExpressions)

    const unique = duplicate.filter((value, index) => {
        return original[index] !== value
    })

    let percent = duplicate.length / 100 * unique.length
    percent = percent.toFixed(1)

    return percent
}