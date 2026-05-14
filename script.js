const firebaseConfig = {
apiKey:"AIzaSyC2Ak9UCORHwy0HJrl3eIbfS2ILBdK_bBE",
authDomain:"vesojo-chikitsakosh.firebaseapp.com",
projectId:"vesojo-chikitsakosh",
storageBucket:"vesojo-chikitsakosh.firebasestorage.app",
messagingSenderId:"698398476413",
appId:"1:698398476413:web:18853c971dbca60d02c914"
};

firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();

/* LOGIN */
window.handleLogin=async function(){
if(auth.currentUser){
await auth.signOut();
location.reload();
return;
}
let provider=new firebase.auth.GoogleAuthProvider();
await auth.signInWithPopup(provider);
};

/* AUTH */
auth.onAuthStateChanged(user=>{
document.getElementById("login-btn").innerText=user?"লগআউট":"লগইন";
document.getElementById("user-info").innerText=user?user.displayName:"সাইন-আপ";
});

/* SEARCH + OPEN PAGE */
window.searchHerb=function(event){

let input=document.getElementById("herbSearchInput").value.toLowerCase();
let cards=document.getElementsByClassName("herb-card");

let openPage=null;

for(let card of cards){
let title=card.querySelector("h3").innerText.toLowerCase();
let link=card.querySelector("a").href;

if(title.includes(input)){
card.style.display="block";
if(title===input) openPage=link;
}else{
card.style.display="none";
}
}

if(openPage){
window.location.href=openPage;
}
};

/* FILTER */
window.filterHerbs=function(event,cat){

let cards=document.getElementsByClassName("herb-card");

for(let card of cards){
let c=card.getAttribute("data-category");
card.style.display=(cat==="all"||c.includes(cat))?"block":"none";
}
};
