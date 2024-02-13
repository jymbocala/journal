import { useState, useEffect } from "react";
import Home from "./Home";
import CategorySelection from "./CategorySelection";
import NewEntry from "./NewEntry";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import ShowEntry from "./ShowEntry";

const App = () => {
  const [categories, setCategories] = useState(["Food", "Gaming", "Coding"]);
  const [entries, setEntries] = useState([
    { category: 0, content: "I like Pizza!" },
  ]);

  useEffect(() => {
    fetch("https://journal-api-8v3b.onrender.com/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch("https://journal-api-8v3b.onrender.com/entries")
      .then((res) => res.json())
      .then((data) => setEntries(data));
  }, []);

  function ShowEntryWrapper() {
    const { id } = useParams();
    return <ShowEntry entry={entries[id]} />;
  }

  async function addEntry(cat_id, content) {
    const newId = entries.length;
    // 1. Create new entry object from user input
    const newEntry = {
      category: categories[cat_id]._id,
      content: content,
    };
    // POST new entry to server
    const res = await fetch("https://journal-api-8v3b.onrender.com/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    })
    const data = await res.json()
    // 2. Add new entry to entries state
    setEntries([...entries, data]);


    // 3. Return the new entry's index
    return newId;
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home entries={entries} />} />
          <Route
            path="/category"
            element={<CategorySelection categories={categories} />}
          />
          <Route path="/entry">
            <Route path=":id" element={<ShowEntryWrapper />} />
            <Route
              path="new/:cat_id"
              element={<NewEntry categories={categories} addEntry={addEntry} />}
            />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
