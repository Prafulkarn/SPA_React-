function ItemListView({ items, newItemName, onNameChange, onAddItem, onDeleteItem }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onAddItem(newItemName)
  }

  return (
    <div>
      <form className="item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItemName}
          onChange={onNameChange}
          placeholder="Enter a new item name"
          aria-label="New item name"
        />
        <button type="submit">Add Item</button>
      </form>

      <ul className="item-list">
        {items.map((item, index) => (
          <li key={`${item}-${index}`} className="item-row">
            <span>{item}</span>
            <button type="button" onClick={() => onDeleteItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemListView
