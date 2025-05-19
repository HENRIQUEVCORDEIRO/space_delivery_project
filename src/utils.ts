import { Freighter } from "./classes/ships";
import { Rocky } from "./classes/planets";
import { Supply } from "./classes/load";

function createRandomShip(): Freighter {
    const names = ["Darkside", "Thanos", "Vilgax", "Darth Vader"];
    const name = names[Math.floor(Math.random() * names.length)];
    const autonomy = 100 + Math.floor(Math.random() * 100);
    const loadResistance = Math.random() < 0.5;
    const radiationResistance = Math.floor(Math.random() * 10);
    return new Freighter(name, autonomy, loadResistance, radiationResistance);
}

function createRandomPlanet(): Rocky {
    const names = ["Zeus", "Poseidon", "Hades", "Atena"];
    const name = names[Math.floor(Math.random() * names.length)];
    const distance = 10 + Math.floor(Math.random() * 70);
    const atmosphere = Math.random() < 0.5;
    const radiationLevel = Math.floor(Math.random() * 10);
    return new Rocky(name, distance, atmosphere, radiationLevel);
}

function createRandomLoad(): Supply {
    const names = ["Steel", "Medic Kit", "Food Box", "Fuel"];
    const name = names[Math.floor(Math.random() * names.length)];
    const resistance = Math.random() < 0.5;
    const atmosphericResistance = Math.random() < 0.5;
    return new Supply(name, resistance, atmosphericResistance);
}

export { createRandomShip, createRandomPlanet, createRandomLoad };
