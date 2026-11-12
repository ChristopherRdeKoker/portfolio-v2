export enum ThemeEnum {
  Light = 1,
  Dark = 2,
}

const THEME_STORAGE_KEY = "theme";

const storedThemeNames: Record<ThemeEnum, string> = {
  [ThemeEnum.Light]: "light",
  [ThemeEnum.Dark]: "dark",
};

export const themeInitScript = `(function () {
  try {
    var saved = localStorage.getItem("${THEME_STORAGE_KEY}");
    var dark = saved ? saved === "${storedThemeNames[ThemeEnum.Dark]}" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();`;

export function applyTheme(theme: ThemeEnum) {
  const isDark = theme === ThemeEnum.Dark;
  document.documentElement.classList.toggle("dark", isDark);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, storedThemeNames[theme]);
  } catch {}
}
