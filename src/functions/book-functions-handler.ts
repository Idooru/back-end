import express, { Request, Response } from "express";
import { findBook, getBookArray, makeBook } from "./utils";
import { BookPayload, bookMap } from "../data/books";

export const bookFunctionsHandler = {
  findAll: (req: Request, res: Response) => {
    return res.send(getBookArray());
  },

  findById: (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const books = getBookArray();

    const bookFound = findBook(books, id);

    if (!bookFound) {
      return res.status(400).send("not found");
    }

    return res.send(bookFound);
  },

  createBook: (req: Request, res: Response) => {
    const bookPayload: BookPayload = req.body;
    let bookMapLength = bookMap.size;

    const newBook = makeBook(bookPayload);

    bookMap.set(newBook.id, newBook);
    return res.send("ok");
  },

  modifyBookById: (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bookPayload: BookPayload = req.body;

    const books = getBookArray();
    const modifiedBook = makeBook(bookPayload, id);

    let bookFound = findBook(books, id);

    if (!bookFound) {
      return res.status(400).send("not found");
    }

    bookFound = modifiedBook;
    bookMap.set(bookFound.id, bookFound);

    return res.send("ok");
  },

  deleteBookById: (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const books = getBookArray();
    const bookFound = findBook(books, id);

    if (!bookFound) {
      return res.status(400).send("not found");
    }

    bookMap.delete(bookFound.id);

    return res.send("ok");
  },
};
