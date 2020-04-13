const admin = require('firebase-admin')

module.exports.fetchAppList = async function (request, response) {
  try {
    const db = admin.firestore()
    const snapshot = await db.collection('projects').get()

    let applist = []
  
    snapshot.forEach(document => {
      applist.push({
        ...document.data(), 
        id: document.id
      })
    })  

    response.end(JSON.stringify(applist))
  }
  catch(err) {
    console.log(err);
    response.end("could not fetch")
  }
}

module.exports.fetchAppSource = function (request, response) {

}