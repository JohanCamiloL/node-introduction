const fs = require('fs');

function writeOnFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log('Existe algun error en la escritura');
            return;
        }

        console.log('Escritura finalizada correctamente');
    });
}


fs.readFile('test.txt', 'UTF-8', (error, data) => {
    if (error) {
        console.log('Error en la lectura');
        return;
    }

    const upperData = data.toUpperCase();

    writeOnFile('test.txt', upperData);
});