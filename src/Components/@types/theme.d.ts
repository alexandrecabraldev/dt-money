import { ThemeGlobal } from "../Global/ThemeGlobal";

type CustomTheme = typeof ThemeGlobal;

declare module "styled-components"{
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends CustomTheme{}
}