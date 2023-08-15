import express, { Request, Response } from "express";
import { bookMap, Book, BookPayload } from "../data/books";
import { makeBook, getBookArray, findBook } from "../functions/utils";
import { bookFunctionsHandler } from "../functions/book-functions-handler";

const router = express.Router();

router
  .route("/")
  .get(bookFunctionsHandler.findAll)
  .post(bookFunctionsHandler.createBook);

router
  .route("/:id")
  .get(bookFunctionsHandler.findById)
  .put(bookFunctionsHandler.modifyBookById)
  .delete(bookFunctionsHandler.deleteBookById);

export default router;
