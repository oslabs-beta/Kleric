async function fetchPrometheusData() {
    fetch('/api/prometheus')
    .then(res => res.json())
    .then(data => {
      console.log('Successfully fetched data from prometheus!');
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  export default fetchPrometheusData;