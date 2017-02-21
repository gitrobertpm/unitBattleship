var expect = require("chai").expect;

describe("checkForShip", function() {
	var checkForShip = require("../src/js/game_logic/ship_methods.js").checkForShip;
	var Player = require('../src/js/game_logic/player.js').Player;
	var player1;
	var player2;
	
	before(function() {
		player1 = new Player('me');
		player2 = new Player('you');
	});
	
	it("Should corectly report no ship at a given player's coordinate", function() {
		
		expect(checkForShip(player1, [9,9])).to.be.false;
	});
	
	
	it("Should corectly report a ship located at the given coordinate", function() {
		
		expect(checkForShip(player1, [0,0])).to.deep.equal(player1.ships[0]);
	});
	
	
	it("Should handle ships located at more than one coordinate", function() {
		
		expect(checkForShip(player1, [0,0])).to.deep.equal(player1.ships[0]);
		expect(checkForShip(player1, [0,1])).to.deep.equal(player1.ships[0]);
		expect(checkForShip(player1, [9,9])).to.be.false;
	});
	
	it("Should handle checking multiple ships", function() {
		
		expect(checkForShip(player1, [0,0])).to.deep.equal(player1.ships[0]);
		expect(checkForShip(player1, [0,1])).to.deep.equal(player1.ships[0]);
		expect(checkForShip(player1, [1,0])).to.deep.equal(player1.ships[1]);
		expect(checkForShip(player1, [1,1])).to.deep.equal(player1.ships[1]);
		expect(checkForShip(player1, [2,3])).to.deep.equal(player1.ships[2]);

		expect(checkForShip(player1, [9,9])).to.be.false;
	});
});


describe("damageShip", function() {
	var damageShip = require('../src/js/game_logic/ship_methods.js').damageShip;
	var Player = require('../src/js/game_logic/player.js').Player;
	var player1;
	var player2;
	
	before(function() {
		player1 = new Player('me');
		player2 = new Player('you');
	});
	
	it("should register damage on a given ship at a given location", function() {
		
		damageShip(player1.ships[0], [0,0]);
		
		expect(player1.ships[0].damage).to.not.be.empty;
		expect(player1.ships[0].damage[0]).to.deep.equal([0,0]);
	});
});


describe("fire", function() {
	var fire = require('../src/js/game_logic/ship_methods.js').fire;
	var Player = require('../src/js/game_logic/player.js').Player;
	var player1;
	var player2;
	
	beforeEach(function() {
		player1 = new Player('me');
		player2 = new Player('you');
	});
	
	after(function() {
		console.log('entire test suite completed');
	});
	
	afterEach(function() {
		console.log('one unit test completed');
	});
	
	it("should record damage on a players ship at a given coordinate", function() {
		
		fire(player1, [0,0]);
		
		expect(player1.ships[0].damage[0]).to.deep.equal([0,0]);
	});
	
	
	it("should NOT record damage if no ship at my coordinates", function() {
		
		fire(player1, [9,9]);
		
		expect(player1.ships.damage).to.be.empty;
	});
	
});











