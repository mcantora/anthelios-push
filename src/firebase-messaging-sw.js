// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyAn_eNxjBILtjtjt7kqWPdCMNvnLAT8KcM",
//   authDomain: "anthelios-test-notifications.firebaseapp.com",
//   projectId: "anthelios-test-notifications",
//   storageBucket: "anthelios-test-notifications.appspot.com",
//   messagingSenderId: "89838469457",
//   appId: "1:89838469457:web:4f8c6cd1f2389ebf301370",
//   databaseURL: "https://anthelios-test-notifications.firebaseio.com",
// });

// export const messaging = getMessaging(firebaseApp);

// import { onBackgroundMessage } from "firebase/messaging/sw";

// onBackgroundMessage(messaging, (payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//     body: "Background Message body.",
//     icon: "/firebase-logo.png",
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js"
);

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

messaging.onBackgroundMessage((payload) => {
  const { notification } = payload;
  // Customize notification here
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
