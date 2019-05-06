/* globals process */
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Since DOM elements <a> cannot receive activeClassName,
// destructure the prop here and pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, ...other }) => {
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.

  const internal = (/^\/(?!\/)/).test(to);
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    to += to.endsWith('/') ? '' : '/';
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...other}>
        {children}
      </GatsbyLink>
    );
  }
  // Check if Link is routing to a ourDomain, to prevent adding _blank
  const ourDomain = to && to.includes(process.env.GATSBY_DOMAIN);

  return (
    <a
      href={to}
      target={ourDomain ? undefined : '_blank'}
      rel={ourDomain ? undefined : 'noopener noreferrer'}
      {...other}
    >
      {children}
    </a>
  );
};

export default Link;
