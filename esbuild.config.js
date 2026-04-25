// esbuild.config.js (CommonJS style)
const esbuild = require("esbuild");
const path = require("path");
const fs = require("fs");

const inlineCssFixed = {
  name: "inline-css-fixed",
  setup(build) {
    build.onLoad({ filter: /\.css$/ }, (args) => {
      const css = fs.readFileSync(args.path, "utf8");
      const escaped = css.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
      return {
        contents: `
          const style = document.createElement('style');
          style.textContent = \`${escaped}\`;
          document.head.appendChild(style);
        `,
        loader: "js",
      };
    });
  },
};

const buildOptions = {
  entryPoints: ["js/app.js"],
  outfile: "js/bundle.js",
  bundle: true,
  format: "esm",
  loader: {
    ".js": "jsx",
    ".jsx": "jsx",
    ".ts": "ts",
    ".tsx": "tsx",
  },
  // Note: remove ".css": "css" from loader since the plugin handles it
  plugins: [inlineCssFixed],
  allowOverwrite: true,
  minify: true,
  sourcemap: false,
};

async function run() {
  if (process.argv.includes("--watch")) {
    const ctx = await esbuild.context(buildOptions);
    await ctx.watch();
    console.log("👀 Watching for changes...");
  } else {
    await esbuild.build(buildOptions);
    console.log("✅ Build complete");
  }
}

run().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
