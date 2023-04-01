const theme = {
  DARK: "dark",
  LIGHT: "light",
};

const LOCAL_THEME = "color-theme";

(function initTheme() {
  const localTheme = localStorage.getItem(LOCAL_THEME);

  if (!localTheme) {
    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? theme.DARK
      : theme.LIGHT;
    localStorage.setItem(LOCAL_THEME, defaultTheme);
    return;
  }

  if (localTheme === theme.DARK) {
    document.documentElement.classList.add(theme.DARK);
  }
})();

(function toggleTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");

  const toggleMode = () => {
    if (localStorage.getItem(LOCAL_THEME) === theme.DARK) {
      document.documentElement.classList.remove(theme.DARK);
      localStorage.setItem(LOCAL_THEME, theme.LIGHT);
      return;
    }
    document.documentElement.classList.add(theme.DARK);
    localStorage.setItem(LOCAL_THEME, theme.DARK);
  };

  themeToggleBtn.addEventListener("click", toggleMode);
})();
