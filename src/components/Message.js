import React, { useContext } from 'react'
import { MessageContext } from '../contexts/MessageContext'

const Message = ({ task }) => {
  const { removeTask } = useContext(MessageContext)
  return (
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  )
}

export default Message
