const writeOutput = (data) => {
    process.stdout.write(`The reverse string is: ${data}`);
};

const handleData = (data) => {
    const stringifiedData = data.toString();
    const reverseString = stringifiedData.split('').reverse().join('');
    writeOutput(reverseString);
};

process.stdin.addListener('data', handleData);
