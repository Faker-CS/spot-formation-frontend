// Placeholder for API calls related to authentication
export async function loginApi(email, password) {
  // Simulate API call
  return new Promise((res) => setTimeout(() => res({ token: "fake-token", user: { email, password } }), 600));
}

export async function logoutApi() {
  return Promise.resolve(true);
}
