import {
  Card,
  CardBody,
  Flex,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { AddIcon, EditIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

export const DetailCard = ({ location, mode = 'view' }) => {
  const [form, setForm] = useState({ name: '', lat: '', lng: '' });
  const [original, setOriginal] = useState({ name: '', lat: '', lng: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (location) {
      const newForm = {
        name: location.name || '',
        lat: location.latitude?.toString() || '',
        lng: location.longitude?.toString() || '',
      };
      setForm(newForm);
      setOriginal(newForm);
      setIsEditing(false);
    }
  }, [location]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isFormChanged =
    form.name !== original.name || form.lat !== original.lat || form.lng !== original.lng;

  return (
    <Card>
      <Card width="400px" p={4} boxShadow="md" borderRadius="md">
        <Flex justify="space-between" align="center" mb={4}>
          <Heading size="md">Location Details</Heading>
          <Flex gap={2}>
            <IconButton
              aria-label="Edit"
              icon={<EditIcon />}
              colorScheme={isEditing ? 'gray' : 'blue'}
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            />
            <IconButton aria-label="Add" icon={<AddIcon />} colorScheme="green" size="sm" />
          </Flex>
        </Flex>

        <CardBody>
          <VStack spacing={3} align="stretch">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                value={form.name}
                isDisabled={!isEditing}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Latitude</FormLabel>
              <Input
                value={form.lat}
                isDisabled={!isEditing}
                onChange={(e) => handleChange('lat', e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Longitude</FormLabel>
              <Input
                value={form.lng}
                isDisabled={!isEditing}
                onChange={(e) => handleChange('lng', e.target.value)}
              />
            </FormControl>

            {isEditing && isFormChanged && (
              <Button mt={4} colorScheme="teal">
                Save
              </Button>
            )}
          </VStack>
        </CardBody>
      </Card>
    </Card>
  );
};
