'use client';
import VolunteerList from '@/components/VolunteerList';
import { VolunteerEntity } from '@/types/dataModel/volunteer';
import { Button, Unstable_Grid2 as Grid2 } from '@mui/material';
import { useRouter } from 'next/navigation';

interface VolunteersViewProps {
  volunteers: VolunteerEntity[];
}

export default function VolunteersView({ volunteers }: VolunteersViewProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push('/volunteers/new');
  };
  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12} md={2} mdOffset={8}>
        <Button variant="outlined" fullWidth onClick={handleClick}>
          Add volunteer
        </Button>
      </Grid2>
      <Grid2 xs={12} md={10}>
        <VolunteerList volunteers={volunteers} />
      </Grid2>
    </Grid2>
  );
}
