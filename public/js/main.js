const logout = async () => {
  const response = await fetch('/api/users-router/logout', {
    method: 'GET',
  });

  if (response.ok) {
    document.location.replace('/home');
  } else(err) => {
    console.err(err);
  }
};

document.querySelector('#home').addEventListener('click', logout);