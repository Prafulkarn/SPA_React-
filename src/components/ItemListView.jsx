function ItemListView({ items, onAddItem, onDeleteItem }) {
  return (
    <div>
      <button type="button" onClick={onAddItem}>
        Add Item
      </button>

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
// Updated
