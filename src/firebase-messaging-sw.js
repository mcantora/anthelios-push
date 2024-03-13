importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyApTkEUlCPLmxSbX0i3shEKzg_5GoZ3EQE",
  authDomain: "anthelios-league-cde14.firebaseapp.com",
  projectId: "anthelios-league-cde14",
  storageBucket: "anthelios-league-cde14.appspot.com",
  messagingSenderId: "118900342700",
  appId: "1:118900342700:web:11a0a76c4c336a41544409",
  databaseURL: "https://anthelios-test-notifications.firebaseio.com",
});
const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
});

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
