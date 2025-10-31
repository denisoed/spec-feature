#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_FOLDER = "spec";
const args = process.argv.slice(2);
const command = args[0];

if (command === "init") {
  const targetDir = process.cwd();
  const folderName = args[1] || DEFAULT_FOLDER;
  const destinationDir = path.join(targetDir, folderName);
  const templateDir = path.join(__dirname, "..", DEFAULT_FOLDER);

  if (!fs.existsSync(templateDir)) {
    console.error(`❌ Template directory not found: ${templateDir}`);
    process.exit(1);
  }

  function copyRecursive(src, dest, relative = "") {
    const stat = fs.statSync(src);

    if (stat.isDirectory()) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
        if (relative) {
          console.log(`Created: ${folderName}/${relative}`);
        }
      }

      fs.readdirSync(src).forEach(entry => {
        const nextRelative = relative ? `${relative}/${entry}` : entry;
        copyRecursive(path.join(src, entry), path.join(dest, entry), nextRelative);
      });
      return;
    }

    if (fs.existsSync(dest)) {
      console.log(`Skipped (already exists): ${folderName}/${relative}`);
      return;
    }

    fs.copyFileSync(src, dest);
    console.log(`Created: ${folderName}/${relative}`);
  }

  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }

  copyRecursive(templateDir, destinationDir);
  console.log(`✅ Spec Feature initialized in '${folderName}' folder!`);
  process.exit(0);
}

console.log("Usage: npx spec-feature init [folder-name]");
process.exit(1);
