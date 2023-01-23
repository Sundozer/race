const baseUrl = 'http://localhost:3000';
const path = {
  garage: '/garage',
  winners: '/winners',
};

// class carRace {
//     constructor(name, color) {
//         this.name = name,
//         this.color = color
//     }
// }

export async function getServer(query?: []) {
  function generateQuery(queryParams = []) {
    return queryParams.length ? `?${queryParams.map((x) => `${Object.keys(x)[0]}=${Object.values(x)[0]}`).join('&')}` : '';
  }
  const res = await fetch(`${baseUrl}${path.garage}${generateQuery(query)}`);
  const data = await res.json();
  return data;
}

export async function createServerId(innerBody: { name:string, color: string }) {
  const res = await fetch(`${baseUrl}${path.garage}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(innerBody),

  });
  const data = await res.json();
  return data;
}

export async function updateServerId(id: number, innerBody: { name:string, color: string }) {
  const res = await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(innerBody),

  });
  const data = await res.json();
  return data;
}
export async function updateServerIdParameter(id: number, innerBody: { name:string, color: string }) {
  const res = await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(innerBody),

  });
  const data = await res.json();
  return data;
}

export async function deleteServerId(id: number) {
  const res = await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  return data;
}

//-----------------------------------------------------------------
// async function main() {
//     const result = await deleteServerId(7)

//     console.log(result)
// }
