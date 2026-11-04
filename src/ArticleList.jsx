import { useEffect, useState } from 'react';
import { fetchArticles } from './api';
import ArticleCard from './ArticleCard';

export default function ArticleList({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchArticles(category).then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  const handleSortByViews = () => {
    const sorted = articles.sort((a, b) => b.views - a.views);
    setArticles(sorted);
  };

  const visibleArticles = articles.filter((article) =>
    article.title.includes(query)
  );

  if (loading) {
    return <p className="status">Cargando...</p>;
  }

  return (
    <section>
      <div className="toolbar">
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSortByViews}>Ordenar por más leídas</button>
      </div>
      <ul className="list">
        {visibleArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </ul>
    </section>
  );
}
