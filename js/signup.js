window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signup-form');
  if (!form) return;

  const FORM_BASE = 'https://docs.google.com/forms/d/e/1FAIpQLSeLOlpVbhx2bNZ5GRmNowvA6EUVA92Zo077sijcan1yn300TQ/viewform';

  // The double space in programValue must match the Google Form option exactly.
  const FIELDS = {
    program: 'entry.1699233058',
    programValue: 'FRC  (Grades 7-12th)',
    name: 'entry.573650983',
    email: 'entry.1010324525',
    phone: 'entry.238358888'
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const phone = document.getElementById('signup-phone').value.trim();

    const params = new URLSearchParams();
    params.set('usp', 'pp_url');
    params.set(FIELDS.program, FIELDS.programValue);
    if (name) params.set(FIELDS.name, name);
    if (email) params.set(FIELDS.email, email);
    if (phone) params.set(FIELDS.phone, phone);

    window.open(FORM_BASE + '?' + params.toString(), '_blank', 'noopener');
  });
});
