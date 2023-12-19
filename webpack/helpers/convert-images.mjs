import sharp from 'sharp';
import glob from 'glob';

glob("frontend/images/**/*.{jpg,png,jpeg}", function (er, files) {
  files.forEach(filePath => {
    const fileName = filePath.replace(/^.*[\\\/]/, '').split('.')[0];
    sharp(filePath).toFormat('webp').toFile(`static/images/${fileName}.webp`);
    sharp(filePath).toFormat('avif').toFile(`static/images/${fileName}.avif`);
  })
})
