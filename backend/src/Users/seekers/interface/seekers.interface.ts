export interface seeker {
  name: string;
  id: string;
  password: string;
  email: string;
  permissions: boolean;
  image: {
    url: string;
    width: number;
    height: number;
  };
}