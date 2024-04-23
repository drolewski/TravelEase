export enum Page {
    START = 'START',
    GEOLOCATION = 'GEOLOCATION',
    DURATION = 'DURATION',
    PRICE = 'PRICE'
}

export const navigationMap = new Map<Page, NavigationLogicType>([
    [Page.START, {next: Page.GEOLOCATION}],
    [Page.GEOLOCATION, {next: Page.DURATION}],
    [Page.DURATION, {next: Page.PRICE, previous: Page.GEOLOCATION}],
    [Page.PRICE, {previous: Page.DURATION}]
]);

type NavigationLogicType = {
    previous?: NavigationLogic,
    next?: NavigationLogic
}
