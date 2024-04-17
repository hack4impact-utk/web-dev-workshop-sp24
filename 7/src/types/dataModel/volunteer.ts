export interface Volunteer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  numEvents: number;
}

export interface VolunteerEntity extends Volunteer {
  _id: string;
}

export type CreateVolunteerRequest = Omit<Volunteer, 'numEvents'>;
