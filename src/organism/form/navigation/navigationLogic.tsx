export enum Page {
    START = 'START',
    GEOLOCATION = 'GEOLOCATION',
    PRICE = 'PRICE'
}

export const navigationMap = new Map<Page, NavigationLogicType>([
    [Page.START, {next: Page.GEOLOCATION}],
    [Page.GEOLOCATION, {next: Page.PRICE}],
    [Page.PRICE, {previous: Page.GEOLOCATION}]
]);

type NavigationLogicType = {
    previous?: NavigationLogic,
    next?: NavigationLogic
}
