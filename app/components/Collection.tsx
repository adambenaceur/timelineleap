"use client"

import { useRouter } from 'next/navigation';

const Collection = () => {
  const router = useRouter();

  const items = [
    { id: 1, name: 'Journals', image: 'journals.jpg' },
    { id: 2, name: 'Watches', image: 'watches.jpg' },
    { id: 3, name: 'Calendars', image: 'calendars.jpg' },
    { id: 4, name: 'Writing', image: 'writing.jpg' },
  ];

  return (
    <div className="collection">
      <h2 className="collection-title">Collection</h2>
      <div className="collection-grid">
        {items.map(item => (
          <button key={item.id} className="item-card" onClick={() => router.push(`/collection/${item.id}`)}>
            <img src={item.image} alt={item.name} className="item-image" />
            <h3 className="item-name">{item.name}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Collection;
