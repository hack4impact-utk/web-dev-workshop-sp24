import {
  CreateVolunteerRequest,
  VolunteerEntity,
} from '@/types/dataModel/volunteer';
import dbConnect from '@/utils/db-connect';
import Volunteer from '../models/Volunteer';

export async function getAllVolunteers() {
  await dbConnect();

  const volunteers: VolunteerEntity[] = await Volunteer.find();

  return volunteers;
}

export async function createVolunteer(volunteer: CreateVolunteerRequest) {
  await dbConnect();

  await Volunteer.create(volunteer);
}
