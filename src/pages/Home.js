import { Container, CardLink, CategorySection } from '../components';
import blogData from '../blog/data.json';

export const Home = () => {
  return (
    <Container col='lg'>
      <h1>Compendio de ética</h1>
      {blogData.map((blog, key) => {
        return (
          <CategorySection category={blog.category} key={key}>
            {blog.articles.map((article, key) => {
              const { title, subtitle, url } = article;
              return (
                <CardLink
                  key={key}
                  title={title}
                  subtitle={subtitle}
                  url={url}
                />
              );
            })}
          </CategorySection>
        );
      })}
    </Container>
  );
};
