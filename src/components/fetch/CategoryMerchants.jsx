import axios from 'axios';

export function getCategoryMerchants(categoryID){
  return new Promise((resolve, reject) => {
    axios.get(`http://api3.lezzooeats.com/app/specialities/${categoryID}/merchants?city=erbil`).then((result) => {
      resolve(result)
    }).catch((error) => {
      reject(error)
    })
  })
}
