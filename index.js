
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase,ref,push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



const appSettings = {
    databaseURL: "https://mycart-af0b7-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database =getDatabase(app)
const itemsInDB = ref(database,"items")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function () {
    let inputValue = inputFieldEl.value

    push(itemsInDB, inputValue)

    inputFieldEl.value =""

    shoppingListEl.innerHTML +=`<li>${inputValue}</li>`
    console.log(inputValue)
})