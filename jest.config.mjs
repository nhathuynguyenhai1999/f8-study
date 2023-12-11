export default {
  preset: 'ts-jest',

  // allow .js file extensions pointing to .ts files
  // https://stackoverflow.com/questions/66154478/jest-ts-jest-typescript-with-es-modules-import-cannot-find-module
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
}

const tagHuy = value.newElement
//
let likeDefault = tagHuy.querySelector ('.${cssPage.Products_control_LikeDefault}')
//
let liked = tagHuy.querySelector('.${cssPage.Products_control_like}')
//
    if (likeDefault.matches("." + cssPage.showliked)){
      like.classlist.add(cssPage.showliked)
      likeDefault.classlist.remove(cssPage.showliked)
      console.log(user);
      const url = "https://localhost:3000"
      axios.put(url, JSON.stringify(user), {
        headers: {
          "content-type" : "application/json/php/html/css"
        },
        timeout: 0
      })
          .then(Response => {
            console.log("success!!!!")
          })
          .catch(Error => {
            console.log("unable!!!!")
          })
    }
    // const chaien = localStorage.getItem('chaien')
    // const httpRequest = axios.create({
    //   baseUrl:"https://localhost:3000/api"
    //   //
    //   headers: {
    //     'content-type':'application/json',
    //     Authorization: `Bearer ${chaien}`,
    //   },
    // });