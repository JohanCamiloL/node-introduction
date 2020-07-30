const calculator = require('./calculator');
const fs = require('fs');

const FILE_NAME = 'log.txt';

/**
 * Writes data on file specified.
 * @param {String} fileName File name.
 * @param {String} data Data to be written on file.
 */
const writeFile = (fileName, data) => {
    fs.exists(fileName, (exists) => {
        if (exists) {
            fs.appendFile(fileName, data + '\n', (error) => {
                if (error) console.log('Error en la escritura');
                else console.log('Escritura realizada correctamente');
            });
        } else {
            fs.writeFile(fileName, data + '\n', (error) => {
                if (error) console.log('Error en la escritura');
                else console.log('Escritura realizada correctamente');
            });
        }
    });
}

writeFile(FILE_NAME, `7 x 4 = ${calculator.mult(7, 4)}`);
writeFile(FILE_NAME, `5 + 3 = ${calculator.sum(5, 3)}`);