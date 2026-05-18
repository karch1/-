importScripts('https://www.gstatic.com/firebasejs/12.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.13.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBU3jeOqj_FCBXeO2ghh5XlHBrQbUjNaiA",
    authDomain: "ahn-jin-zero.firebaseapp.com",
    projectId: "ahn-jin-zero",
    storageBucket: "ahn-jin-zero.firebasestorage.app",
    messagingSenderId: "55250475892",
    appId: "1:55250475892:web:c87555da879be518faaa21",
    measurementId: "G-V2TEL4TNPJ"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

    console.log("백그라운드 알림", payload);

    const title =
        payload.notification?.title ||
        payload.data?.title ||
        "알림";

    const body =
        payload.notification?.body ||
        payload.data?.body ||
        "";

    self.registration.showNotification(title, {
        body,
        icon: "./icon-192.png"
    });
});
