import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import defaultImage from '../assets/defaultImage.jpeg';
import { extendTheme } from '@chakra-ui/react'

import { useEffect, useState } from 'react';



const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => {
    const [formattedPrice, setFormattedPrice] = useState('0');
    useEffect(() => {
        setFormattedPrice(millify(price));
    }, [price]);
    const [formattedArea, setFormattedArea] = useState('0');
    useEffect(() => {
        setFormattedArea(millify(area));
    }, [price]);
    return (

        <Link href={`/property/${externalID}`} passHref>
            <Flex flexWrap='wrap' width='440' p='3' cursor='pointer' flexDirection='column'>
                <div>
                    <Image
                        src={coverPhoto ? coverPhoto.url : defaultImage}
                        width='420'
                        maxWidth='420'
                        height='150'
                        style={{ objectFit: 'cover', borderRadius: "1%", aspectRatio: '16/9' }}
                    />
                </div>
                <Box w='full'>
                    <Flex alignItems='center' justifyContent='space-between'>
                        <Flex alignItems='center' justifyContent='space-between' mt='2' >
                            <Box color='lightgreen'>{isVerified && <GoVerified />}</Box>
                            <Text ml='1.5' fontWeight='bold' fontSize=''> AED {formattedPrice}{rentFrequency && `/{rentFrequency}`} </Text>

                        </Flex>
                        <Avatar borderWidth="1.5px" borderColor="gray" width='9' height='9' alignSelf='flex-end' mb='-4' mr='1' src={agency?.logo?.url} />
                    </Flex>
                    <Flex alignItems='center' maxWidth='240' color='gray'>
                        {rooms} <Box ml='2' mr='2'><FaBed /></Box>| {baths} <Box ml='2' mr='2'><FaBath /></Box>| {formattedArea} sqft<Box ml='2' mr='2'><BsGridFill /></Box>
                    </Flex>
                    <Text fontSize='lg'>
                        {title.length > 30 ? `${title.substring(0, 37)}...` : title}
                    </Text>
                </Box>
            </Flex>

        </Link >
    )
}

export default Property;