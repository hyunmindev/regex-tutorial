import styles from './index.module.scss';

interface Props {
  content: string;
  matches: string[];
}

const FIRST = 0;
const B_TAG_LENGTH = 7;

const coverHighlight = (start: number, end: number, target: string) => {
  const first = target.substring(FIRST, start);
  const second = `<b>${target.substring(start, end)}</b>`;
  const third = target.substring(end);
  return first + second + third;
};

const highlight = (content: string, matches: string[]) => {
  let current = FIRST;
  return matches.reduce((acc, match) => {
    current = acc.indexOf(match, current);
    const start = current;
    const end = current + match.length;
    current += match.length + B_TAG_LENGTH;
    return coverHighlight(start, end, acc);
  }, content);
};

function QuestionLabel({ content, matches }: Props) {
  const highlightedContent = highlight(content, matches);

  return (
    <p
      className={styles.container}
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{ __html: highlightedContent }}
    />
  );
}

export default QuestionLabel;
