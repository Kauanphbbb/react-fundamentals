import React, { useMemo } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export default function Post() {
  const params = useParams();
  const { search } = useLocation();
  const history = useHistory();

  function handleNavigate() {
    history.push('/posts');
  }

  const queryParams = useMemo(() => new URLSearchParams(search), [search]);
  console.log(queryParams.get('filter'));
  console.log({ params });
  return (
    <>
      <button onClick={handleNavigate}>Voltar para os posts</button>
      <h1>Post Page</h1>
    </>
  );
}
