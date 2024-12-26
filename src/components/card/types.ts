export interface University {
  id: string;
  name: string;
}

export interface Faculty {
  id: string;
  name: string;
  tagId: string;
  university: University;
}

export interface Score {
  id: string;
  avg: number;
  max: number;
  min: number;
  scoreType: string;
  year: number;
}

export interface AdmissionCardProps {
  id: string;
  name: string;
  logo: string;
  faculty: Faculty;
  likes: number;
  roundSeats: number[];
  score: Score;
  updatedAt: string;
}
