import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = {
  DataCell: {
    '&$Highlighted': {
      backgroundColor: 'gray',
    },
  },
  DataGrid: {
    textAlign: '-webkit-center',
    '& tr > *': {
      border: '1px solid black',
    },
  },
  DataTable: {
    borderSpacing: 0,
  },
  Highlighted: {},
};

const DataGrid = ({
  data,
  handleBlur,
  handleFocus,
  handleKeyDown,
  headers,
  highlightedCell,
  classes,
}) =>
  <div
    className={classes.DataGrid}
    onBlur={handleBlur}
    onFocus={handleFocus}
    onKeyDown={handleKeyDown}
    tabIndex={0}
  >
    <table className={classes.DataTable}>
      <thead>
        <tr>
          {headers.map((val, idx) =>
            <th key={idx}>
              {val.title}
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((val, idx) =>
          <tr key={idx}>
            {headers.map((hval, hidx) =>
              <td
                className={classNames({
                  [classes.DataCell]: true,
                  [classes.Highlighted]:
                    hidx === highlightedCell.hidx &&
                    idx === highlightedCell.idx,
                })}
                key={hidx}
              >
                {val[hval.key]}
              </td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  </div>;

export default injectSheet(styles)(DataGrid);
