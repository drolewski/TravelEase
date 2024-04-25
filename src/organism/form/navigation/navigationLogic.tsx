export enum Page {
    START = 'START',
    GEOLOCATION = 'GEOLOCATION',
    DURATION = 'DURATION',
    PEOPLE = 'PEOPLE',
    PRICE = 'PRICE',
    SEASON = 'SEASON',
    REGION = 'REGION',
    PURPOSE = 'PURPOSE',
    ALL_INCLUSIVE = 'ALL_INCLUSIVE',
}

export const navigationMap = new Map<Page, NavigationLogicType>([
    [Page.START, {next: Page.GEOLOCATION}],
    [Page.GEOLOCATION, {next: Page.DURATION}],
    [Page.DURATION, {next: Page.PEOPLE, previous: Page.GEOLOCATION}],
    [Page.PEOPLE, {next: Page.PRICE, previous: Page.DURATION}],
    [Page.PRICE, {previous: Page.PEOPLE, next: Page.SEASON}],
    [Page.SEASON, {previous: Page.PRICE, next: Page.REGION}],
    [Page.REGION, {previous: Page.SEASON, next: Page.PURPOSE}],
    [Page.PURPOSE, {previous: Page.REGION, next: Page.ALL_INCLUSIVE}],
    [Page.ALL_INCLUSIVE, {previous: Page.PURPOSE}]
]);

type NavigationLogicType = {
    previous?: NavigationLogic,
    next?: NavigationLogic
}
