// One Line to Your Younger Self — entry program.
// Writes a single original line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt) and prints it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Stop refreshing the chart at 3 a.m., kid — the coin you panic-sell tonight will pay for somebody else's patience.";

// The gate allows 1–200 characters of UTF-8 text, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${LINE.length} characters, outside the 1–200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(LINE);
