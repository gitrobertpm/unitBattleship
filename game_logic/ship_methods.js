function checkForShip(player, coordinates) {
	var shipPresent, ship;
	
	for (var i = 0; i < player.ships.length; i++) {
		ship = player.ships[i];
		
		shipPresent = ship.locations.filter(function(actualCoordinates) {
			return (actualCoordinates[0] === coordinates[0]) && (actualCoordinates[1] === coordinates[1]);
		})[0];
		
		if (shipPresent) {
			return ship;
		}
	}
	
	return false;
};

function damageShip(ship, hits) {
	ship.damage.push(hits);
}

function fire(player, coordinates) {
	var ship = checkForShip(player, coordinates);
	
	if (ship) {
		damageShip(ship, coordinates);
	}
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;