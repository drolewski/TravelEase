export class TravelFormData {
    country?: string;
    isGeolocation?: boolean;
    durationType: DurationType = DurationType.DAYS;
    duration: number = 7;
    people: number = 2;
    price: PriceRange;
    season: SeasonType;
    region: RegionType;
    purpose: PurposeType;
    allInclusive?: boolean;
    transport: TransportType;
}

export enum DurationType {
    DAYS = 'Days',
    WEEKS = 'Weeks',
    MONTHS = 'Months'
}

export enum PriceValue {
    MIN = {min: 0, max: 2000} as PriceRange,
    4000 = {min: 2000, max: 4000} as PriceRange,
    6000 = {min: 4000, max: 6000} as PriceRange,
    8000 = {min: 6000, max: 8000} as PriceRange,
    MAX = {min: 8000} as PriceRange,
}

export interface PriceRange {
    min?: number;
    max?: number;
}

export enum SeasonType {
    SPRING = 'Spring',
    SUMMER = 'Summer',
    AUTUMN = 'Autumn',
    WINTER = 'Winter'
}

export enum RegionType {
    EUROPE = 'Europe',
    ASIA = 'Asia',
    NORTH_AMERICA = 'North America',
    SOUTH_AMERICA = 'South America',
    AFRICA = 'Africa',
    AUSTRALIA = 'Australia',
}

export enum PurposeType {
    RELAX = 'Relax and sunbathing',
    HISTORY = 'Visiting historical monuments',
    TREKKING = 'Trekking',
    DIVING = 'Diving',
    CUISINE = 'Local cuisine',
    CULTURE = 'Local culture',
    OUTDOOR = 'Outdoor activities'
}

export enum TransportType {
    TRAIN = 'Train',
    AIRPLANE = 'AIRPLANE',
    SHIP = 'Ship',
    CAR = 'Car',
    MOTORCYCLE = 'Motorcycle',
    CAMPER = 'Camper',
    WALK = 'Walk',
    OWN = 'Own'
}
