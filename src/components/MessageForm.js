import React, { useState, useContext } from 'react'
import { MessageContext } from '../contexts/MessageContext'

const MessageForm = () => {
  const { addTask } = useContext(MessageContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addTask(title)
    setTitle('')
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  return (
    <div >
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Type your message here..."
          value={title}
          onChange={handleChange}
          required
          className="task-input"
        />
        <button type="submit" className="btn add-task-btn">
          Send
        </button>

      </form>
    </div>

  )
}

export default MessageForm
