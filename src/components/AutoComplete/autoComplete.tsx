/*
 * @Descripttion: 
 * @version: 
 * @Author: zch
 * @Date: 2022-04-22 12:30:04
 * @LastEditors: zch
 * @LastEditTime: 2022-04-22 17:38:51
 */
import classNames from "classnames";
import React, { ChangeEvent, useEffect, useState, KeyboardEvent, useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import useDebounce from "../../hooks/useDebounce";
import Icon from "../Icon/icon";
import Input, { InputProps } from "../Input/input";
import Transition from '../Transition/transition'

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
  
  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSuggestions ] = useState<DataSourceType[]>([])
  const [loading, setLoading] = useState(false)
  const [ showDropdown, setShowDropdown] = useState(false)
  const [highlightIndex, setHighLightIndex] = useState(-1)
  const debouncedValue = useDebounce(inputValue, 500)
  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  useClickOutside(componentRef, () => {
    setSuggestions([])
  })

  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      setSuggestions([])
      const results = fetchSuggestions(debouncedValue)
      if(results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
          if (data.length > 0) {
            setShowDropdown(true)
          }
        })
      } else {
        setSuggestions(results)
        setShowDropdown(true)
        if (results.length > 0) {
          setShowDropdown(true)
        } 
      }
      setHighLightIndex(-1)
    } else {
      setShowDropdown(false)
    }
  }, [debouncedValue])
  // console.log(suggestions);
  
  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighLightIndex(index)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13: 
        suggestions[highlightIndex] && handleSelect(suggestions[highlightIndex])
        break
      case 38: 
        highlight(highlightIndex - 1)
        break
      case 40: 
        highlight(highlightIndex + 1)
        break
      case 27: 
        setShowDropdown(false)
        break
      default: 
        break
    }
  }
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current = true
  }

  // 下拉菜单点击事件
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setShowDropdown(false)
    if(onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  }
  const generateDropdown = () => {
    return (
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => {setSuggestions([])}}
      >
        <ul className="lucky-suggestion-list">
          { loading &&
            <div className="suggstions-loading-icon">
              <Icon icon="spinner" spin/>
            </div>
          }
          {suggestions.map((item, index) => {
            const cnames = classNames('suggestion-item', {
              'is-active': index === highlightIndex
            })
            return (
              <li key={index} className={cnames} onClick={() => handleSelect(item)}>
                {renderTemplate(item)}
              </li>
            )
          })}
        </ul>
      </Transition>
    )
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  return (
    <div className="lucky-auto-complete" ref={componentRef}>
      <Input
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        {...restProps}
      ></Input>
      {loading && <ul><Icon icon='spinner' spin/></ul>}
      {(suggestions.length > 0) && generateDropdown()}
    </div>
  )
}

export default AutoComplete
