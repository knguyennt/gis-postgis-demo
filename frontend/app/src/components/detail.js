import {
  Box,
  Input,
  Button,
  IconButton,
  Flex,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export const DetailCard = () => {
  const [form, setForm] = useState({
    name: '',
    lat: '',
    lng: '',
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card width="400px" p={4} boxShadow="md" borderRadius="md">
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="md">Location</Heading>
        <IconButton aria-label="Add Hotel" icon={<AddIcon />} colorScheme="green" size="sm" />
      </Flex>

      <Flex mb={4} gap={2}>
        <Input placeholder="Search..." />
        <Button colorScheme="blue">Search</Button>
      </Flex>

      <Card variant="outline" p={4}>
        <CardBody>
          <VStack spacing={3} align="stretch">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Enter hotel name"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Latitude</FormLabel>
              <Input
                value={form.lat}
                onChange={(e) => handleChange('lat', e.target.value)}
                placeholder="Latitude"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Longitude</FormLabel>
              <Input
                value={form.lng}
                onChange={(e) => handleChange('lng', e.target.value)}
                placeholder="Longitude"
              />
            </FormControl>
          </VStack>
        </CardBody>
      </Card>
    </Card>
  );
};
