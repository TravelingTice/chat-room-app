// Make connection
const socket = io.connect('http://localhost:4000');

// query dom

const btn = document.getElementById('send-button');
const username = document.getElementById('username');
const message = document.getElementById('message');
const outputBox = document.getElementById('output');