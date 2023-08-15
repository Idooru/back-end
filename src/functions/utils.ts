import { Book, BookPayload, bookMap } from "../data/books";

const getBookArray = () => Array.from(bookMap.values());

const makeBook = (bookPayload: BookPayload, id?: number): Book => {
  if (!id) {
    // 새로 책을 만드는 경우

    const books = getBookArray();

    const maxIdElement = books.reduce(
      (maxElement: Book, currentElement: Book) =>
        !maxElement || currentElement.id > maxElement.id
          ? currentElement
          : maxElement
    );

    const newId = { ...maxIdElement };
    newId.id++;

    return {
      id: newId.id,
      subject: bookPayload.subject,
      author: bookPayload.author,
      publisher: bookPayload.publisher,
      date: bookPayload.date,
      price: bookPayload.price,
      summary: bookPayload.summary,
      photo: bookPayload.photo,
    };
  }
  // 기존 책을 수정하는 경우

  return {
    id,
    subject: bookPayload.subject,
    author: bookPayload.author,
    publisher: bookPayload.publisher,
    date: bookPayload.date,
    price: bookPayload.price,
    summary: bookPayload.summary,
    photo: bookPayload.photo,
  };
};

const findBook = (books: Book[], id: number) =>
  books.find((book) => book.id === id);

export { getBookArray, makeBook, findBook };
