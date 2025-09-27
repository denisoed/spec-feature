#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const command = args[0];

if (command === "init") {
  const targetDir = process.cwd();
  const templatesDir = path.join(__dirname, "../spec");

  fs.readdirSync(templatesDir).forEach(file => {
    const src = path.join(templatesDir, file);
    const dest = path.join(targetDir, file);

    if (!fs.existsSync(dest)) {
      fs.copyFileSync(src, dest);
      console.log(`Created file: ${file}`);
    } else {
      console.log(`Skipped (already exists): ${file}`);
    }
  });

  console.log("✅ SpecFeature initialized!");
} else {
  console.log("Usage: npx spec-feature init");
}
