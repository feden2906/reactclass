const basicConfig = (url, obj = {}) => {
  return fetch('http://195.72.146.25/api/v1/cars' + url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    ...obj
  })
}

const saveCars = (car) => {
  return basicConfig('', {
    method: 'POST',
    body: JSON.stringify(car)
  })
      .then(response => response.json())
}

const getCars = () => {
  return basicConfig('')
      .then(response => response.json())
}

const dellCars = (id) => {
  return basicConfig('/' + id, {
    method: 'DELETE'
  })
}

const changeCars = (obj) => {
  return basicConfig('/' + obj.id, {
    method: 'PATCH',
    body: JSON.stringify(obj),
  })
      .then(response => response.json())
}

export { saveCars, getCars, dellCars, changeCars };
