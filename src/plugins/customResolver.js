// Universal resolver for auto-importing components from ./src/components/**/*.tsx
import fs from "fs";
import path from "path";

function getAllComponentFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllComponentFiles(filePath));
    } else if (file.endsWith(".tsx")) {
      results.push(filePath);
    }
  });
  return results;
}

function customResolver() {
  const baseDir = path.resolve(__dirname, "../components");
  const files = getAllComponentFiles(baseDir);
  return files.map((filePath) => {
    // filePath: .../src/components/Foo/Bar.tsx or .../src/components/NavBar.tsx
    const relPath = path.relative(baseDir, filePath).replace(/\\/g, "/");
    const parts = relPath.split("/");
    let name, from;
    if (parts.length === 1) {
      // e.g., NavBar.tsx => NavBar
      name = parts[0].replace(/\.tsx$/, "");
      from = `@/components/${name}`;
    } else {
      // e.g., Home/Banner.tsx => HomeBanner
      name = parts[0] + parts[1].replace(/\.tsx$/, "");
      from = `@/components/${parts[0]}/${parts[1].replace(/\.tsx$/, "")}`;
    }
    return {
      name,
      from,
      type: "named",
      importName: parts.length === 1 ? name : parts[1].replace(/\.tsx$/, ""),
      originalName: parts.length === 1 ? name : parts[1].replace(/\.tsx$/, ""),
    };
  });
}

export default customResolver;
