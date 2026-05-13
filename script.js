// Firebase SDKs Import (CDN Version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// আপনার দেওয়া Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Ak9UCORHwy0HJrl3eIbfS2ILBdK_bBE",
  authDomain: "vesojo-chikitsakosh.firebaseapp.com",
  projectId: "vesojo-chikitsakosh",
  storageBucket: "vesojo-chikitsakosh.firebasestorage.app",
  messagingSenderId: "698398476413",
  appId: "1:698398476413:web:18853c971dbca60d02c914",
  measurementId: "G-F651KC1N3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// --- ১. লাইভ সার্চ সিস্টেম ---
const searchInput = document.getElementById('searchInput');
if(searchInput) {
    searchInput.addEventListener('keyup', function() {
        let filter = this.value.toUpperCase();
        let cards = document.querySelectorAll('.plant-card');

        cards.forEach(card => {
            let text = card.getAttribute('data-name').toUpperCase();
            if (text.includes(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// --- ২. হোয়াটসঅ্যাপ ডাইরেক্ট চ্যাট (আপনার নম্বরে) ---
const whatsappBtn = document.querySelector('.whatsapp-float');
if(whatsappBtn) {
    whatsappBtn.setAttribute('href', 'https://wa.me/8801917044596?text=আসসালামু আলাইকুম, আমি ভেষজ চিকিৎসা সম্পর্কে জানতে চাই।');
}

// --- ৩. লগইন স্ট্যাটাস চেক ---
onAuthStateChanged(auth, (user) => {
    const loginBtn = document.getElementById('login-btn');
    if (user) {
        // ইউজার লগইন থাকলে
        loginBtn.innerHTML = '<i class="fas fa-user-circle"></i> প্রোফাইল';
        console.log("Logged in as:", user.email);
    } else {
        // লগআউট থাকলে
        loginBtn.innerText = "লগইন";
    }
});

// --- ৪. মেনু বার (Mobile Responsive) ---
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if(burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}
