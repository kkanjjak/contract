import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Board from "./Board";
import Update from "./Update";
import { useState } from "react";

function App() {
  let time = new Date();
  let timeNow = time.toLocaleDateString();
  const [mode, setMode] = useState("home");
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    {
      id: 2,
      keyword: "TEST",
      context: "This is example",
      date: timeNow,
      author: "Hong",
    },
  ]);
  let keyword = null;
  let context = null;
  let author = null;
  let date = null;
  for (let i = 0; i < topics.length; i++) {
    if (topics[i].id === id) {
      keyword = topics[i].keyword;
      context = topics[i].context;
      author = topics[i].author;
      date = topics[i].date;
    }
  }

  return (
    <div className="canvas">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/board"
            element={
              <Board
                topics={topics}
                onClick={(id) => {
                  setId(id);
                }}
                id={id}
                keyword={keyword}
                context={context}
                author={author}
                date={date}
              />
            }
          ></Route>
          <Route
            path="/update/:id"
            element={
              <Update
                onClick={(_id) => {
                  setId(_id);
                }}
                topics={topics}
                id={id}
                keyword={keyword}
                context={context}
                author={author}
                date={date}
                onUpdate={(keyword, context, author, date) => {
                  const newTopics = [...topics];
                  const updatedTopic = {
                    keyword: keyword,
                    context: context,
                    author: author,
                    date: date,
                  };
                  for (let i = 0; i < newTopics.length; i++) {
                    if (newTopics[i].id === id) {
                      newTopics[i] = updatedTopic;
                      break;
                    }
                  }
                  setTopics(newTopics);
                }}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
