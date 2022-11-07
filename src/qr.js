(async () => {
  const { AwesomeQR } = require("awesome-qr");
  const fs = require("fs");
  const path = require("path");
  const background = fs.readFileSync(path.resolve(__dirname, '.././assets/backgrounds/background.png'));
  const outputDir = 'output/'
  const delay = 1000;

  const buffer = await new AwesomeQR({
    text: 'https://www.linkedin.com/in/juanignacioca%C3%B1ete/',
    size: 500,
    backgroundImage: background,
  }).draw();

  if(!fs.existsSync(outputDir)) {
    console.info(`>>>>> There is not '${outputDir}' folder, creating directory...`);
    await new Promise(resolve => setTimeout(resolve, delay));
    try {
      fs.mkdirSync(outputDir);
    } catch (error) {
      throw new Error(`An error just happened creating '${outputDir}'.\nHere is the error: \n\t\t${error}`)
    } finally {
      console.info(`>>>>> '${outputDir}' created succesfully!`);
      await new Promise(resolve => setTimeout(resolve, delay));
    };
  };

  try {
    console.info('>>>>> Generating QR code...');
    await new Promise(resolve => setTimeout(resolve, delay));
    fs.writeFileSync('output/qr.png', buffer);
  } catch (error) {
    throw new Error(`An error just happened creating QR code.\nHere is the error: \n\t\t${error}`)
  } finally {
    console.info('>>>>> Alright, QR code generated succesfully!');
    await new Promise(resolve => setTimeout(resolve, delay));
  };

})();