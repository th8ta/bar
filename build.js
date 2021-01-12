const { build } = require("esbuild");

build({
  entryPoints: ["./src/contract.ts"],
  outdir: "./dist",
  minify: false,
  bundle: false,
}).catch(() => process.exit(1));
