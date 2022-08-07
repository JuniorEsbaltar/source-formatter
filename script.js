const formatSource = (source) => {
  const queryObj = isObject(source);

  const query = document.getElementById("query");
  const variables = document.getElementById("variables");
  
  query.innerHTML = queryObj.query || '';
  variables.innerHTML = JSON.stringify(queryObj.variables, undefined, 2) || '';
}

const isObject = (obj) => {
  try {
    return JSON.parse(obj);
  } catch { 
    return {}
  }
}

const textarea = document.getElementById("unformatedSource");

textarea.addEventListener('input', function handleChange(event) {
  formatSource(event.target.value);
});

const copyAction = (inputId) => {
  const input = document.getElementById(inputId);
  navigator.clipboard.writeText(input.value);
}