import { Link } from 'wouter';
import { Container } from '../components';
import blogData from '../blog/data.json';
import fileIcon from '../assets/file.png';

export const Home = () => {
  return (
    <Container col="lg">
      <h1>Blog de ética</h1>
        {
          blogData.map((blog, key) => {
            return (
              <section className="category" key={key}>
                <h2 className="title">{ blog.category }</h2>
                <div className="cards">
                {
                  blog.articles.map((article, key) => (
                      <Link 
                        className="card"
                        href={`/article${article.url}`}
                        key={key}
                        title={ article.title }
                      >
                        <div className="card___icon">
                          <img src={fileIcon} width="30" alt="file icon" />
                        </div>
                        <div className="card__content">
                          <h3 className="card__title">{ article.title }</h3>
                          <p className="card__subtitle">{ article.subtitle }</p>
                        </div>
                      </Link>
                  ))
                }
                </div>
              </section>
            )
          })
        }
    </Container>
  )
};
