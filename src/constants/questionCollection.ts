import { Question } from '@/types/question';

export default {
  simplestMatch: [
    {
      answers: ['world'],
      flags: ['g'],
      id: 0,
      paragraph: 'Hello world',
      title: 'match word "world"',
      hint: 'hint 1',
    },
    {
      answers: ['simple'],
      flags: ['g'],
      id: 1,
      paragraph: 'This is simple tutorial.',
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
  ],
  complicatedMatch: [
    {
      answers: ['complexity|tutorial'],
      flags: ['g'],
      id: 0,
      paragraph: 'This is complexity tutorial.',
      title: 'match word "complexity" and "tutorial"',
      hint: 'hint 5',
    },
    {
      answers: ['^is'],
      flags: ['g', 'i'],
      id: 1,
      paragraph: 'Is this complexity tutorial?',
      title: 'match word "is" not in "this"',
      hint: 'hint 6',
    },
  ],
  mostComplicatedProblem: [
    {
      answers: ['wip'],
      flags: ['g'],
      id: 0,
      paragraph: 'wip',
      title: 'wip',
      hint: 'hint 7',
    },
    {
      answers: ['wip'],
      flags: ['g'],
      id: 1,
      paragraph: 'wip',
      title: 'wip',
      hint: 'hint 8',
    },
  ],
} as { [key: string]: Question[] };
