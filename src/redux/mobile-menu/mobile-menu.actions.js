import { MobileMenuActionTypes } from "./mobile-menu.types";

export const toggleMobileMenu = () => ({
    type: MobileMenuActionTypes.TOGGLE_MOBILE_MENU
});

export const closeMobileMenu = () => ({
    type: MobileMenuActionTypes.CLOSE_MOBILE_MENU
});
