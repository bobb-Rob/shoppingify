/* eslint-disable */
import React from 'react';

const AddItem = () => {
  return (
    <form>
      <h3>Add a new item</h3>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter a name"
          id="name"
        />
      </div>
      <div>
        <label htmlFor="note">Note (optional)</label>
        <input
          type="text"
          placeholder="Enter a note"
          id="note"
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image (optional)</label>
        <input
          type="url"
          placeholder="Enter a url"
          id="imageUrl"
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image (optional)</label>
        <input
          type="url"
          placeholder="Enter a url"
          id="imageUrl"
        />
      </div>
    </form>
  )
}

export default AddItem;