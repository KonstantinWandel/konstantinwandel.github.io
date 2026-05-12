(function () {
  const storageKey = "preferred-theme";
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function storedTheme() {
    try {
      const value = localStorage.getItem(storageKey);
      return value === "light" || value === "dark" ? value : null;
    } catch {
      return null;
    }
  }

  function systemTheme() {
    return mediaQuery.matches ? "dark" : "light";
  }

  function activeTheme() {
    return storedTheme() || systemTheme();
  }

  function applyTheme(theme, isManualChoice) {
    root.dataset.theme = theme;
    toggle.textContent = theme === "dark" ? "Light" : "Dark";
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
    toggle.setAttribute(
      "aria-label",
      `Switch to ${theme === "dark" ? "light" : "dark"} mode`
    );

    if (isManualChoice) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch {
        /* Theme still changes for the current page view. */
      }
    }
  }

  if (!toggle) {
    return;
  }

  applyTheme(activeTheme(), false);

  toggle.addEventListener("click", function () {
    applyTheme(activeTheme() === "dark" ? "light" : "dark", true);
  });

  mediaQuery.addEventListener("change", function () {
    if (!storedTheme()) {
      applyTheme(systemTheme(), false);
    }
  });
})();
