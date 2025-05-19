import { Planet } from "./planets";
import { Load } from "./load";

abstract class Ship {
    name: string;
    autonomy: number;
    loadResistance: boolean;
    radiationResistance: number;

    constructor(name: string, autonomy: number, loadResistance: boolean, radiationResistance: number) {
        this.name = name;
        this.autonomy = autonomy;
        this.loadResistance = loadResistance;
        this.radiationResistance = radiationResistance;
    }

    canTravelTo(planet: Planet): boolean {
        return this.autonomy >= planet.distance * 2;
    }

    resistsRadiation(planet: Planet): boolean {
        return this.radiationResistance >= planet.radiationLevel;
    }

    canCarry(load: Load): boolean {
        return load.isCompatibleWithShip(this);
    }

    info(): string {
        return `Ship: ${this.name}`;
    }
}

class Freighter extends Ship {
    info(): string {
        return `FreighterShip: ${this.name}`;
    }
}

export { Ship, Freighter };
