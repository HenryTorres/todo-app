import { ITheme } from "./itheme";

export const THEMES: ITheme = {
    light: {
        backgroundend: 'hsl(225, 12%, 94%)',
        background: 'hsl(0, 0%, 989%)',
        labels: 'hsl(235, 19%, 35%)',
        labelstitle: 'hsl(0, 0%, 98%)',
        linecolor: 'hsl(234, 39%, 85%)',
        urlbackgroundimage: 'url(assets/images/bg-desktop-light.jpg)',
        textcompleted: 'hsl(240, 2%, 84%)',
        textfilters: 'hsl(249, 3%, 58%)'
    },
    dark: {
        backgroundend: 'hsl(240, 20%, 12%)',
        background: 'hsl(235, 24%, 19%)',
        labels: 'hsl(235, 29%, 83%)',
        labelstitle: 'hsl(0, 0%, 98%)',
        linecolor: 'hsl(235, 17%, 26%)',
        urlbackgroundimage: 'url(assets/images/bg-desktop-dark.jpg)',
        textcompleted: 'hsl(235, 13%, 35%)',
        textfilters: 'hsl(238, 14%, 43%)'
    }
}
