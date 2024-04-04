import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, Stack, Image, Grid, GridItem, Link } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Simulated search results
    const dummyResults = [
      {
        id: 1,
        title: "Similar Item 1",
        description: "This item is similar to your search query.",
        image: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHZlY3RvcnxlbnwwfHx8fDE3MTIyNDY5NDl8MA&ixlib=rb-4.0.3&q=80&w=1080",
      },
      {
        id: 2,
        title: "Similar Item 2",
        description: "Another item that matches your search.",
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHZlY3RvcnxlbnwwfHx8fDE3MTIyNDY5NTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
      },
      {
        id: 3,
        title: "Similar Item 3",
        description: "A third item related to your search.",
        image: "https://images.unsplash.com/photo-1605106901227-991bd663255c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjB2ZWN0b3J8ZW58MHx8fHwxNzEyMjQ2OTUwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      },
    ];

    setResults(dummyResults);
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" marginBottom={8} textAlign="center">
        Vector Search Engine
      </Heading>
      <Stack spacing={4} direction="row" align="center" justify="center">
        <Input placeholder="Enter your search query" value={query} onChange={(e) => setQuery(e.target.value)} size="lg" width="400px" />
        <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
      {results.length > 0 && (
        <Box marginTop={12}>
          <Heading as="h2" size="lg" marginBottom={4}>
            Search Results
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            {results.map((item) => (
              <GridItem key={item.id}>
                <Box borderWidth={1} borderRadius="lg" padding={4}>
                  <Image src={item.image} alt={item.title} marginBottom={4} />
                  <Heading as="h3" size="md" marginBottom={2}>
                    {item.title}
                  </Heading>
                  <Text>{item.description}</Text>
                  <Link href="#" color="blue.500" marginTop={2} display="block">
                    Learn More
                  </Link>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Index;
