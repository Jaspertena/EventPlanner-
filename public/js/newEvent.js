
const newEventFormHandler = async function(event) {
  event.preventDefault();

  const nameEl = document.querySelector('#name-input-newEvent').value;
  const descriptionEl = document.querySelector('#description-input-newEvent').value;
  const event_startEl = document.querySelector('#event_start-input-newEvent').value;
  const event_endEl = document.querySelector('#event_end-input-newEvent').value;
  const locationEl = document.querySelector('#location-input-newEvent').value;
  const costEl = document.querySelector
  ('#cost-input-newEvent').value;
  const linkEl = document.querySelector
  ('#link-input-newEvent').value;

  const response = await fetch('/api/newEvent', {
    method: 'POST',
    body: JSON.stringify({
      name: nameEl,
      description: descriptionEl,
      event_start: event_startEl,
      event_end: event_endEl,
      location: locationEl,
      cost: costEl,
      link: linkEl,

    }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);
  if (response.ok) {
    document.location.replace('/homepage');
  } else {
    alert('Failed to add event');
  }
};

document
  .querySelector('#newevent-form')
  .addEventListener('submit', newEventFormHandler);

console.log(document.querySelector("#newevent-form"));
