function frenchify(string) {
    let frenchifiedString = string.replace('e', 'é')
    frenchifiedString = frenchifiedString.replace('c', 'ç')
    frenchifiedString = frenchifiedString.replace('a', 'à')
    frenchifiedString = frenchifiedString.replace('o', 'ô')
    return frenchifiedString
}

module.exports.frenchify = frenchify
