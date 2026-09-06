import fs from "node:fs";
const data = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const uk = data.features.find((f) => f.properties.ADM0_A3 === "GBR");
if (!uk) throw new Error("UK geometry missing");
export const project = ([lon, lat]) => [
  (lon + 8.8) * 39 + 30,
  (59.7 - lat) * 65 + 15,
];
const polygons =
  uk.geometry.type === "MultiPolygon"
    ? uk.geometry.coordinates
    : [uk.geometry.coordinates];
const path = polygons
  .filter((p) => p[0].some(([x, y]) => y > 49 && y < 60 && x > -9 && x < 3))
  .map((poly) =>
    poly
      .map(
        (ring) =>
          "M" +
          ring
            .map((point) =>
              project(point)
                .map((n) => n.toFixed(1))
                .join(","),
            )
            .join("L") +
          "Z",
      )
      .join(""),
  )
  .join("");
fs.writeFileSync("src/data/uk-path.json", JSON.stringify(path));
