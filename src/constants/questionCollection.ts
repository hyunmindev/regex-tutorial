import { Question } from '@/types/question';

export default {
  simplestMatch: [
    {
      answers: ['world'],
      flags: ['g'],
      id: 0,
      paragraph: 'Hello world',
      title: 'match word "world"',
    },
    {
      answers: ['simple'],
      flags: ['g'],
      id: 1,
      paragraph: 'This is simple tutorial.',
      title: 'match word "simple"',
    },
    {
      answers: ['useful'],
      flags: ['g'],
      id: 2,
      paragraph: 'Regular expressions are very useful.',
      title: 'match word "useful"',
    },
  ],
  simpleMatch: [
    {
      answers: ['\\\\'],
      flags: ['g'],
      id: 0,
      paragraph: '\\ is Backslash.',
      title: 'match word "\\"',
    },
  ],
  complicatedMatch: [
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
  mostComplicatedProblem: [
    {
      answers: ['wip'],
      flags: ['g'],
      id: 0,
      paragraph: 'wip',
      title: 'wip',
    },
    {
      answers: ['wip'],
      flags: ['g'],
      id: 1,
      paragraph: 'wip',
      title: 'wip',
    },
  ],
} as { [key: string]: Question[] };
