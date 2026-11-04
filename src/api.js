// Mock API that simulates a backend. Do not modify this file.

const ARTICLES = [
  { id: 1, title: 'El Senado debate la nueva ley de presupuesto', category: 'politica', publishedAt: '2026-11-03T09:15:00Z', views: 12450 },
  { id: 2, title: 'River y Boca definen la fecha del superclásico', category: 'deportes', publishedAt: '2026-11-03T11:40:00Z', views: 38900 },
  { id: 3, title: 'El dólar cerró estable en una jornada sin sobresaltos', category: 'economia', publishedAt: '2026-11-02T18:05:00Z', views: 21300 },
  { id: 4, title: 'Gobernadores piden más fondos para obras públicas', category: 'politica', publishedAt: '2026-11-02T13:20:00Z', views: 5800 },
  { id: 5, title: 'La Selección confirmó la lista para los amistosos', category: 'deportes', publishedAt: '2026-11-01T20:30:00Z', views: 45100 },
  { id: 6, title: 'Cómo impacta la inflación en las compras del mes', category: 'economia', publishedAt: '2026-11-01T08:50:00Z', views: 17650 },
  { id: 7, title: 'Diputados aprobó el proyecto de ley de alquileres', category: 'politica', publishedAt: '2026-10-31T16:10:00Z', views: 26700 },
  { id: 8, title: 'Un argentino ganó el torneo de tenis en Viena', category: 'deportes', publishedAt: '2026-10-31T14:00:00Z', views: 9200 },
];

// Response time varies by category, like a real backend would.
const DELAY_MS = {
  todas: 700,
  politica: 1500,
  deportes: 300,
  economia: 900,
};

export function fetchArticles(category) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (category === 'economia') {
        reject(new Error('503 Service Unavailable'));
        return;
      }
      const data =
        category === 'todas'
          ? ARTICLES
          : ARTICLES.filter((article) => article.category === category);
      resolve(data.map((article) => ({ ...article })));
    }, DELAY_MS[category] ?? 500);
  });
}
