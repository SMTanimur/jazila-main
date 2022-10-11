import React from 'react'

type TableRowProps = { title: string }
export default function TableRow({ title }: TableRowProps) {
  return (
    <th className="group px-3 py-2 lg:px-6 lg:py-3 text-center text-xs font-medium text-white uppercase tracking-wider border-b border-sky-700 cursor-pointer">
      {title}
    </th>
  )
}
