import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'


const NewEntry = ({ categories, addEntry }) => {
  const params = useParams();
  const nav = useNavigate();
  const [entry, setEntry] = useState("");

  async function createEntry(e) {
    e.preventDefault();
    // Create a new entry object from user input
    const id = await addEntry(params.cat_id, entry);
    // Clear the textarea
    setEntry("");
    // Navigate back to the home page
    nav(`/entry/${id}`);
  }

  return (
    <>
      <h3>New entry is category {categories[params.cat_id]?.name}</h3>
      <form onSubmit={createEntry}>
        <div className="section">
          <label>Content</label>
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Type your entry here..."
                value={entry}
                onChange={e => setEntry(e.target.value)}
              />
            </div>
          </div>
        <button className="button is-link">Create Entry</button>
        </div>
      </form>
    </>
  );
};

export default NewEntry;
