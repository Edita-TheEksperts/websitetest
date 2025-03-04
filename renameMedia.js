const fs = require("fs");
const path = require("path");

// Change this to the folder where your media files are stored
const mediaDir = path.join(__dirname, "public/images/logos");

// Allowed file extensions
const allowedExtensions = [".png", ".jpg", ".jpeg", ".svg", ".mp4", ".webp", ".gif"];

fs.readdir(mediaDir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();

    // Check if the file is a media file and not already renamed
    if (allowedExtensions.includes(ext) && !file.startsWith("the-eksperts-")) {
      const oldPath = path.join(mediaDir, file);
      const newPath = path.join(mediaDir, `the-eksperts-${file}`);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error renaming ${file}:`, err);
        } else {
          console.log(`Renamed: ${file} ➡️ the-eksperts-${file}`);
        }
      });
    }
  });
});
