import { useEffect, useState } from 'react';
import useWindowDimensions from "./useWindowDimensions";

const getItemsPerPage = width => {
  if (width > 1200) return 3;
  else if (width > 768) return 2;
  else return 1;
}

const usePagination = totalItems => {
  const { width } = useWindowDimensions();
  const itemsPerPage = getItemsPerPage(width);
  const [currentState, setCurrentState] = useState({
    currentPage: 0,
    direction: 1,
  });
  const [showItem, setShowItem] = useState(0);

  useEffect(() => {
    if (currentState.currentPage === Math.ceil(totalItems / itemsPerPage - 1)) {
      setShowItem(totalItems - 1);
    } else {
      const currentItems = [...Array(itemsPerPage).keys()].map(index => currentState.currentPage * itemsPerPage + index);
      setShowItem(currentItems[currentState.direction === -1 ? 0 : itemsPerPage - 1]);
    }
  }, [currentState, itemsPerPage, totalItems]);

  const setPage = dir => {
    if (dir === -1 && currentState.currentPage === 0) return;
    if (dir === 1 && currentState.currentPage === Math.ceil(totalItems / itemsPerPage - 1)) return;
    setCurrentState(prevState => ({
      currentPage: prevState.currentPage + dir,
      direction: dir,
    }));
  };

  return [showItem, setPage];
};

export default usePagination;
