const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c']
    this.status = 'Playing'
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.getGuess = function () {
    let guessLetter = 'a'

    this.guessedLetters.push(guessLetter)
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
}

Hangman.prototype.gameStatus = function () {
    const finished = this.word.every((letter) => {
        return this.guessedLetters.includes(letter)
    })

    if (this.remainingGuesses === 0) {
        this.status = 'Failed'
    } else if (finished) {
            this.status = 'Finished'
        }

        console.log(this.status)
}