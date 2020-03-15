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
var lobby = new Room(2, "Lobby", "Cubicle Alley");
    lobby['msg'] = "You are in the Lobby.";
    lobby['hint'] = "Couches. Little trees. Wood smell.";
var cubicles = new Room(3, "Cubicle Alley", "Main Hall");
    cubicles['msg'] = "You are in Cubicle Alley";
    cubicles['hint'] = "Cubicles...forever... Well, at least 3 paces North.";
    cubicles['hasItem'] = false;
    cubicles['investigate'] = "A book of numbers, a few pens, and a Stapler Of Valor.";
    cubicles['walkFlag'] = 0;
var mainhall = new Room(4, "Main Hall", "TBD");
    mainhall['msg'] = "You are in the Main Hall.";
    mainhall['hint'] = "A large atrium with several doorways.";

    // Must complete action in Cubicle Alley before going forward






module.exports.parkingLot = parkingLot;
module.exports.lobby = lobby;
module.exports.cubicles = cubicles;
module.exports.mainhall = mainhall;