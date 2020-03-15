// S E T U P
var readlineSync = require('readline-sync');
var systems = require('./systems.js');
var maps = require('./maps.js');

// A P P  S T A R T
console.log("\n" + Date() + "\nGame started...\n");
console.log("  /***/ /****//****/ /*/ /****/ /****/");
console.log(" / / / /***/ /***/  / / / /__  / **/");
console.log("/___/ /_/   /_/    /_/ /____/ /_____/");
console.log("  /**\\  /*/*/ /**\\  /*/ /****/ /****/  /***/ /**\\  /*/");
console.log(" / / / / / / / /\\ \\/ / / /**/ / **/   / / / / /\\ \\/ /");
console.log("/___/ /___/ /_/  \\__/ /____/ /_____/ /___/ /_/  \\__/\n");
console.log("*****************************************************\n");

// M A I N 
var IOSystem = new systems.IOSystem();
var MapSystem = new systems.MapSystem();
var MenuSystem = new systems.MenuSystem();
var EntitySystem = new systems.EntitySystem();
var userCommand;
Start();
console.log("\nGame Ended...\n" + Date())


// G A M E  L O G I C
function Start() {
    while (IOSystem.userInput != "quit") {
        IOSystem.AcceptInput(userCommand);
        if (IOSystem.userInput == 'help')
            console.log("Type menu or new game");
        if (IOSystem.userInput == "menu") 
            MenuSystem.MainMenu();
        if (IOSystem.userInput == "new game") {
            var newPlayer = EntitySystem.CreateEntity();
            console.log("Enter player name:");
            newPlayer = {name: readlineSync.prompt()};
            console.log("Hello, " + newPlayer.name + "...\n");
            MapSystem = {CurrentMap: maps.parkingLot};
            console.log(MapSystem.CurrentMap.msg);
            while (MapSystem.CurrentMap.id != 0) {
                // G L O B A L  C O M M A N D S                                              
                IOSystem.AcceptInput(userCommand);
                if (IOSystem.userInput == "quit")
                    break;
                if (IOSystem.userInput == 'help')
                    console.log("Type 'walk [direction]' to walk around.\nTry using simple commands.");
                if (IOSystem.userInput == "menu") 
                    MenuSystem.GameMenu();
                if (IOSystem.userInput == "show art")
                    MenuSystem.ShowArt();
                if ((IOSystem.userInput == "look") || (IOSystem.userInput == "look around"))
                    console.log(MapSystem.CurrentMap.hint);
                // D U N G E O N
                if (MapSystem.CurrentMap.id == 1) {                                             // 1. Parking Lot
                    if (IOSystem.userInput == "walk south")
                        console.log("You are at the front door.")
                    if (IOSystem.userInput == "open door")
                        MapSystem.CurrentMap = maps.lobby;
                }
                if (MapSystem.CurrentMap.id == 2) {                                             // 2. Lobby                        
                    if (IOSystem.userInput == "walk west")
                        console.log("Stairs to lower level.");
                    if (IOSystem.userInput == "walk east")
                        console.log("Front desk. Desk attendant: Morina the Elf.")
                    if (IOSystem.userInput == "talk to Morina")
                        console.log("Morina: \"Good morning! You can find\nthe desks downstairs.\"");
                    if (IOSystem.userInput == "walk downstairs")
                        MapSystem.CurrentMap = maps.cubicles;
                }
                if (MapSystem.CurrentMap.id == 3) {                                             // 3. Cubicle Alley
                    if (IOSystem.userInput == "walk north")
                        MapSystem.CurrentMap.walkFlag++;
                    if (IOSystem.userInput == "walk west")
                        console.log("Cubicle of Bilbob the Halfling.")
                    if (IOSystem.userInput == "investigate cubicle")
                        console.log(MapSystem.CurrentMap.investigate);
                    if (IOSystem.userInput == "take stapler") {
                        MapSystem.CurrentMap.hasItem = true;
                        console.log("Took the Stapler Of Valor.")
                    }
                    if ((MapSystem.CurrentMap.walkFlag >= 3) && (MapSystem.CurrentMap.hasItem == true))
                        MapSystem.CurrentMap = maps.mainhall;
                }
                // if (MapSystem.CurrentMap.id == 4) {                                          // 4. Main Hall

                // }              
                console.log(MapSystem.CurrentMap.msg); 
            }
        }
    }
}
