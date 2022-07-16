interface Props {
  content: string;
}

export default function QuestionLabel({ content }: Props) {
  return <p>{content}</p>;
}
