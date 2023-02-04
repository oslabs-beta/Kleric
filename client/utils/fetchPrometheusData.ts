async function fetchPrometheusData() {
  try {
    const response = await fetch('/api/prometheus');
    if (!response.ok) throw Error(response.statusText);
    else {
      const data = await response.json();
      console.log('Successfully fetched data from prometheus!');
      console.log(data);
    }
  } catch (err) {
    console.log(err);
  }
}
  
export default fetchPrometheusData;