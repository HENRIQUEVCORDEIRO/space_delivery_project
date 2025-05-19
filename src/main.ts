import { createRandomShip, createRandomPlanet, createRandomLoad } from "./utils";
import { Ship } from "./classes/ships";
import { Planet } from "./classes/planets";
import { Load } from "./classes/load";

const ship: Ship = createRandomShip();
const planet: Planet = createRandomPlanet();
const load: Load = createRandomLoad();

const canTravel = ship.canTravelTo(planet);
const radiationSafe = ship.resistsRadiation(planet);
const canCarryLoad = ship.canCarry(load);
const loadPlanetCompatible = load.isCompatibleWithPlanet(planet);

console.log("\nSituação: ");
console.log(ship.info());
console.log(planet.info());
console.log(load.info());

console.log("\nResultado: ");

if (canTravel && radiationSafe && canCarryLoad && loadPlanetCompatible) {
    console.log("A viagem é possivel!");
} else {
    console.log("A viagem não é possível por quê:");
    if (!canTravel) console.log("- A nave não tem autonomia o suficiente.");
    if (!radiationSafe) console.log("- A radiação do planeta é muito alta.");
    if (!canCarryLoad) console.log("- A nave não é capaz de transportar a carga.");
    if (!loadPlanetCompatible) console.log("- A carga não pode entrar em planetas sem atmosfera.");
}
