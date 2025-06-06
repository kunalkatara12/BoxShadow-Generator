
type BoxShadowType = {
    offsetX: number;
    offsetY: number;
    blurRadius: number;
    spreadRadius: number;
    color: string;
    inset: boolean;
};

type DimensionsType = {
    width: number;
    height: number;
    borderRadius: number;
    borderTopLeftRadius: number;
    borderTopRightRadius: number;
    borderBottomLeftRadius: number;
    borderBottomRightRadius: number;
};

type StylingType = {
    backgroundColor: string;
    backgroundGradient: boolean;
    gradientStart: string;
    gradientEnd: string;
    gradientDirection: string;
    borderWidth: number;
    borderColor: string;
    borderStyle: string;
    opacity: number;
    rotation: number;
    scale: number;
};


export type { DimensionsType, BoxShadowType, StylingType }