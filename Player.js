class Player {
    constructor(name, level, room, health) {
        this.name = name;
        this.level = 1;
        this.room = "0";
        this.health = "@@@@@";
    };
    showStats() {
        console.log(
            this.name + ", Lvl." + this.level + " , Health: " + this.health
        );
    }; 
};

module.exports = Player;