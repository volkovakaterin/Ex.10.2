/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
export default function json(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    }, 500);
  }, (error) => {
    console.log('Это ошибка');
  });
}
