// import './utils/supportJavaScript.js';
// import './learn/vanilla.script.js';
// import './learn/likereact.script.js';
import './learn/react.script.js';


// import { createElement as h, render } from './likeReact/index.js';

// const app = h('div', {
//   className: 'app'
// }, h('h1', null, 'Hello Virtual DOM'));

// render(app, document.getElementById('root'));

// console.log(app);

// 명령형 프로그래밍
// const root = document.getElementById('root');
// const headline = root.querySelector('h1');

// document.addEventListener('click', () => {
//   headline.textContent = 'update headline content';
// });

// React가 제공
// 선언형 프로그래밍

// 범쌤 JavaScript
// 바닐라 프로젝트 (명령형 프로그래밍)
// import { createElement, state, render, update } from './vanilla.script.js';

// const app = createElement(
//   'section', 
//   {
//     'class': 'app',
//     'aria-label': 'Like React App'
//   }, 
//   createElement('h1', {}, 'hello App'),
//   createElement('p', {}, 'blab blab blab'),
//   createElement('ul', {}, 
//     createElement('li', {}, 'item 1'),
//     createElement('li', {}, 'item 2'),
//     createElement('li', {}, 'item 3'),
//   ),
// );

// document.getElementById('root').append(app);

// // console.log(state);

// // render(state);

// document.addEventListener('click', () => {
//   update({
//     subjects: 'React는 선언형 프로그래밍 방식을 사용합니다.'
//   });

//   // console.log(state);
// });

// console.log('React 개발 시작하기! 😊');