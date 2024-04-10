import { VolunteerEntity } from '@/types/dataModel/volunteer';
import { List, ListItem, ListItemText } from '@mui/material';

interface VolunteerListProps {
  volunteers: VolunteerEntity[];
}

export default function VolunteerList({ volunteers }: VolunteerListProps) {
  return (
    <List>
      {volunteers.map((volunteer) => (
        <ListItem key={volunteer._id}>
          <ListItemText
            primary={`${volunteer.firstName} ${volunteer.lastName}`}
            secondary={`${volunteer.email} • ${volunteer.phone} • ${volunteer.address}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
