import { useState } from 'react'

export default function Home() {

  const [list, setList] = useState([])
  const [note, setNote] = useState("")

  const onNoteChange = (e) => {
    setNote(e.target.value)
  }

  const addNote = () => {
    if (note) {
      const id = new Date().getTime()
      setList([...list, { id: id, note: note }])
      setNote("")
    }
    else {
      alert("invalid input")
    }
  }

  return (
    <div className="w-100 flex flex-col justify-center items-center">
      <div className="w-[50%] border border-indigo-500 p-4">
        {list.length > 0
          ?
          list.map(ele => <div key={ele.id}>{ele.note}</div>)
          :
          <div className="text-gray-500">No Notes Added</div>}
      </div>
      <div className="gap-4">
        <input onChange={onNoteChange} value={note} type="text" id="title" name="title" class="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 transition-colors duration-200 ease-in-out" />
        <button
          onClick={addNote}
          type="button"
          class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          Add Note
        </button>
      </div>
    </div>
  )
}
