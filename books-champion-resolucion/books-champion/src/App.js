import "./App.css";
import BooksFilter from "./components/bookFilter/BookFilter";

import Books from "./components/books/Books";
import NewBook from "./components/newBook/NewBook";

const App = () => {
  const books = [
    {
      title: "100 años de soledad",
      author: "Gabriel García Marquez",
      dateRead: new Date(2021, 8, 12),
      pageCount: 410,
    },
    {
      title: "Todos los fuegos el fuego",
      author: "Julio Cortazar",
      dateRead: new Date(2020, 6, 11),
      pageCount: 197,
    },
    {
      title: "Asesinato en el Orient Express",
      author: "Agatha Christie",
      dateRead: new Date(2021, 5, 9),
      pageCount: 256,
    },
    {
      title: "Las dos torres",
      author: "J.R.R Tolkien",
      dateRead: new Date(2020, 3, 22),
      pageCount: 352,
    },
  ];

  const appBookHandler = (book) => {
    console.log(book);
    console.log("In App!");
  };

  return (
    <div className="App">
      <h1>Books Champion App</h1>
      <br />
      <NewBook onBookSaved={appBookHandler} />
      <Books books={books} />
    </div>
  );
};

export default App;
