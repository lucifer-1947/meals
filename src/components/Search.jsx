import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'

export default function Search() {

    const [searchQuery, setSearchQuery] = useState(null)

    function handleSearch(query) {
        setSearchQuery(query)
    }

    return (
        <Searchbar
            placeholder='search here'
            value={searchQuery}
            onChangeText={handleSearch}
        />
    )
}