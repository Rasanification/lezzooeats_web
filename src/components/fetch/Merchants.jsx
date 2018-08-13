import axios from 'axios';

export function getMerchants(){
  return new Promise((resolve, reject) => {
    axios.get('http://api3.lezzooeats.com/app/merchants').then((result) => {
      resolve(result)
    }).catch((error) => {
      reject(error)
    })
  })
}
