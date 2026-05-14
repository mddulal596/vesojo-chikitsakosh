const firebaseConfig = {
    apiKey: "AIzaSyC2Ak9UCORHwy0HJrl3eIbfS2ILBdK_bBE",
    authDomain: "vesojo-chikitsakosh.firebaseapp.com",
    projectId: "vesojo-chikitsakosh",
    storageBucket: "vesojo-chikitsakosh.firebasestorage.app",
    messagingSenderId: "698398476413",
    appId: "1:698398476413:web:18853c971dbca60d02c914",
    measurementId: "G-F651KC1N3Y"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

/* ================= LOGIN ================= */
async function handleLogin(){
if(auth.currentUser){
    await auth.signOut();
    location.reload();
}else{
    const provider = new firebase.auth.GoogleAuthProvider();
    try{
        await auth.signInWithPopup(provider);
    }catch(error){
        alert("লগইন করতে সমস্যা হয়েছে: " + error.message);
    }
}
}

/* ================= AUTH ================= */
auth.onAuthStateChanged(user=>{
const loginBtn = document.getElementById('login-btn');
const userInfo = document.getElementById('user-info');
if(user){
    loginBtn.innerText = "লগআউট";
    userInfo.innerText = user.displayName;
}else{
    loginBtn.innerText = "লগইন";
    userInfo.innerText = "সাইন-আপ";
}
});

/* ================= SEARCH ================= */
window.searchHerb = function(){
let input = document.getElementById('herbSearchInput').value.toLowerCase();
let cards = document.getElementsByClassName('herb-card');
for(let card of cards){
    let title = card.querySelector('h3').innerText.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
}
};

/* ================= FILTER ================= */
window.filterHerbs = function(category){
let cards = document.getElementsByClassName('herb-card');
let btns = document.getElementsByClassName('filter-btn');
for(let btn of btns){
    btn.classList.remove('active');
}
event.currentTarget.classList.add('active');
for(let card of cards){
    let cardCat = card.getAttribute('data-category');
    card.style.display = (category === 'all' || cardCat.includes(category)) ? "block" : "none";
}
};
