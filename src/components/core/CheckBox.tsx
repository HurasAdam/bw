import { Checkbox } from '@headlessui/react'
import { IoCheckboxOutline } from "react-icons/io5";
import { useState } from 'react'

export default function CheckBox({onChange,checked}) {
  const [enabled, setEnabled] = useState(true)

  return (
<div className="form-control">
  <label className="label cursor-pointer ">
    <span className="label-text text-gray-600 font-semibold">Zweryfikowane</span>
    <input type="checkbox" onChange={(e)=>onChange(e)} checked={checked}  className="checkbox border border-gray-600/80"  />
  </label>
</div>
  )
}