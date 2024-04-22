export enum Page {
    GEOLOCATION = 'GEOLOCATION',
    PRICE = 'PRICE'
}

export const navigationMap = new Map<Page, NavigationLogicType>([
    [Page.GEOLOCATION, {next: Page.PRICE}],
    [Page.PRICE, {previous: Page.GEOLOCATION}]
]);

type NavigationLogicType = {
    previous?: NavigationLogic,
    next?: NavigationLogic
}
