import { getAbout, getBooks } from './src/interface';

const get = async function () {
  await getAbout();
  await getBooks();
};

get();
