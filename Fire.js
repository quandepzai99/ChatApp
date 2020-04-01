import firebase from "firebase";

class Fire {
  constructor() {
    this.init();
    this.checkAuth()
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDixnzaR39cfMKzFKbfVo5gU5GYDi-Ci5U",
        authDomain: "chatapp-da648.firebaseapp.com",
        databaseURL: "https://chatapp-da648.firebaseio.com",
        projectId: "chatapp-da648",
        storageBucket: "chatapp-da648.appspot.com",
        messagingSenderId: "381271200045",
        appId: "1:381271200045:web:cc85609ba1295c3131c3a4",
        measurementId: "G-NH308YEYK5"
      });
    }
  };
  checkAuth = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user){
        firebase.auth().signInAnonymously();
      }
    })
  };
  send = messages => {
    messages.forEach(item => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user
      };
      this.db.push(message);
    })
  };
  parse = message => {
    const {user, text, timestamp} = message.val()
    const {key: _id} = message
    const createdAt = new Date(timestamp)

    return {
      _id,
      createdAt,
      text,
      user
    };
  };
  get = callback => {
    this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
  };
  off() {
    this.db.off();
  };
  get db() {
    return firebase.database().ref('messages')
  }
  get uid() {
    return(firebase.auth().currentUser || {}).uid
  }
}
export default new Fire();
