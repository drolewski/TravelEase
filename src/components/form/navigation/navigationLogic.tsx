export enum NavigationLogic {
    GEOLOCATION = {next: NavigationLogic.PRICE} as NavigationLogicType,
    PRICE = {previous: NavigationLogic.GEOLOCATION} as NavigationLogic
}

type NavigationLogicType = {
    previous?: NavigationLogic,
    next?: NavigationLogic
}
