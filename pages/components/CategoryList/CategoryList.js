import React from 'react';
import Link from 'next/link';
import styles from './CategoryList.module.css';

const CategoryList = ({ categories, id }) => {
  return (
    <div className={styles['category-container']}>
      <header>Browse All Pokemon Categories</header>
      <ul className={styles['category-list']}>
        {categories?.map((category) => (
          <li className={styles.category} key={id(category)}>
            <Link className={styles['category-link']} href={`/Categories/${id(category)}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
