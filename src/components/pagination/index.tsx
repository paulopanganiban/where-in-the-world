import React from "react";
interface Props {
  itemsPerPage: number;
  paginate: (pageNumber: number) => void;
  totalItems: number;
}
const Pagination = ({ itemsPerPage, totalItems, paginate }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
