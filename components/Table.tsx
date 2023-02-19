import { randomUUID } from 'crypto';
import React from 'react'
import { useTable } from 'react-table';
import { v1 as uuidv4 } from 'uuid';

function Table({columns, data} : {columns: any , data: any}) {

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    return (
        <div className="table-container container">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={uuidv4()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} key={uuidv4()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={uuidv4()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()} key={uuidv4()}>
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
