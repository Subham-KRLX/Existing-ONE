const themeSelect = document.querySelector("#theme-mode");
const systemAppearance = window.matchMedia("(prefers-color-scheme: dark)");
const preferenceKey = "fieldwork-appearance";
const validModes = ["light", "dark", "system"];

function applyAppearance(appearance) {
  document.documentElement.dataset.theme = appearance;
}

function resolveAppearance(mode) {
  if (mode === "system") {
    return systemAppearance.matches ? "dark" : "light";
  }
  return mode;
}

function readPreference() {
  try {
    const savedMode = localStorage.getItem(preferenceKey);
    return validModes.includes(savedMode) ? savedMode : "system";
  } catch {
    return "system";
  }
}

const initialMode = readPreference();
themeSelect.value = initialMode;
applyAppearance(resolveAppearance(initialMode));

themeSelect.addEventListener("change", () => {
  const selectedMode = themeSelect.value;
  applyAppearance(resolveAppearance(selectedMode));
  try {
    localStorage.setItem(preferenceKey, selectedMode);
  } catch {
    // The current selection still applies when browser storage is unavailable.
  }
});

systemAppearance.addEventListener("change", (event) => {
  if (themeSelect.value === "system") {
    applyAppearance(event.matches ? "dark" : "light");
  }
});
