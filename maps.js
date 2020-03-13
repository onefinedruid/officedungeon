class Room {
    constructor(id, name, gate) {
        this.id = id
        this.name = name;
        this.gate = gate;
    }
}

var parkingLot = new Room(1, "Parking Lot", "Lobby");
    parkingLot['msg'] = "You are in the Parking Lot.";
    parkingLot['hint'] = "Not much here. Office entrance is due South.";
var lobby = new Room(2, "Lobby", "Elevator");
    lobby['msg'] = "You are in the Lobby";
    lobby['hint'] = "There is a sign on the wall.\nThere is an Elevator." 







module.exports.parkingLot = parkingLot;
module.exports.lobby = lobby;