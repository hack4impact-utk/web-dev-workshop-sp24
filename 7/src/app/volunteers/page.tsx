import { getAllVolunteers } from '@/server/actions/Volunteer';
import VolunteersView from '@/views/VolunteersView';

export default async function VolunteersPage() {
  const volunteers = JSON.parse(JSON.stringify(await getAllVolunteers()));

  return <VolunteersView volunteers={volunteers} />;
}
