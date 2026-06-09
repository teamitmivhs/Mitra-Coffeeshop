import { loadFont as loadBebas } from "@remotion/google-fonts/BebasNeue";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadPacifico } from "@remotion/google-fonts/Pacifico";

export const display = loadBebas().fontFamily;
export const body = loadInter("normal", { weights: ["400", "700", "900"] }).fontFamily;
export const script = loadPacifico().fontFamily;

export const colors = {
  cream: "#f5e6d3",
  creamLight: "#fbf3e7",
  espresso: "#2a1810",
  caramel: "#b87333",
  caramelDark: "#8b4513",
  mint: "#7ab287",
  accent: "#e8a87c",
};
