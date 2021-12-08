export function frenchify(str: string): string {
    let frenchifiedString = str.replace('e', 'é')
    frenchifiedString = frenchifiedString.replace('c', 'ç')
    frenchifiedString = frenchifiedString.replace('a', 'à')
    frenchifiedString = frenchifiedString.replace('o', 'ô')
    return frenchifiedString
}
