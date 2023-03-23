const BASE_URL = "http://localhost:3000/goals";

export async function getData(id: number) {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  return data;
}

export async function fecthFromJson() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
}

//Function for adding goals
export async function addGoal(goal: any) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(goal)
  });
  const data = await response.json();
  return data;
}

//Function for deleting goals
export async function deleteGoal(id: number) {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
}
//Function for updating the hour
export async function updateHour(id: number, hour: number) {
  const oldHour = await getData(id);
  const updatedHour = { ...oldHour, hours: hour };

  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updatedHour),
  });
  const data = await response.json();
  return data;
}
