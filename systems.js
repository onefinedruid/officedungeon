var readlineSync = require('readline-sync');

class System {
    constructor(name) {
        this.name = name;
    }
}

class Entity {
    constructor(name) {
        this.name = name;
    }
}

class IOSystem extends System {
    AcceptInput(userInput) {
        userInput = readlineSync.prompt();
        this.userInput = userInput;
        return userInput;
    }
}

class MenuSystem extends System {
    MainMenu() {
        console.log("");
        console.log("save");
        console.log("load");
        console.log("new game");
        console.log("quit");
        console.log("")
    }
}

class EntitySystem extends System {
    CreateEntity(name) {
        new Entity(name);
    }
}

class MapSystem extends System {
    // CurrentMap;
}

class CombatSystem {

}

module.exports.Entity = Entity;
module.exports.System = System;
module.exports.IOSystem = IOSystem;
module.exports.MapSystem = MapSystem;
module.exports.MenuSystem = MenuSystem;
module.exports.EntitySystem = EntitySystem;