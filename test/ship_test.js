var expect = require("chai").expect;

describe("checkForShip", function() {
	var checkForShip = require("../game_logic/ship_methods.js").checkForShip;
	var Player = require('../game_logic/player.js').Player;
	var player1 = new Player('me');
	var player2 = new Player('you');
	
	it("Should corectly report no ship at a given player's coordinate", function() {
		
		// player = {
			// ships: [
				// {
					// locations: [[0,0]]
				// }
			// ]
		// };
		
		expect(checkForShip(player1, [9,9])).to.be.false;
	});
	
	
	it("Should corectly report a ship located at the given coordinate", function() {
		
		// player = {
			// ships: [
				// {
					// locations: [[0,0]]
				// }
			// ]
		// };
		
		expect(checkForShip(player1, [0,0])).to.deep.equal(player1.ships[0]);
	});
	
	
	it("Should handle ships located at more than one coordinate", function() {
		
		// player = {
			// ships: [
				// {
					// locations: [[0,0], [0,1]]
				// }
			// ]
		// };
		
		expect(checkForShip(player1, [0,0])).to.deep.equal(player1.ships[0]);
		expect(checkForShip(player1, [0,1])).to.deep.equal(player1.ships[0]);
		expect(checkForShip(player1, [9,9])).to.be.false;
	});
	
	it("Should handle checking multiple ships", function() {
		
		// player = {
			// ships: [
				// {
					// locations: [[0,0], [0,1]]
				// },
				// {
					// locations: [[1,0], [1,1]]
				// },
				// {
					// locations: [[2,0], [2,1], [2,2], [2,3]]
				// }
			// ]
		// };
		
		expect(checkForShip(player1, [0,0])).to.deep.equal(player1.ships[0]);
		expect(checkForShip(player1, [0,1])).to.deep.equal(player1.ships[0]);
		expect(checkForShip(player1, [1,0])).to.deep.equal(player1.ships[1]);
		expect(checkForShip(player1, [1,1])).to.deep.equal(player1.ships[1]);
		expect(checkForShip(player1, [2,3])).to.deep.equal(player1.ships[2]);

		
		expect(checkForShip(player1, [9,9])).to.be.false;
	});
});


describe("damageShip", function() {
	var damageShip = require('../game_logic/ship_methods.js').damageShip;
	var Player = require('../game_logic/player.js').Player;
	var player1 = new Player('me');
	var player2 = new Player('you');
	
	it("should register damage on a given ship at a given location", function() {
		// var ship = {
			// locations: [[0,0]],
			// damage: []
		// }
		
		damageShip(player1.ships[0], [0,0]);
		
		expect(player1.ships[0].damage).to.not.be.empty;
		expect(player1.ships[0].damage[0]).to.deep.equal([0,0]);
	});
});


describe("fire", function() {
	var fire = require('../game_logic/ship_methods.js').fire;
	var Player = require('../game_logic/player.js').Player;
	var player1 = new Player('me');
	var player2 = new Player('you');
	
	it("should record damage on a players ship at a given coordinate", function() {
		// var player = {
			// ships: [
				// {
					// locations: [[0,0]],
					// damage: []
				// }
			// ]
		// }
		
		fire(player1, [0,0]);
		
		expect(player1.ships[0].damage[0]).to.deep.equal([0,0]);
	});
	
	
	it("should NOT record damage if no ship at my coordinates", function() {
		// var player = {
			// ships: [
				// {
					// locations: [[0,0]],
					// damage: []
				// }
			// ]
		// }
		
		fire(player1, [9,9]);
		
		expect(player1.ships.damage).to.be.empty;
	});
	
});











