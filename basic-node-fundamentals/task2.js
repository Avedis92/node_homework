const csv = require('csvtojson');
const fs = require('fs');

const textWriter = fs.createWriteStream('./files/text/text.txt');
const handleData = (data) => {
    textWriter.write(data)
}
const handleError = (error) => {
    console.log(error);
}

fs.createReadStream('./files/csv/csv.csv')
  .pipe(csv())
  .on('data' , handleData)
  .on('error' , handleError)