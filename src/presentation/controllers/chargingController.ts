// presentation/controllers/ChargingController.ts
import { Request, Response } from 'express';
import { ChargingUseCase } from '../../application/useCases/chargingUseCase';

export class ChargingController {
    constructor(private chargingUseCase: ChargingUseCase) { }

    async startCharging(req: Request, res: Response): Promise<void> {
        const { sessionId, connectorId } = req.body;
        await this.chargingUseCase.startCharging(sessionId, connectorId);
        res.status(200).send('Charging started');
    }

    async stopCharging(req: Request, res: Response): Promise<void> {
        const { sessionId, connectorId } = req.body;
        await this.chargingUseCase.stopCharging(sessionId, connectorId);
        res.status(200).send('Charging stopped');
    }

    // Other controller methods
}
