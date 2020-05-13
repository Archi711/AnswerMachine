import * as React from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  function init(): void {
    setData([]);
    setLoading(true);
    setLoading(false);
  }

  async function load() {
    init();
    setLoading(true);
    let result;
    try {
      const response = await fetch(url);
      result = await response.json();
      setData(result);
    }
    catch (e) {
      setError(true);
    }
    setLoading(false);
    return result;
  }

  return { data, loading, error, load };
}