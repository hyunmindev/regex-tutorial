import { Question } from '@/types/question';

export default {
  simpleMatch: [
    {
      answers: ['simple'],
      flags: ['g'],
      id: 0,
      paragraph: 'This is simple tutorial.',
      title: 'match word "simple"',
    },
    {
      answers: ['tutorial'],
      flags: ['g'],
      id: 1,
      paragraph: 'Regular expressions are very useful.',
      title: 'match word "tutorial"',
    },
  ],
  // eslint-disable-next-line sort-keys
  complexityMatch: [
    {
      answers: ['complexity|tutorial'],
      flags: ['g'],
      id: 0,
      paragraph: 'This is complexity tutorial.',
      title: 'match word "complexity" and "tutorial"',
    },
    {
      answers: ['^is'],
      flags: ['g', 'i'],
      id: 1,
      paragraph: 'Is this complexity tutorial?',
      title: 'match word "is" not in "this"',
    },
  ],
} as { [key: string]: Question[] };
