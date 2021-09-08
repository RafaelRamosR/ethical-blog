const CategorySection = ({ children, category }) => (
  <section className='category'>
    <h2 className='title'>{category}</h2>
    <div className='cards'>
      { children }
    </div>
  </section>
);

export default CategorySection;
