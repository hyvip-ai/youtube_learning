import React from "react";
import { useStore } from "../../store";
import shallow from "zustand/shallow";
import { blogs } from "../../data/blogs";
import { Main } from "../../types/main";
function Blogs() {
  const { showPlayGround, togglePlayGround } = useStore(
    (state: any) => ({
      showPlayGround: state.showPlayGround,
      togglePlayGround: state.togglePlayGround,
    }),
    shallow
  );

  return blogs.length ? (
    <>
      <div className="container">
        {blogs.map((blog: Main, index: number) => (
          <a href={blog.url} target="_blank" key={blog.id} rel="noreferrer">
            {`${index + 1}. ${blog.title}`}
          </a>
        ))}
      </div>
      <div className="page_playground_btn">
        <button onClick={togglePlayGround}>Toggle PlayGround</button>
      </div>
      <div className="page_playground">
        {showPlayGround ? (
          <iframe
            src="https://www.programiz.com/javascript/online-compiler/"
            width="100%"
            height="500px"
            title="Javascript playground"
            frameBorder="0"
          ></iframe>
        ) : null}
      </div>
    </>
  ) : (
    <h2>No blogs present</h2>
  );
}

export default Blogs;
