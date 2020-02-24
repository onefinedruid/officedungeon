// Document set up
var readlineSync = require('readline-sync');   
var Player = require('./Player');
// Application startup
console.log(Date() + "\nGame started.....\n");
// Main Artwork
console.log("Office Dungeon\n\n> Welcome, n00b.");

// Main Program
var userCommand;
Menu();
console.log("**Load room 1 instructions\n");
console.log("***Load input loop\n\n");
console.log("...Game Closed");


// Local Functions
function Menu() {
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
    player0ne = new Player; // members: name, level, room, health, showStats()
    player0ne.name = playerName;
    player0ne.showStats();
}
// Eof