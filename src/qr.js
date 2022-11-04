(async () => {
  const { AwesomeQR } = require("awesome-qr");
  const fs = require("fs");
  const path = require("path");
  const background = fs.readFileSync(path.resolve(__dirname, '.././assets/backgrounds/background.png'));

  const buffer = await new AwesomeQR({
    text: 'https://www.linkedin.com/in/juanignacioca%C3%B1ete/',
    size: 500,
    backgroundImage: background,
  }).draw();

  fs.writeFileSync('output/qr.png', buffer);
})();