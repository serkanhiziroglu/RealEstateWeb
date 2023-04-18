import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({ purpose, title1, title2, desc1, desc2, linkName, buttonText, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent='center' alignItems='center'>
    <Image src={imageUrl} width='500' height='300' />
    <Box p='5'>
      <Text color='gray' fontSize='sm' fontWeight='medium' >{purpose}</Text>
      <Text fontSize='3x1' fontWeight='bold'>{title1} <br /> {title2} </Text>
      <Text fontSize='lg' paddingTop='3' color='gray'>{desc1}<br />{desc2}</Text>
      <Button colorScheme='whiteAlpha'>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({ propertiesForRent, propertiesForSale }) {
  return (
    <div>
      <Box mt='2'><Banner purpose='Rent a Home' title1='title1' title2='title2' desc1='desc1' desc2='desc2' buttonText='Explore rental' linkName='/search?purpose=for-rent' imageUrl='https://www.looper.com/img/gallery/every-power-sasuke-has-on-naruto-explained/intro-1663193400.jpg' /></Box>
      <Flex flexWrap='wrap' justifyContent='center'>
        {propertiesForSale.map((property: any) => (
          // <PropertyCard key={property.id} property={property} />
          <Property property={property} key={property.id} />
        )
        )}
      </Flex>
    </div >
  )
}

export async function getStaticProps() {
  console.log('before calling fetchApi')
  const propertyForSale = await fetchApi('for-sale')
  console.log('after calling fetchApi')
  // const propertyForRent = await fetchApi('for-rent')
  console.log('Properties for sale!')
  console.log(propertyForSale)
  // console.log(JSON.stringify(propertyForSale))

  return {
    props: {
      propertiesForSale: (propertyForSale.hits),
      // propertiesForRent: propertyForRent,
    }
  }
}
/* {propertiesForSale.map((property: any) => (
          // <PropertyCard key={property.id} property={property} />
          <>
            <p>{property.title}</p>
            <br />
            <br />
          </>
        ))} */