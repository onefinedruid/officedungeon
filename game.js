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
            console.log("Hello, " + newPlayer.name + "...");
            MapSystem = {CurrentMap: maps.parkingLot};
            console.log(MapSystem.CurrentMap.msg);
            while (MapSystem.CurrentMap.id != 0) {
                IOSystem.AcceptInput(userCommand);
                if (IOSystem.userInput == "quit")
                    break;
                if (IOSystem.userInput == "menu") 
                    MenuSystem.MainMenu();
                if ((IOSystem.userInput == "look") || (IOSystem.userInput == "look around"))
                    console.log(MapSystem.CurrentMap.hint);
                if (MapSystem.CurrentMap.id == 1) {
                    if (IOSystem.userInput == "walk south")
                        console.log("You are at the front door.")
                    if (IOSystem.userInput == "open door") {
                        MapSystem.CurrentMap = maps.lobby;
                        console.log(MapSystem.CurrentMap.msg);
                    }
                }
            }
        }
    }
}
