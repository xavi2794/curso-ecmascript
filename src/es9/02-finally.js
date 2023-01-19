const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Resolve');
        } else{
            reject('Reject');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finnaly'));

    