import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import admin from "firebase-admin";

import serviceAccount from "_____" assert { type: "json" };
// import serviceAccount from "_____" with { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors());
app.listen(port, ()=>{
    console.log(`Web application listening on port ${port}.`);
});

async function addHerb(_____){
    const hbRef = db.collection('_____').doc();
    const docRef = db.collection('_____').doc(_____);
    let tmpObj = { ...tmpHbData, hbId: hbRef.id };
    await docRef._____(tmpObj);
    console.log('Herb added.');
}

app.post('/api/addHerb', (req, res) => {
    const { hbName, hbDesc, hbCate, hbProp, hbSupp } = req._____;
    const tmpData = { _____, ..., _____ };
    _____(tmpData);
    res.status(200).json({ message: '[INFO] Add new herb successfully.' });
})

async function _____(hbId){
    const docRef = db.collection("_____").doc(_____);
    await docRef._____();
    console.log('Herb deleted.');
}

app.delete('_____', (req, res) => {
    const { hbId } = req._____;
    deleteHerb(_____);
    res.status(200).json({ message: '[INFO] Deleted herb successfully.' });
});

async function _____(){
    const result = [];
    const hbsRef = db.collection('_____');
    const docRef = await hbsRef._____();
    docRef.forEach(doc => {
       result.push({
        id: doc.id,
        ..._____
       });
    });
    return _____.stringify(_____);
}

app.get('_____', (req, res) => {
    res.set('Content-type', 'application/json');
    fetchHerb().then((jsonData) => {
        res.send(_____);
    }).catch((error) => {
        res.send(error);
    });
});

async function fetchHerbById(_____){
    const result = [];
    const hbRef = db.collection('_____')
                     .where('hbId', '==', hbId);
    const docRef = await hbRef.get();
    docRef.forEach(doc => {
       result.push({
        id: doc.id,
        ...doc.data()
       });
    });
    return result;
}

app.get('_____', (req, res) => {
    const { hbId } = req.params;
    res.set('Content-type', 'application/json');
    _____(hbId).then((_____) => {
        res.send(jsonData[0]);
    }).catch((error) => {
        res.send(error);
    });
});

async function _____(hbId, hbData){
    const docRef = db.collection('_____').doc(_____);
    await docRef._____(_____);
    console.log('Herb updated!');
}

app.post('_____', (req, res) => {
    const { hbId, _____, ..., _____ } = req.body;
    updateHerb(_____, { hbName, hbDesc, hbCate, hbProp, hbSupp });
    res.status(200).json({ message: '[INFO] Herb updated successfully.'});
});
