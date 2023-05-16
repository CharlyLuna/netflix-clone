/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import { FormField } from '../../src/components/FormField'
import '@testing-library/jest-dom'

describe('FormField component tests', () => {
  const testValues = {
    type: 'password',
    placeholder: 'a password here',
    name: 'password',
    labelName: 'Password',
    value: '',
    onChange: () => {}
  }
  test('should have the corresponding placeholder', () => {
    render(
      <FormField
        type={testValues.type}
        placeholder={testValues.placeholder}
        name={testValues.name}
        labelName={testValues.labelName}
        value={testValues.value}
        handleChange={testValues.onChange}
      />
    )

    const input = screen.getByPlaceholderText('a password here')
    expect(input).toBeInTheDocument()
  })
  test('should have the correct label', () => {
    const { getByText } = render(
      <FormField
        type={testValues.type}
        placeholder={testValues.placeholder}
        name={testValues.name}
        labelName={testValues.labelName}
        value={testValues.value}
        handleChange={testValues.onChange}
      />
    )

    const label = getByText('Password')
    expect(label).toBeInTheDocument()
  })
})
