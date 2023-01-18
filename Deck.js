import { Card } from './modules/Card.js'

export class Deck {
	constructor(config) {
		this.cards = []
	}

	build() {
		for (let i = 1; i <= 52; i++) {
			this.cards.push(new Card(this.defineCard(i)))
		}
		this.cards = this.shuffleDeck(this.cards)
		return this.cards
	}

	defineCard(i) {
		let suit = ''

		if (i <= 13) {
			suit = 'Hearts'
		} else if (i <= 26) {
			suit = 'Spades'
		} else if (i <= 39) {
			suit = 'Diamonds'
		} else if (i <= 52) {
			suit = 'Clubs'
		}

		let rank = ''
		let weight = ''
		let label = ''
		let rankInSuit = i % 13

		switch (rankInSuit) {
			case 1:
				rank = 'Ace'
				label = 'A'
				weight = 14
				break
			case 2:
				rank = 'Two'
				label = 2
				weight = 2
				break
			case 3:
				rank = 'Three'
				label = 3
				weight = 3
				break
			case 4:
				rank = 'Four'
				label = 4
				weight = 4
				break
			case 5:
				rank = 'Five'
				label = 5
				weight = 5
				break
			case 6:
				rank = 'Six'
				label = 6
				weight = 6
				break
			case 7:
				rank = 'Seven'
				label = 7
				weight = 7
				break
			case 8:
				rank = 'Eight'
				label = 8
				weight = 8
				break
			case 9:
				rank = 'Nine'
				label = 9
				weight = 9
				break
			case 10:
				rank = 'Ten'
				label = 10
				weight = 10
				break
			case 11:
				rank = 'Jack'
				label = 'J'
				weight = 11
				break
			case 12:
				rank = 'Queen'
				label = 'Q'
				weight = 12
				break
			default:
				rank = 'King'
				label = 'K'
				weight = 13
				break
		}

		return { suit, rank, weight, label }
	}

	shuffleDeck(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
		}
		return array
	}
}
