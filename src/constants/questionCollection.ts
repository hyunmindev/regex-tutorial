import { Question } from '@/types/question';

export default {
  simpleMatch: [
    {
      answer: 'simple',
      id: 0,
      paragraph: 'this is simple tutorial',
      title: 'match word "simple"',
    },
    {
      answer: 'tutorial',
      id: 1,
      paragraph: 'this is simple tutorial',
      title: 'match word "tutorial"',
    },
  ],
} as { [key: string]: Question[] };
