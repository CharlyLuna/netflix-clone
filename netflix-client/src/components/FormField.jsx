export const FormField = ({
  labelName, type, name, placeholder, value,
  handleChange
}) => {
  return (
    <div className='w-full'>
      {
        labelName && (
          <div className='flex items-center gap-2 mb-2'>
            <label htmlFor={name} className='block text-sm font-medium'>
              {labelName}
            </label>
          </div>
        )
      }
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border border-black text-gray-900 text-sm
        focus:outline-none block w-full p-4'
      />
    </div>
  )
}
