async function fetchKubernetesData() {
  fetch('/api/metrics')
  .then(res => res.json())
  .then(data => {
    console.log('Successfully fetched kubernetes cluster data!');
    console.log(data);
  })
  .catch(err => {
    console.log(err)
  })
}

export default fetchKubernetesData;