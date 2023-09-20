
import React from "react";
import "../styles/Cards.scss";
import { ChakraProvider, Box, Button, Text, Flex, Grid, GridItem } from "@chakra-ui/react";

const Cards = () => { 
  const CardsArray = [
    {
      texto:"DEEP EARTH",
      img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-deep-earth_mjfqfn.jpg",
      id:1
    },
    {
      texto:"NIGHT ARCADE",
      img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-night-arcade_omscsq.jpg",
      id:2
    },
    {
      texto:"SOCCER TEAM VR",
      img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-soccer-team_b2ewdb.jpg",
      id:3
    },
    {
      texto:"THE GRID",
      img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-grid_ybaevw.jpg",
      id:4
    },
    {
      texto:"FROM UP ABOVE VR",
      img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-from-above_rjb74p.jpg",
      id:5
    },
    {
      texto:"POCKET BOREALIS",
      img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-pocket-borealis_qdh021.jpg",
      id:6
    },
    {
      texto: "THE CURIOSITY",
      img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-curiosity_a0vjmj.jpg",
      id:7
    },
    {
      texto: "MAKE IT FISHEYE",
      img: "https://res.cloudinary.com/dpc1vrbek/image/upload/v1694975162/image-fisheye_xuvrwt.jpg",
      id:8
    },
  ]
  return (
    <ChakraProvider>
      <Box className="containerCards" p={4}>
      <Flex justify="space-between" mt={4}>
        <Text fontSize="xl" mb={4}>
          OUR CREATIONS
        </Text>
          <Button id="see-all-btn"
          colorScheme="teal" fontSize= "10px" color="black" width="120px">SEE ALL</Button>
           </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {CardsArray.map((card) => (
            <GridItem key={card.id}>
              {/* Aquí puedes personalizar el contenido de cada tarjeta */}
              <Box id="styles-box" height="400px" width="255px"  backgroundImage={card.img} borderWidth="1px" borderRadius="lg" p={4} style={{ paddingTop: "340px" }} >
                 {card.texto}
              </Box>
            </GridItem>
          ))}
        </Grid>
        
      </Box>
    </ChakraProvider>

  )
}

export default Cards