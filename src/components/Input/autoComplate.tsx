/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-22 12:30:04
 * @LastEditors: zch
 * @LastEditTime: 2022-04-22 17:38:51
 */
import React, { ChangeEvent, useState } from "react";
import Icon from "../Icon/icon";
import Input, { InputProps } from "./input";

interface DataSourceObject {
  value: string
}
export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>
  onSelect?: (item: DataSourceType) => void
  renderOption?: (item: DataSourceType) => React.ReactElement
}

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  fetchSuggestions, 
  value,
  onSelect,
  renderOption, 
  ...restProps}) => {
  
  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions ] = useState<DataSourceType[]>([])
  const [loading, setLoading ] = useState(false)

  console.log(suggestions);
  
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)

    if(value) {
      const results = fetchSuggestions(value)
      if(results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
        })
      } else {
        setSuggestions(results)
      }
    } else {
      setSuggestions([])
    }
  }

  // 下拉菜单点击事件
  const handleSelect = (item: DataSourceType) => {
    console.log(item, 'item')

    setInputValue(item.value)
    setSuggestions([])
    if(onSelect) {
      onSelect(item)
    }
  }
  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item,index) => {
          return(
            <li key={index} onClick={() => handleSelect(item)}>
              { renderTemplate(item) }
            </li>
          )
        }) }
      </ul>
    )
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  return (
    <div>
      <Input
        value={inputValue}
        onChange={handleChange}
        {...restProps}
      ></Input>
      {loading && <ul><Icon icon='spinner' spin/></ul>}
      {(suggestions.length > 0) && generateDropdown()}
    </div>
  )
}

export default AutoComplete
