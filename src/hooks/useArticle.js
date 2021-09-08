import * as articles from '../blog';
import { useEffect, useState } from 'react';
import { slugParse } from "../helpers/slugParse";

export const useArticle = (params) => {
  const [article, setArticle] = useState('');
  const slug = slugParse(params);

  useEffect(() => {
    fetch(articles[slug])
      .then((res) => res.text())
      .then((md) => {
        setArticle(md);
      })
  }, [slug]);

  return article;
};
