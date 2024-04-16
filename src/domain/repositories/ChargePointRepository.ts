// domain/repositories/ChargePointRepository.ts
import { ChargePoint } from '../entities/ChargePoint';

export interface ChargePointRepository {
  getById(id: string): Promise<ChargePoint | undefined>;
  save(chargePoint: ChargePoint): Promise<void>;
  // Other repository methods
}
