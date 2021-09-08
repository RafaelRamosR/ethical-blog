import { Link } from 'wouter';
import fileIcon from '../../assets/file.png';

export const CardLink = ({ title, subtitle, url }) => {
  return (
    <Link 
      className="card"
      href={`/article${url}`}
      title={ title.toUpperCase() }
    >
      <div className="card___icon">
        <img src={fileIcon} width="30" alt="file icon" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{ title }</h3>
        <p className="card__subtitle">{ subtitle }</p>
      </div>
    </Link>
  )
}