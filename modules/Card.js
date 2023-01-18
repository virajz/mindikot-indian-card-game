export class Card {
	constructor(config) {
		this.suit = config.suit
		this.rank = config.rank
		this.label = config.label
		this.weight = config.weight
	}

	get nameOfCard() {
		return this.rank + ' of ' + this.suit
	}
}
