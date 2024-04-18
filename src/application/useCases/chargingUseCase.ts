// application/useCases/ChargingUseCase.ts
import { ChargingService } from '../services/ChargingService';

export class ChargingUseCase {
    constructor(private chargingService: ChargingService) { }

    async startCharging(sessionId: string, connectorId: number): Promise<void> {
        await this.chargingService.startCharging(sessionId, connectorId);
    }

    async stopCharging(sessionId: string, connectorId: number): Promise<void> {
        await this.chargingService.stopCharging(sessionId, connectorId);
    }

    // Other use cases related to charging
}
