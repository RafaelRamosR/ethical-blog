import { Link } from 'wouter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Container } from '../components';
import { useArticle } from "../hooks/useArticle";

export const Article = ({ params }) => {
  const markdown = useArticle(params.article);

  return (
    <Container col="md">
      <Link href="/">REGRESAR</Link>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </Container>
  )
};
