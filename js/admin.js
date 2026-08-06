import { db } from "./firebase-config.js";
import { doc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

["c1","c2","c3","c4"].forEach((id)=>{

    const cell = document.getElementById(id);

    onSnapshot(doc(db,"votes",id),(snap)=>{

        console.log(id, snap.exists(), snap.data());

        if(snap.exists()){
            cell.textContent = snap.data().count;
        }

    });

});