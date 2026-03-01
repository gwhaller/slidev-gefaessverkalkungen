import { defineConfig, presetUno } from "unocss";
import { presetTailwindMotion } from "unocss-preset-tailwindcss-motion";

export default defineConfig({
  presets: [presetUno(), presetTailwindMotion()],
  shortcuts: {
    box: "relative w-34 h-18 leading-tight justify-center items-center flex border-(white 2) rounded p-1",
    line: "absolute content-[''] absolute bg-white rounded-full h-1 -top-7",
  },
});
