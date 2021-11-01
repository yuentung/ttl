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
  const [firstItem, setFirstItem] = useState(0);

  useEffect(() => {
    if (currentState.currentPage === Math.ceil(totalItems / itemsPerPage - 1)) {
      setFirstItem(totalItems - itemsPerPage);
    } else {
      setFirstItem(currentState.currentPage * itemsPerPage);
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

  return [firstItem, firstItem + 2 * itemsPerPage > totalItems, setPage];
};

export default usePagination;
