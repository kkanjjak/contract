import { useState } from "react";

function Update(props) {
  let time = new Date();
  let currentDate = time.toLocaleDateString();
  const [id, setId] = useState(props.id);
  const [keyword, setKeyword] = useState(props.keyword);
  console.log(props);
  const [context, setContext] = useState(props.context);
  const [author, setAuthor] = useState(props.author);
  const [date, setDate] = useState(props.date);
  const [topics, setTopics] = useState(props.topics);
  for (let i = 0; i < topics.length; i++) {
    if (topics[i].id === id) {
      keyword = topics[i].keyword;
      context = topics[i].context;
      author = topics[i].author;
      date = topics[i].date;
    }
    break;
  }
  console.log(keyword);

  return (
    <div>
      <h1>update</h1>
      <form
        onSubmit={(event) => {
          console.log(Number(id));

          event.preventDefault();
          let keyword = event.target[0].value;
          let context = event.target[1].value;
          let author = event.target[2].value;
          let date = currentDate;
          props.onClick(Number(event.target.id));
          props.onUpdate(keyword, context, author, date);
        }}
      >
        <p>
          <input
            name="keyword"
            type="text"
            placeholder="keyword"
            value={keyword}
            onChange={(event) => {
              event.preventDefault();
              setKeyword(event.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            name="context"
            type="text"
            placeholder="context"
            value={context}
            onChange={(event) => {
              event.preventDefault();
              setContext(event.target.value);
            }}
          />
        </p>
        <p>
          <input
            name="author"
            type="text"
            placeholder="author"
            value={author}
            onChange={(event) => {
              event.preventDefault();
              setAuthor(event.target.value);
            }}
          />
        </p>
        <p>
          <input type="submit" value="수정하기" />
        </p>
      </form>
    </div>
  );
}

export default Update;
