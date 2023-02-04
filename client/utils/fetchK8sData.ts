async function fetchKubernetesData() {
  try {
    const response = await fetch('/api/metrics');
    if (!response.ok) throw Error(response.statusText);
    else {
      const data = await response.json();
      console.log('Successfully fetched kubernetes cluster data!');
      console.log(data);
    } 
  } catch (err) {
    console.log(err);
  }
}

export default fetchKubernetesData;