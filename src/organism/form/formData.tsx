export class TravelFormData {
    country?: string;
    isGeolocation?: boolean;
    durationType: DurationType = DurationType.DAYS;
    duration: number = 7;
}

export enum DurationType {
    DAYS = 'Days',
    WEEKS = 'Weeks',
    MONTHS = 'Months'
}