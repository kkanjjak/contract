import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Board(props) {
  let time = new Date();
  let timeNow = time.toLocaleDateString();
  //   let timeNow = time.toLocaleString();

  const [topics, setTopics] = useState(props.topics);
  let content = topics.map((p) => {
    let e = p.id;
    return (
      <tr key={p.id}>
        <td>{p.id}</td>
        <td>{p.keyword}</td>
        <td>
          <a
            style={{ color: "black", textDecoration: "none" }}
            href={"/context/" + p.id}
          >
            {p.context}
          </a>
        </td>
        <td>{p.date}</td>
        <td>{p.author}</td>
        <td>
          <a
            style={{
              display: "block",
              width: 80,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 5,
              fontSize: 15,
              color: "white",
              backgroundColor: "tomato",
            }}
            href={"/update/" + p.id}
            onClick={(event) => {
              props.onClick(Number(event.target.id));
              let id = p.id;
              let keyword = p.keyword;
              let context = p.context;
              let author = p.author;
              let date = p.date;
            }}
          >
            UPDATE
          </a>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ marginTop: 30 }}>
      <h1 style={{ textAlign: "center" }}>Board</h1>
      <div className="tableContainer">
        <table
          style={{
            border: "none",
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <colgroup>
            <col width="10%" />
            <col width="15%" />
            <col width="35%" />
            <col width="15%" />
            <col width="13%" />
            <col width="17%" />
          </colgroup>
          <thead>
            <tr style={{ height: 30 }}>
              <td>index</td>
              <td>keyword</td>
              <td>context</td>
              <td>date</td>
              <td>author</td>
              <td>update</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>React</td>
              <td>
                <a style={{ color: "black", textDecoration: "none" }}>
                  React is made by META
                </a>
              </td>
              <td>{timeNow}</td>
              <td>Hong</td>
              <td>
                <a
                  style={{
                    display: "block",
                    width: 80,
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: 5,
                    fontSize: 15,
                    color: "white",
                    backgroundColor: "tomato",
                  }}
                >
                  UPDATE
                </a>
              </td>
            </tr>
            {content}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Board;
