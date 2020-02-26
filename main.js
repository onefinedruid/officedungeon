// Document set up
var readlineSync = require('readline-sync');   
var Player = require('./Player');
// Application startup
console.log(Date() + "\nGame started.....\n");
// Main Artwork
console.log("  /***/ /****//****/ /*/ /****/ /****/");
console.log(" / / / /***/ /***/  / / / /__  / **/");
console.log("/___/ /_/   /_/    /_/ /____/ /_____/");
console.log("  /**\\  /*/*/ /**\\  /*/ /****/ /****/  /***/ /**\\  /*/");
console.log(" / / / / / / / /\\ \\/ / / /**/ / **/   / / / / /\\ \\/ /");
console.log("/___/ /___/ /_/  \\__/ /____/ /_____/ /___/ /_/  \\__/");
console.log("\n> Welcome, n00b.");

// Main Program
var userCommand;
userCommand = readlineSync.prompt();
while ((userCommand !== "menu") || (userCommand !== "Menu") || (userCommand !== "MENU")) {
    if ((userCommand == "menu") || (userCommand == "Menu") || (userCommand == "MENU")) {
        Menu();
        break;
    }
    else {
        if ((userCommand == "help") || (userCommand == "Help") || (userCommand == "HELP"))
            { 
            console.log("Enter \"menu\" to view game options.");
            userCommand = readlineSync.prompt();
            }
        else
            userCommand = readlineSync.prompt();
    }
}
// Load room 1 instructions
console.log("You are in the lobby.")
userCommand = readlineSync.prompt();
// Load input loop
    // figure this part out...
console.log("...Game Closed");

// Local Functions
function Menu() {
    menu_display = ['SAVE', 'LOAD', 'NEW GAME', 'QUIT'];
    menu_select = readlineSync.keyInSelect(menu_display, 'Select Option >> ');
    switch (menu_display[menu_select]) {
        case menu_display[0]:
            console.log("Game saved!");
            break;
        case menu_display[1]:
            console.log("Loading game...");
            break;
        case menu_display[2]:
            console.log("New game...");
            createPlayer();
            break;
        case menu_display[3]:
            console.log("Exiting game...");
            process.exit();
            break;
        default:
            console.log("Command not recognized");
            break;
    };
};

function createPlayer() {
    var playerName = readlineSync.question("Enter name: ");
    while (playerName == "") {
		console.log("PlayerName cannot be blank!");
		playerName = readlineSync.question("Enter name: ");
	};
    player0ne = new Player; // members: name, level, room, health, showStats()
    player0ne.name = playerName;
    player0ne.showStats();
}
// Eof
