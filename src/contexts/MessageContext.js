import React, { createContext, useState } from 'react'
import uuid from 'uuid'

export const MessageContext = createContext()

const MessageContextProvider = props => {

  const [new_messages, setTasks] = useState([])

  // Add tasks
  const addTask = title => {
    setTasks([...new_messages, { title, id: uuid() }])
  }

  // Remove tasks
  const removeTask = id => {
    setTasks(new_messages.filter(task => task.id !== id))
  }

  return (
    <MessageContext.Provider
      value={{
        new_messages,
        addTask,
        removeTask,
      }}
    >
      {props.children}
    </MessageContext.Provider>
  )
}

export default MessageContextProvider
