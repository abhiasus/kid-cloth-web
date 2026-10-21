// Loads every PNG in src/assets/image. Use img("file_name_without_extension")
const files = import.meta.glob("../assets/image/*.png", {
  eager: true,
  import: "default",
});

export function img(name) {
  return files[`../assets/image/${name}.png`] || "";
}
