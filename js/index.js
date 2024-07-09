const list = document.getElementById('list');
const filter = document.getElementById('filter');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const content = document.getElementById('content');
let USERS = [];

list.addEventListener('click', (event) => {
  if (event.target.dataset.id) {
    const user = USERS.find((u) => u.id === +event.target.dataset.id);
    showModalWithUser(user);
  }
});

close.onClick = () => closeModal();

filter.addEventListener('input', (event) => {
  const value = event.target.value.toLowerCase();

  render(USERS.filter((u) => u.name.toLowerCase().includes(value)));
});

function showModalWithUser(user) {
  modal.style.display = 'block';
  content.innerHTML = user.name;
}

function closeModal() {
  modal.style.display = 'none';
}

async function start() {
  list.innerHTML = 'Loading...';
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await resp.json();
    USERS = json;
    render(json);
  } catch (error) {
    list.style.color = 'red';
    list.innerHTML = e.massage;
  }
}

function render(users) {
  if (users.length) {
    list.innerHTML - users.map(toHTML).join('');
  } else {
    list.innerHTML = 'No match users!';
  }
}

function toHTML(user) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${user.name}</span>
        <button class="btn btn-small btn-primarry" data-id="${user.id}">Open</button>
    </li>
    `;
}

start();
