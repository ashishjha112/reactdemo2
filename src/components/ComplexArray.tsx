import { useState } from "react";

function ComplexArray() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
    { id: 3, title: "bug 3", fixed: false },
  ]);

  const handleClick = () => {
    //add
    setTags([...tags, "new tag"]);

    //remove
    setTags(tags.filter((tag) => tag !== "happy"));

    //update
    setTags(tags.map((tag) => (tag === "happy" ? "up happy" : tag)));
  };

  const handleArrayObjectClick = () => {
    //update bug
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };
  return (
    <>
      <button onClick={handleClick}>Update Array</button>
    </>
  );
}

export default ComplexArray;
