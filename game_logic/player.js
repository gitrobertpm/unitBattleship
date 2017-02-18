function Player(name) {
	this.name = name,
	this.isTurn = false,
	this.ships = [
		{
			shipName: 'Cruiser',
			shipLength: 2,
			locations: [[0,0], [0,1]],
			damage: [],
			isSunk: false
		},
		{
			shipName: 'Destroyer',
			shipLength: 3,
			locations: [[1,0], [1,1], [1,2]],
			damage: [],
			isSunk: false
		},
		{
			shipName: 'Submarine',
			shipLength: 4,
			locations: [[2,0], [2,1], [2,2], [2,3]],
			damage: [],
			isSunk: false
		},
		{
			shipName: 'Battle Ship',
			shipLength: 4,
			locations: [[3,0], [3,1], [3,2], [3,3]],
			damage: [],
			isSunk: false
		},
		{
			shipName: 'Aircraft Carrier',
			shipLength: 5,
			locations: [[4,0], [4,1], [4,2], [4,3], [4,4]],
			damage: [],
			isSunk: false
		}
	]
}



module.exports.Player = Player;