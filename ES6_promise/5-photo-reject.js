export default function uploadPhoto(filename) {
  return new Promise((reject) => {
    reject({ error: `${filename} cannot be processed` });
  });
}
