const table = document.getElementById('interactive-table');
const rows = Array.from(table.rows).slice(1);

table.addEventListener('click', event => {
  if (event.target.tagName.toLowerCase() === 'th') {
    const columnIndex = event.target.cellIndex;
    const sortedRows = rows.sort((a, b) => {
      const aValue = a.cells[columnIndex].innerText;
      const bValue = b.cells[columnIndex].innerText;
      return aValue.localeCompare(bValue);
    });
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    sortedRows.forEach(row => tbody.appendChild(row));
  }
});
