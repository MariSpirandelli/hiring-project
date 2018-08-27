import { RiskField } from './riskField';

export class Risk {
    id: number;
    name: string;
    description: string;
    fields: RiskField[];
}
