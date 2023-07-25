import { sendRequest } from "./send-request";
const BASE_URL = "/api/users";

export async function signUp(userData) {
  return sendRequest(`${BASE_URL}`, "POST", userData);
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export async function updateUser(userDetails) {
  return sendRequest(`${BASE_URL}/${userDetails._id}`, "PUT", userDetails);
}

export function getUser(userId) {
  return sendRequest(`${BASE_URL}/${userId}`);
}

export function getUsers() {
  return sendRequest(`${BASE_URL}`);
}
