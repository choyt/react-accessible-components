import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Breadcrumb: {
    display: 'inline-block',
    padding: '.5em',
    textAlign: 'center',
  },
  Link: {
    padding: '.5em',
  },
};

const Breadcrumb = ({ data, classes }) => {
  const crumbJoin = (arr, sep) => {
    var lastIdx = arr.length - 1;
    return arr.reduce((res, val, idx) => {
      const crumbLink = (
        <a href={val.link} key={idx} className={classes.Link}>
          {val.text}
        </a>
      );
      res.push(crumbLink);
      if (lastIdx !== idx) {
        res.push(sep);
      }
      return res;
    }, []);
  };
  const crumbs = crumbJoin(data, '>');
  return (
    <div className={classes.Breadcrumb}>
      {crumbs}
    </div>
  );
};

export default injectSheet(styles)(Breadcrumb);
