// Fill in the form with user data
export function leadFormSubmission() {
  const timestamp = Date.now();
  return {
    name: `test${timestamp}`,
    email: `test${timestamp}@example.com`,
    phone: `${Math.floor(1000000000 + Math.random() * 9000000000)}`
  };
}

