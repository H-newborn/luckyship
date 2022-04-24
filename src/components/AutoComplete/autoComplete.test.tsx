import { config } from 'react-transition-group'
import React from 'react'
import AutoComplete, { AutoCompleteProps }from './autoComplete'


config.disabled = true

const testArray = [
  { value: 'ab', number: 11 },
  { value: 'ab', number: 11 },
  { value: 'ab', number: 11 },
  {value: 'ab', number: 11},
]

const testProps: AutoCompleteProps = {
  fetchSuggestions: (query) => {return testArray}
}
