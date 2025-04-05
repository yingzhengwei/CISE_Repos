import { GetServerSideProps, NextPage } from "next";

interface Book {
  _id: string;
  title: string;
  isbn: string;
  author: string;
  description: string;
  published_date: string;
  publisher: string;
}

type BooksProps = {
  books: Book[];
};

const Books: NextPage<BooksProps> = ({ books }) => {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <strong>{book.title}</strong> by {book.author} (ISBN: {book.isbn})
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<BooksProps> = async () => {
  const res = await fetch("http://localhost:8082/books");
  const books: Book[] = await res.json();

  return { props: { books } };
};

export default Books;
