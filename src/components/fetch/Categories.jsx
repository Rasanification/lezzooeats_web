import axios from 'axios';

export function getCategories(){
  return new Promise((resolve, reject) => {
    axios.get('http://api3.lezzooeats.com/app/specialities?city=erbil').then((result) => {
      resolve(result)
    }).catch((error) => {
      reject(error)
    })
  })
}
