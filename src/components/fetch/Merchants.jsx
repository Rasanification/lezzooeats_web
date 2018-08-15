import axios from 'axios';

export function getAllMerchants(){
  return new Promise((resolve, reject) => {
    axios.get('http://api3.lezzooeats.com/app/merchants').then((result) => {
      resolve(result)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function getMerchantsBySpecialty(specialtyID){
  return new Promise((resolve, reject) => {
    axios.get(`http://api3.lezzooeats.com/app/specialities/${specialtyID}/merchants?city=erbil`).then((result) => {
      resolve(result)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function getMerchantCategories(merchantID){
  return new Promise((resolve, reject) => {
    axios.get(`http://api3.lezzooeats.com/app/merchants/${merchantID}/categories`).then((result) => {
      resolve(result)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function getMerchantProducts(merchantID){
  return new Promise((resolve, reject) => {
    axios.get(`http://api3.lezzooeats.com/app/merchants/${merchantID}/products`).then((result) => {
      resolve(result)
    }).catch((error) => {
      reject(error)
    })
  })
}

