import {
  Box,
  Card,
  CardBody,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  Flex,
  Heading,
} from '@chakra-ui/react';

export const SearchCard = ({ searchTerm, onSearchChange, onSearch, onPickLocation }) => {
  return (
    <Card width="400px" p={4} boxShadow="md" borderRadius="md" mb={4}>
      <CardBody>
        <Heading size="md" mb={4}>
          Search Location
        </Heading>
        <VStack spacing={3} align="stretch">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              value={searchTerm.name}
              onChange={(e) => onSearchChange('name', e.target.value)}
              placeholder="Search by name"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Latitude</FormLabel>
            <Input
              value={searchTerm.lat}
              onChange={(e) => onSearchChange('lat', e.target.value)}
              placeholder="Latitude"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Longitude</FormLabel>
            <Input
              value={searchTerm.lng}
              onChange={(e) => onSearchChange('lng', e.target.value)}
              placeholder="Longitude"
            />
          </FormControl>

          <Flex gap={2}>
            <Button colorScheme="blue" flex={1} onClick={onSearch}>
              Search
            </Button>
            <Button colorScheme="orange" flex={1} onClick={onPickLocation}>
              Pick Location
            </Button>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
};
