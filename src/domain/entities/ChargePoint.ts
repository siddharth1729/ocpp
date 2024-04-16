// domain/entities/ChargePoint.ts
export class ChargePoint {
    id: string;
    name: string;
    connectors: number[];
    // Other properties
  
    constructor(id: string, name: string, connectors: number[]) {
      this.id = id;
      this.name = name;
      this.connectors = connectors;
    }
  }
  