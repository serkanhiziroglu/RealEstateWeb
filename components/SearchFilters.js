import { useEffect, useState } from 'react';
import { Box, Flex, Text, Icon, Button, Spinner, Input } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { MdCancel } from 'react-icons/md'
import { filterData, getFilterValues } from '../utils/filterData'

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);
    return (
        <Flex flexWrap='wrap' justifyContent='center' bg='gray'></Flex>
    )

}

export default SearchFilters;