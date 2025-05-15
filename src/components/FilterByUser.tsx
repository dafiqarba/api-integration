import React from 'react'

interface FilterByUserProps {
  userId: string
  onChange: (value: string) => void
}

const FilterByUser: React.FC<FilterByUserProps> = (props) => {
  const { userId, onChange } = props

  return (
    <div className="flex gap-3 max-sm:flex-col justify-start items-center">
      <label htmlFor="userId" className="text-dusty-plum font-medium">
        Filter by User ID:
      </label>
      <input
        id="userId"
        type="number"
        value={userId}
        onChange={(e) => onChange(e.target.value)}
        placeholder="example: 1"
        className="rounded-xl border border-muted-mauve bg-lavender-mist px-4 py-2 text-sm text-deep-violet placeholder-soft-orchid focus:outline-none focus:ring-2 focus:ring-pale-amethyst"
      />
    </div>
  )
}

export default FilterByUser
