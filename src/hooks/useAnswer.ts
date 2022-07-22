import { useEffect, useState } from 'react';

export default (
  id: number,
  flags: string[],
  answers: string[],
  paragraph: string
) => {
  const [isValidate, setIsValidate] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [matches, setMatches] = useState<string[]>([]);
  const answerState = useState('');

  const [answer] = answerState;

  useEffect(() => {
    try {
      const regExp = new RegExp(answer, flags.join(''));
      const result = paragraph.match(regExp);
      setMatches([...(result ?? [])]);
      setIsValidate(true);
    } catch (e) {
      setIsValidate(false);
    } finally {
      setIsCorrect((answers ?? []).includes(answer));
    }
  }, [id, answer]);

  return { matches, isCorrect, isValidate, answerState };
};
