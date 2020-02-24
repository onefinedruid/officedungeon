// Document set up
var readlineSync = require('readline-sync');   
var Player = require('./Player');
// Application startup
console.log(Date() + "\nGame started.....\n\n");
// Main Artwork
console.log("--DUNGEON CRAWL--\n*Office Edition*\n");

// Main game
var userCommand;
userCommand = readlineSync.prompt();
while ((userCommand !== "menu") || (userCommand !== "Menu") || (userCommand !== "MENU")) {
    if ((userCommand == "menu") || (userCommand == "Menu") || (userCommand == "MENU"))
        break;
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
Menu();

// Local functions
function Menu() {
    menu_display = ['SAVE', 'LOAD', 'NEW GAME', 'QUIT'];
    menu_select = readlineSync.keyInSelect(menu_display, 'Main Menu >> ');
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
    player0ne = new Player;
    player0ne.name = playerName;
}

// Eof