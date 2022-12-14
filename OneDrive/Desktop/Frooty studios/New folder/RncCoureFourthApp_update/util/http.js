import axios from "axios";
const BACKEND_URL = "https://react-nartive-course-default-rtdb.firebaseio.com";
export async function storeExpense(expenseData) {
  const respones = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = respones.data.name;
  return id;
}
export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");
  const expenses = [];
  console.log(response.data);
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      data: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}
export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}
export async function deleteExpense() {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
