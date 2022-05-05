const postId = document.querySelector('input[name="event-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="event-title"]').value;
  const body = document.querySelector('textarea[name="event-body"]').value;

  await fetch(`/api/event/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/homepage');
};

const deleteClickHandler = async function() {
  await fetch(`/api/event/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/homepage');
};

document
  .querySelector('#edit-event-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);