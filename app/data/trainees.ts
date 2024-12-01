// data/trainees.ts
export interface Trainee {
  id: number;
  email: string;
  password: string;
  fullName: string;
}

const trainees: Trainee[] = [
  {
    id: 1,
    email: "trainee1@example.com",
    password: "password123",
    fullName: "John Doe",
  },
  {
    id: 2,
    email: "trainee2@example.com",
    password: "password456",
    fullName: "Jane Smith",
  },
  {
    id: 3,
    email: "trainee3@example.com",
    password: "password789",
    fullName: "Alice Johnson",
  },
];

export default trainees;
