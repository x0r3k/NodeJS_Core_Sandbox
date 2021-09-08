const slowWorkingFunction = () => {
    let counter = 0;
    while (counter < 5000000000) {
        counter++;
    }
    return counter;
}

process.on('message', (message) => {
    console.log(message);
    if(message === 'START') {
        console.log('Child process received START message');
        let slowResult = slowWorkingFunction();
        let message = `{"totalCount":${slowResult}}`;
        process.send(message);
    }
});