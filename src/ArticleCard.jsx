import { useState } from 'react';

export default function ArticleCard({ article }) {
  const [saved, setSaved] = useState(false);

  return (
    <li className="card">
      <div>
        <h3>{article.title}</h3>
        <small>
          {new Date(article.publishedAt).toLocaleDateString('es-AR')} ·{' '}
          {article.views.toLocaleString('es-AR')} lecturas
        </small>
      </div>
      <div className="save" onClick={() => setSaved(!saved)}>
        {saved ? '★ Guardada' : '☆ Guardar'}
      </div>
    </li>
  );
}
