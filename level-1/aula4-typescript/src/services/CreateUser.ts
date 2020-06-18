interface TechObject {
  title: string,
  experience: number
}

interface CreateUserData {
  name?: string;
  email: string;
  password: number;
  numbers: number[],
  techs: Array<string | TechObject>;
}

export default ({ name, email, password, techs }: CreateUserData) => {
  return {
    name,
    email,
    password,
    techs
  };
}