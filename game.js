import { Deck } from './modules/Deck.js'

let deck = new Deck()

const cards = deck.build()

const FirstCard = cards[0]
const SecondCard = cards[13]
const ThirdCard = cards[26]
const ForthCard = cards[39]

const trumpSuit = ''

let hand = [FirstCard, SecondCard, ThirdCard, ForthCard]
const currentHandSuit = FirstCard.suit

// console.log(...hand)

// const max_val_index = hand.reduce(
// 	(max_index, currentValue, currentIndex, array) =>
// 		currentValue['weight'] > array[max_index]['weight'] ? currentIndex : max_index,
// 	0
// )

// const max_val_index = hand.reduce(function (max_index, currentValue, currentIndex, array) {
// 	if (currentValue['weight'] > array[max_index]['weight']) {
// 		return currentIndex
// 	} else if (currentValue['weight'] === array[max_index]['weight']) {
// 		if (currentValue['suit'] === trumpSuit || array[max_index]['suit'] !== trumpSuit) {
// 			return currentIndex
// 		} else if (array[max_index]['suit'] === trumpSuit) {
// 			return max_index
// 		}
// 	} else {
// 		return max_index
// 	}
// 	return currentValue['weight'] > array[max_index]['weight'] ? currentIndex : max_index
// }, 0)

// console.log(hand[max_val_index])

const winnerCard = hand.reduce(function (maxCardIndex, currentCard, currentIndex, array) {
	let index = maxCardIndex
	if (currentCard['suit'] === trumpSuit) {
		if (currentCard['suit'] === array[maxCardIndex]['suit']) {
			index = currentCard['weight'] > array[maxCardIndex]['weight'] ? currentIndex : maxCardIndex
		} else {
			index = currentIndex
		}
	} else {
		if (currentCard['suit'] === array[maxCardIndex]['suit']) {
			index = currentCard['weight'] > array[maxCardIndex]['weight'] ? currentIndex : maxCardIndex
		} else {
			index = maxCardIndex
		}
	}
	return index
}, 0)
// console.log(hand[winnerCard])

let randomCard = cards[Math.round(Math.random() * 52)]
console.log(randomCard)

const result = cards.find(({ suit }) => suit === randomCard.suit)
console.log(result)
