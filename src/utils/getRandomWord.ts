const word_list: string[] = [
    'jumps', 'beach', 'drums', 'stuff', 'igloo',
]

function getRandomWord() {
    return word_list[Math.floor(Math.random()*word_list.length)];
}

export { getRandomWord }