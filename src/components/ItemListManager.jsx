import { useState } from 'react'
import ItemListView from './ItemListView'

function ItemListManager() {
  const [items, setItems] = useState(['Notebook', 'Pen', 'Calculator'])
  const [newItemName, setNewItemName] = useState('')

  const addItem = (itemName) => {
    const trimmedName = itemName.trim()

    if (!trimmedName) {
      return
    }

    setItems((previous) => [...previous, trimmedName])
    setNewItemName('')
  }

  const deleteItem = (indexToDelete) => {
    setItems((previous) => previous.filter((_, index) => index !== indexToDelete))
  }

  const handleNameChange = (event) => {
    setNewItemName(event.target.value)
  }

  return (
    <section className="feature-card">
      <h2>Parent to Child Props Demo</h2>
      <ItemListView
        items={items}
        newItemName={newItemName}
        onNameChange={handleNameChange}
        onAddItem={addItem}
        onDeleteItem={deleteItem}
      />
    </section>
  )
}

export default ItemListManager
