import { Container } from '../components';
import blogData from "../blog/data.json";

export const Home = () => {
  return (
    <Container>
      <h1 className="title">Blog de ética</h1>
      <main>
        {
          blogData.map(blog => {
            return (
              <>
                <h2>{ blog.category }</h2>
                {
                  blog.articles.map(article => (
                    <div>
                      <h3>{ article.title }</h3>
                      <p>{ article.subtitle }</p>
                      <a href={`/article${article.url}`}> Ver más</a>
                    </div>
                  ))
                }
              </>
            )
          })
        }
      </main>
    </Container>
  )
};
