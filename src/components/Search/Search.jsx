import React, { useState } from 'react'
import { SearchInput } from './SearchInput/SearchInput'

export const Search = () => {
    const [searchInputValue, setSearchInputValue] = useState('');
    const [searchList, setSearchList] = useState([]);

    const handleChange = (event) => {
        setSearchInputValue(event.target.value);
    };
  return (
    <div>
        <SearchInput />
    </div>
  )
}
