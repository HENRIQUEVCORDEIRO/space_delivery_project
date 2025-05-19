export abstract class Planet {
    name: string;
    distance: number;
    atmosphere: boolean;
    radiationLevel: number;

    constructor(name: string, distance: number, atmosphere: boolean, radiationLevel: number) {
        this.name = name;
        this.distance = distance;
        this.atmosphere = atmosphere;
        this.radiationLevel = radiationLevel;
    }

    info(): string {
        return `Planet: ${this.name}`;
    }
}

export class Rocky extends Planet {
    info(): string {
        return `RockyPlanet: ${this.name}`;
    }
}

