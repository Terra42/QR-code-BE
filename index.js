/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const questions = [
    {
      name: 'url',
      message: 'What is the URL?'
    }
  ];

  inquirer.prompt(questions)
  .then(answers => {
    const url = answers.url;
    // create QR image
    const qrCode = qr.image(url);
    qrCode.pipe(fs.createWriteStream('qrcode.png'));
    console.log('QR code generated successfully!');
    // save answer in text file
    fs.writeFile('text.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
  })
  .catch(error => {
    console.error('Error:', error);
  });


