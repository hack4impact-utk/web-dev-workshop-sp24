'use client';
import VolunteerForm from '@/components/VolunteerForm';
import { CreateVolunteerRequest } from '@/types/dataModel/volunteer';
import { Button, Unstable_Grid2 as Grid2 } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NewVolunteerView() {
  const router = useRouter();
  const [volunteer, setVolunteer] = useState<CreateVolunteerRequest>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleSubmit = async (data: CreateVolunteerRequest) => {
    await fetch('/api/volunteers', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    router.refresh();
    router.push('/volunteers');
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={4} xsOffset={4}>
        <VolunteerForm onChange={setVolunteer} />
        <Button
          variant="outlined"
          fullWidth
          onClick={() => handleSubmit(volunteer)}
        >
          Submit
        </Button>
      </Grid2>
    </Grid2>
  );
}
