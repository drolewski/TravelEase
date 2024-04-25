export enum Page {
    START = 'START',
    GEOLOCATION = 'GEOLOCATION',
    DURATION = 'DURATION',
    PEOPLE = 'PEOPLE',
    PRICE = 'PRICE',
    SEASON = 'SEASON',
}

export const navigationMap = new Map<Page, NavigationLogicType>([
    [Page.START, {next: Page.GEOLOCATION}],
    [Page.GEOLOCATION, {next: Page.DURATION}],
    [Page.DURATION, {next: Page.PEOPLE, previous: Page.GEOLOCATION}],
    [Page.PEOPLE, {next: Page.PRICE, previous: Page.DURATION}],
    [Page.PRICE, {previous: Page.PEOPLE, next: Page.SEASON}],
    [Page.SEASON, {previous: Page.PRICE}]
]);

type NavigationLogicType = {
    previous?: NavigationLogic,
    next?: NavigationLogic
}
