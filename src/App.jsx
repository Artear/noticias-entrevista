import { useState } from 'react';
import ArticleList from './ArticleList';

const CATEGORIES = [
  { id: 'todas', label: 'Todas' },
  { id: 'politica', label: 'Política' },
  { id: 'deportes', label: 'Deportes' },
  { id: 'economia', label: 'Economía' },
];

export default function App() {
  const [category, setCategory] = useState('todas');

  return (
    <main>
      <h1>Últimas noticias</h1>
      <nav className="categories">
        {CATEGORIES.map((item) => (
          <button
            key={item.id}
            className={item.id === category ? 'active' : ''}
            onClick={() => setCategory(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <ArticleList category={category} />
    </main>
  );
}
