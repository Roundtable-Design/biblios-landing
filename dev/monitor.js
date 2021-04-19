const fs = require("fs");
const path = require("path");
require("log-timestamp")(() => `[${new Date().toTimeString().slice(0, 8)}] %s`);

const monitor = ({ file, dest }) => {
	console.log(`Watching file [${file.split("/").slice(-1)}] for changes`);

	function copy() {
		try {
			fs.promises.copyFile(file, dest);
		} catch (err) {
			console.error(err);
		}
	}

	copy();

	fs.watchFile(file, () => {
		console.log("Detected change");
		copy();
	});
};

[
	{
		file: path.join(__dirname, "style", "main.css"),
		dest: path.join(__dirname, "..", "debut", "assets", "main.css"),
	},
	{
		file: path.join(__dirname, "style", "nav.css"),
		dest: path.join(__dirname, "..", "debut", "assets", "nav.css"),
	},
	{
		file: path.join(__dirname, "style", "footer.css"),
		dest: path.join(__dirname, "..", "debut", "assets", "footer.css"),
	},
].forEach(monitor);
