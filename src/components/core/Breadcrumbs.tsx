import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Mapowanie angielskich nazw URL na polskie odpowiedniki
const breadcrumbNameMap = {
  dashboard: 'Panel',
  articles: 'Baza Artykułów',
  departments: 'Działy i kontakty',
  helpdesk: 'Pomoc techniczna',
  sales: 'Dział sprzedaży',
  administration: 'Dział administracji',
  appointment: 'Dział umawiana spotkań',
  edit: 'Edytuj',
  'new-article': 'Nowy artykuł',
  'add-document': 'Dodaj dokument',
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className="breadcrumbs text-xs  font-poppins text-slate-500/90 ">
      <ul>
        <li><Link to="/">Panel</Link></li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
        
          const breadcrumbName = breadcrumbNameMap[value] || value;

          return (
            <li key={to}>
              {isLast ? (
                <span>{breadcrumbName}</span>
              ) : (
                <Link to={to}>{breadcrumbName}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
