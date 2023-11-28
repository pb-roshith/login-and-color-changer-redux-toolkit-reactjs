import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from './features/theme'

const Color = () => {
    const dispatch = useDispatch()
    const [color, setcolor] = useState('black')
  return (
    <div>
        <input type="color" value={color} onChange={e => setcolor(e.target.value)} />
        <button onClick={() => dispatch(changeTheme(color))}>change color</button>
    </div>
  )
}

export default Color