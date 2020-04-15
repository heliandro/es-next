const error = { status: 500, msg: 'internal server error' };
const success = { status: 200, products: ['rice', 'beans', 'meat', 'coffee', 'monster energy' ] };

const req1 = new Promise((resolve, reject) => setTimeout(() => reject(error), 2000));
const req2 = new Promise((resolve, reject) => setTimeout(() => resolve(success), 1000));

Promise.allSettled([req1, req2]).then(result => console.log(result));
