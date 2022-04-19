const colorNames = {
    anakiwa: "#8CC2FF",
    blumine: "#1F5189",
    dodgerBlue: "#2188FF",
    doveGray: "#6D6D6D",
    ironTransparent: "rgba(209, 213, 218, 0.3)",
    mercury: "#e5e5e5",
    mineShaft: "#252525",
    mineShaftLighter: "#313131",
    porcelain: "#F2F3F4",
    scienceBlue: "#0366D6",
    shipCove: "#6D93BE",
    slateGray: "#6E7E91",
    tropicalBlue: "#CDE0F7",
    tundora: "#414141",
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
};

const common = {
    breakpoints: {
        mobileMax: 767,
        tabletVerticalMax: 991,
        tabletHorizontalMax: 1199,
    },
    boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadiusSmall: "4px",
};

export const themeLight = {
    ...common,
    colors: {
        primary: colorNames.scienceBlue,
        textPrimary: colorNames.mineShaft,
        site: {
            background: colorNames.whiteLilac,
            text: colorNames.slateGray,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.anakiwa,
        },
        boxBackground: colorNames.white,
        headerLine: colorNames.mercury,
        tile: {
            border: colorNames.porcelain,
            borderHover: colorNames.tropicalBlue,
            header: colorNames.scienceBlue,
        },
        themeToggler: {
            background: colorNames.mercury,
            icon: colorNames.white,
        },
    },
};

export const themeDark = {
    ...common,
    colors: {
        primary: colorNames.dodgerBlue,
        textPrimary: colorNames.white,
        site: {
            background: colorNames.mineShaft,
            text: colorNames.white,
        },
        buttonLink: {
            text: colorNames.white,
            border: colorNames.ironTransparent,
            shadow: colorNames.shipCove,
        },
        boxBackground: colorNames.mineShaftLighter,
        headerLine: colorNames.tundora,
        tile: {
            border: colorNames.tundora,
            borderHover: colorNames.blumine,
            header: colorNames.white,
        },
        themeToggler: {
            background: colorNames.doveGray,
            icon: colorNames.mineShaft,
        },
    },
};