import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BSFilter } from 'react-icons/bs'
import SearchFilters from '../components/SearchFilters';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false)
    const router = useRouter();
    return (
        <Box>
            <Flex cursor='pointer' bg='gray' borderColor='black' p='2' justifyContent='center' onClick={() => setSearchFilters((prevFilters) => !prevFilters)}>
                <Icon as={BSFilter} />
                <Text> Search Property by Filters </Text>
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text>properties: {router.query.purpose} </Text>
            <Flex flexWrap='wrap' justifyContent='center'>
                {properties.map((property) => <Property property={property} key={property.id} />)}
                {properties.length === 0 && (
                    <Flex justifyContent='center' alignItems='center' >
                        No result!
                    </Flex>
                )}
            </Flex>

        </Box>
    )
}




export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-asc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
        props: {
            properties: data?.hits,
        },
    };
}

export default Search;