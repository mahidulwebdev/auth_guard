import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const rsakeys = keyType => {
  /* Extract the file path */
  const fullPath = fileURLToPath(import.meta.url);
  const targetDir = path.resolve(fullPath, "../../");
  const filePath = path.join(targetDir, `/keys/${keyType}.key`);
  /* read the key file*/ 
  const readKey = fs.readFileSync(filePath, "utf8");
  // return
  return readKey;
};

export default rsakeys;
