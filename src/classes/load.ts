import { Ship } from "./ships";
import { Planet } from "./planets";

abstract class Load {
    name: string;
    protected resistance: boolean;
    protected atmosphericResistance: boolean;

    constructor(name: string, resistance: boolean, atmosphericResistance: boolean) {
        this.name = name;
        this.resistance = resistance;
        this.atmosphericResistance = atmosphericResistance;
    }

    isCompatibleWithShip(ship: Ship): boolean {
        if (this.resistance) {
            return true;
        } else {
            return ship.loadResistance;
        }
    }

    isCompatibleWithPlanet(planet: Planet): boolean {
        if (this.atmosphericResistance) {
            return true;
        } else {
            return planet.atmosphere;
        }
    }

    info(): string {
        return `Load: ${this.name}`;
    }
}

class Supply extends Load {
    info(): string {
        return `SupplyLoad: ${this.name}`;
    }
}

export { Load, Supply };