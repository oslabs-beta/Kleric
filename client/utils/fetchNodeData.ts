async function fetchNodeData() {
    fetch('/api/node')
    .then(res => res.json())
    .then(data => {
      console.log('Successfully fetched data from node!');
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  export default fetchNodeData;