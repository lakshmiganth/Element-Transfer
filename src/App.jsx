import React, { useState } from 'react'

function App() {
  const [bucket1, setBucket1] = useState(['item 1', 'item 2', 'item 3', 'item 5', 'item 6']);
  const [bucket2, setBucket2] = useState(['item 4', 'item 9', 'item 8'])

  const [selectedBucket1, setSelectedBucket1] = useState([]);
  const [selectedBucket2, setSelectedBucket2] = useState([]);

  const toggleSelection = (item, selectedItems, setSelectedItems) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item))
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  const handleAdd = () => {
    setBucket2([...bucket2, ...selectedBucket1]);
    setBucket1(bucket1.filter((item) => !selectedBucket1.includes(item)));
    setSelectedBucket1([]);
  }
  const handleRemove = () => {
    setBucket1([...bucket1, ...selectedBucket2]);
    setBucket2(bucket2.filter((item) => !selectedBucket2.includes(item)));
    setSelectedBucket2([]);
  }
  const handleAddAll = () => {
    setBucket2([...bucket2, ...bucket1]);
    setBucket1([]);
    setSelectedBucket2([]);
  }
  const handleRemoveAll = () => {
    setBucket1([...bucket1, ...bucket2]);
    setBucket2([]);
    setSelectedBucket1([]);
  }

  return (
    <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', gap: '2rem' }} className='class'>
      <div>
        <h3>Bucket 1</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {bucket1.map((item) =>
            <li
              key={item}
              onClick={() => toggleSelection(item, selectedBucket1, setSelectedBucket1)}
              style={{
                padding: '0.5rem',
                margin: '0.2rem',
                cursor: 'pointer',
                backgroundColor: selectedBucket1.includes(item) ? '#d3f9d8' : '#f1f1f1',
                border: '1px solid #ccc'
              }}>
              {item}
            </li>
          )}
        </ul>
      </div>
      {/* Controls */}
      <div style={{ margin: '1.5rem ' }}>
        <button onClick={handleAdd} style={{ display: 'block', margin: '0.5rem 0' }}>Add</button>
        <button onClick={handleRemove} style={{ display: 'block', margin: '0.5rem 0' }}>Remove</button>
        <button onClick={handleAddAll} style={{ display: 'block', margin: '0.5rem 0' }}>Add All</button>
        <button onClick={handleRemoveAll} style={{ display: 'block', margin: '0.5rem 0' }}>Remove All</button>
      </div>
      {/* bucket 2 */}
      <div>
          <h3>Bucket 2</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {bucket2.map((item) =>
            <li
              key={item}
              onClick={() => toggleSelection(item, selectedBucket2, setSelectedBucket2)}
              style={{
                padding: '0.5rem',
                margin: '0.2rem',
                cursor: 'pointer',
                backgroundColor: selectedBucket2.includes(item) ? '#d3f9d8' : '#f1f1f1',
                border: '1px solid black'
              }}>
              {item}
            </li>
          )}
        </ul>
      </div>

    </div>
  )
}

export default App
