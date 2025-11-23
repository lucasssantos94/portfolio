export interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  stack: string[];
}

export interface ISkill {
  category: string;
  items: string[];
}
