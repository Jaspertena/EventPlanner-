
const newEventFormHandler = async function(event) {
  event.preventDefault();


  const nameEl = document.querySelector('#name-input-newEvent');

  const descriptionEl = document.querySelector('#description-input-newEvent');

  const response = await fetch('/api/newEvent', {
    method: 'POST',
    body: JSON.stringify({
      name: nameEl.value,
      description: descriptionEl.value,
      event_start: event_startEl.value,
      event_end: event_endEl.value,
      location: locationEl.value,
      cost: costEl.value,
      link: linkEl.value,

    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/homepage');
  } else {
    alert('Failed to add event');
  }
};

document
  .querySelector('#newEvent-form')
  .addEventListener('submit', newEventFormHandler);

