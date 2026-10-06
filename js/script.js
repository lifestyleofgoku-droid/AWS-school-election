import { db } from "./firebase-config.js";

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const contestants = [
  {
    id: "c1",
    name: "Contestant 1",
    image: "images/candidte1.jpg"
  },
  {
    id: "c2",
    name: "Contestant 2",
    image: "images/candidte2.jpg"
  },
  {
    id: "c3",
    name: "Contestant 3",
    image: "images/candidte3.jpg"
    
  },
  {
    id: "c4",
    name: "Contestant 4",
    image: "images/candidte1.jpg"
    
  }
];

const container = document.getElementById("candidateContainer");

loadCandidates();

function loadCandidates(){

container.innerHTML="";

contestants.forEach(c=>{

container.innerHTML+=`
<div class="card">

<img src="${c.image}" alt="${c.name}">

<h2>${c.name}</h2>

<button class="voteBtn" onclick="vote('${c.id}')">
Vote
</button>

</div>
`;

});

}

window.vote = async function(id){

document.getElementById("message").innerHTML="Saving Vote...";

const ref = doc(db,"votes",id);

const snap = await getDoc(ref);

if(snap.exists()){

await updateDoc(ref,{
count:increment(1)
});

}else{

await setDoc(ref,{
count:1
});

}

document.getElementById("message").innerHTML=
"✅ Thank You For Voting";

setTimeout(()=>{

document.getElementById("message").innerHTML="";

},2000);

}

