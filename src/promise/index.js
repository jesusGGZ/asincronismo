const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whooooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => (
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                
            }, timeout);
        }
    });
)