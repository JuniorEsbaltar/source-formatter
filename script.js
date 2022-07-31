const formatSource = (source) => {
  const queryObj = JSON.parse(source);

  const query = document.getElementById("query");
  const variables = document.getElementById("variables");

  query.innerHTML = queryObj.query || '';
  variables.innerHTML = JSON.stringify(queryObj.variables, undefined, 2) || '';
}

const textarea = document.getElementById("unformatedSource");

textarea.addEventListener('input', function handleChange(event) {
  formatSource(event.target.value);
});