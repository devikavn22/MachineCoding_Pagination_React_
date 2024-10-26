import { useState } from 'react';
import { FOODS } from './data/data.js';
import { Table } from './components/Table/Table';
import styles from './App.module.css';


const App = () => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = FOODS.slice(startIndex, endIndex);

  return (
    <div className={styles.paginationContainer}>
      <Table
        data={paginatedData}
        currentPage={currentPage}
        totalPages={Math.ceil(FOODS.length / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
