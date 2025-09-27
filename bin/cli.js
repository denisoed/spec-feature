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
  const folderName = args[1] || "spec"; // Use provided folder name or default to "spec"
  const destinationDir = path.join(targetDir, folderName);
  const templatesDir = path.join(__dirname, "../spec");

  function copyRecursive(src, dest) {
    const stat = fs.statSync(src);
    
    if (stat.isDirectory()) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      fs.readdirSync(src).forEach(file => {
        copyRecursive(path.join(src, file), path.join(dest, file));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  }

  // Create the destination directory if it doesn't exist
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }

  fs.readdirSync(templatesDir).forEach(file => {
    const src = path.join(templatesDir, file);
    const dest = path.join(destinationDir, file);

    if (!fs.existsSync(dest)) {
      copyRecursive(src, dest);
      console.log(`Created: ${folderName}/${file}`);
    } else {
      console.log(`Skipped (already exists): ${folderName}/${file}`);
    }
  });

  console.log(`✅ Spec Feature initialized in '${folderName}' folder!`);
} else {
  console.log("Usage: npx spec-feature init [folder-name]");
}
