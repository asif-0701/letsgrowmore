const addButton = document.getElementById('add-button');
const input = document.getElementById('new-item');
const list = document.getElementById('list');

addButton.addEventListener('click', function() {
  const newItem = document.createElement('li');
  const text = document.createTextNode(input.value);
  newItem.appendChild(text);
  
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerHTML = 'Delete';
  deleteButton.addEventListener('click', function() {
    list.removeChild(newItem);
  });
  
  newItem.appendChild(deleteButton);
  list.appendChild(newItem);
  
  input.value = '';
});
