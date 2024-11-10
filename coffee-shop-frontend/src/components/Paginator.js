import { React } from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginator = ({ currentPage, totalPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPage) onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    let pageItem = [];
    for (let page = 1; page <= totalPage; page++) {
      pageItem.push(
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Pagination.Item>
      );
    }
    return pageItem;
  };

  return (
    <div>
      <Pagination>
        <Pagination.Prev
          onClick={handlePrevious}
          disabled={currentPage === 1}
        />
        {renderPageNumbers()}
        <Pagination.Next
          onClick={handleNext}
          disabled={currentPage === totalPage}
        />
      </Pagination>
    </div>
  );
};

export default Paginator;
