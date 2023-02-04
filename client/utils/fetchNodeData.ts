async function fetchNodeData() {
  try {
    const response = await fetch('/api/node');
    if (!response.ok) throw Error(response.statusText);
    else {
      const data = await response.json();
      console.log('Successfully fetched data from node!');
      console.log(data);
    }
  } catch (err) {
    console.log(err);
  }
}
  
export default fetchNodeData;