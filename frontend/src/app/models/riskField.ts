import { FieldType } from './fieldType';
import { EnumValue } from './enumValues';

export class RiskField {
    id: number;
    name: string;
    description: string;
    risk: number;
    fieldType: FieldType;
    fieldsValues: EnumValue[];
}
