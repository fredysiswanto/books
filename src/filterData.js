function filterMyData(myData, filters = {}) {
  const { reading, finished, name } = filters;
  let data;
  // console.log(Object.keys(filters)[0]);
  if (reading !== undefined) {
    data = myData.filter((book) => book.reading === Boolean(Number(reading)));
  } else if (finished !== undefined) {
    data = myData.filter((book) => book.finished === Boolean(Number(finished)));
  } else if (name !== undefined) {
    data = myData.filter((book) =>
      book.name.toLowerCase().includes(name.toLocaleLowerCase())
    );
  }
  return data;
}

// const dataAfterFilter = filterMyData(books);
// const data = dataAfterFilter.map(({ id, name, publisher }) => ({
//   id,
//   name,
//   publisher,
// }));

export default filterMyData;
