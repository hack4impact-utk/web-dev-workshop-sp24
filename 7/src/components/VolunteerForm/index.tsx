import { CreateVolunteerRequest } from '@/types/dataModel/volunteer';
import { Box, TextField } from '@mui/material';
import { useState } from 'react';

interface VolunteerFormProps {
  onChange: (data: CreateVolunteerRequest) => void;
}

export default function VolunteerForm({ onChange }: VolunteerFormProps) {
  const [formData, setFormData] = useState<CreateVolunteerRequest>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange =
    (key: keyof CreateVolunteerRequest) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
      onChange({ ...formData, [key]: e.target.value });
    };

  return (
    <Box sx={{ pt: 2 }}>
      <TextField
        label="First name"
        variant="outlined"
        value={formData.firstName}
        onChange={handleChange('firstName')}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Last name"
        variant="outlined"
        value={formData.lastName}
        onChange={handleChange('lastName')}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange('email')}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Phone number"
        variant="outlined"
        value={formData.phone}
        onChange={handleChange('phone')}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Address"
        variant="outlined"
        value={formData.address}
        onChange={handleChange('address')}
        fullWidth
        sx={{ mb: 2 }}
      />
    </Box>
  );
}
