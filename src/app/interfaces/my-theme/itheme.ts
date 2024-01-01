export interface IThemeProperties {
    backgroundend: string;
    background: string;
    labels: string;
    labelstitle: string;
    linecolor: string;
    urlbackgroundimage: string;
    textcompleted: string;
    textfilters: string;
}

export interface ITheme {
    light: IThemeProperties;
    dark: IThemeProperties;
}

export enum TypeTheme {
    light = 'light',
    dark = 'dark'
}
