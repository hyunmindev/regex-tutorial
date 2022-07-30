import { Question } from '@/types/question';

export default {
  simplestMatch: [
    {
      answers: ['world'],
      flags: ['g'],
      id: 0,
      paragraph: 'Hello world!',
      title: 'match word "world"',
      hint: 'hint 1',
    },
    {
      answers: ['simple'],
      flags: ['g'],
      id: 1,
      paragraph: 'This is a simple tutorial.',
      title: 'match word "simple"',
      hint: 'hint 2',
    },
    {
      answers: ['useful'],
      flags: ['g'],
      id: 2,
      paragraph: 'Regular expressions are very useful.',
      title: 'match word "useful"',
      hint: 'hint 3',
    },
  ],
  simpleMatch: [
    {
      answers: ['\\\\'],
      flags: ['g'],
      id: 0,
      paragraph: '\\ is Backslash.',
      title: 'match word "\\"',
      hint: 'hint 4',
    },
    {
      answers: ['\\*\\*'],
      flags: ['g'],
      id: 1,
      paragraph: '** in the night sky.',
      title: 'match word "**"',
      hint: 'hint 4',
    },
  ],
  complicatedMatch: [
    {
      answers: ['complicated|tutorial'],
      flags: ['g'],
      id: 0,
      paragraph: 'This is a complicated tutorial.',
      title: 'match word "complexity" and "tutorial"',
      hint: 'hint 5',
    },
    {
      answers: ['^is'],
      flags: ['g', 'i'],
      id: 1,
      paragraph: 'Is this tutorial complicated?',
      title: 'match word "is" not in "this"',
      hint: 'hint 6',
    },
  ],
  mostComplicatedProblem: [
    {
      answers: ['\\w+'],
      flags: ['g'],
      id: 0,
      paragraph: 'Happy birthday to you',
      title: 'match all the words',
      hint: 'hint 7',
    },
  ],
} as { [key: string]: Question[] };
