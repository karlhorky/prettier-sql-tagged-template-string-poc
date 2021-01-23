// Markdown indentation strips extra indentation, leaving it at a base of 2
const markdown = md`
  # abc

  123

  - asdf
`;

// Here it's applied to SQL (courtesy of the patch applied by `patch-package`)
const query = sql`
  SELECT \*
  FROM
  projects;
`;

// GQL, CSS and HTML indentation are better though:

const gql = gql`
  query {
    name
  }
`;

const styles = css`
  .abc {
  }
`;

const markup = html`
  <html>
    <div></div>
  </html>
`;
