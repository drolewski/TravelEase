import {Page} from "@/organism/form/navigation/navigationLogic";

export const isActive = (currentPage, formData) => {
    if (currentPage === Page.GEOLOCATION) {
        return !!formData?.country;
    }
    if (currentPage === Page.DURATION) {
        return !!formData?.duration && !!formData?.durationType;
    }
    if (currentPage === Page.PEOPLE) {
        return !!formData?.people
    }
    if (currentPage === Page.PRICE) {
        return !!formData?.price
    }
    if (currentPage === Page.SEASON) {
        return !!formData?.season
    }
    if (currentPage === Page.REGION) {
        return !!formData?.region
    }
    if (currentPage === Page.PURPOSE) {
        return !!formData?.purpose
    }
    if (currentPage === Page.ALL_INCLUSIVE) {
        return !!formData?.allInclusive
    }
    if (currentPage === Page.TRANSPORT) {
        return !!formData?.transport
    }
    return true;
}