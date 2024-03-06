import React, { useState } from 'react';

const Table = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 style={{ color: 'blue' }}>CoralMC cadidatura Deveoloper per FrMinerals</h1>
      <p>Sto facendo questa tabella per lafa.</p>
      <table>
        <thead>
          <tr>
            <th>Cosa sto facendo</th>
            <th>Chi e lafa?</th>
            {/* Aggiungi altre colonne se necessario */}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{sto mettendo elementi a caso perche non mi e stato specificato nulla da lafa}</td>
              <td>{lafa e un deveoloper per coralmc e questa tabella e un suo compito}</td>
              {/* Aggiungi altre colonne al click */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </left mouse-button>
        <span> Page {currentPage} of {totalPages} </span>
        <button
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;


