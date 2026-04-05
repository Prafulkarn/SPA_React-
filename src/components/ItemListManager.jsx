import { useState } from 'react'
import ItemListView from './ItemListView'

function ItemListManager() {
  const [items, setItems] = useState(['Notebook', 'Pen', 'Calculator'])

  const addItem = () => {
    const nextNumber = items.length + 1
    setItems((previous) => [...previous, `New Item ${nextNumber}`])
  }

  const deleteItem = (indexToDelete) => {
    setItems((previous) => previous.filter((_, index) => index !== indexToDelete))
  }

  return (
    <section className="feature-card">
      <h2>Parent to Child Props Demo</h2>
      <ItemListView items={items} onAddItem={addItem} onDeleteItem={deleteItem} />
    </section>
  )
}

export default ItemListManager
