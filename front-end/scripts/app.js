/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// import React from 'react';
	// import ReactDOM from 'react-dom';
	// import {Layer, Rect, Stage, Group} from 'react-konva';
	//
	//
	// class MyRect extends React.Component {
	//   constructor(...args) {
	//     super(...args);
	//     this.state = {
	//       color: 'green'
	//     };
	//     this.handleClick = this.handleClick.bind(this);
	//   }
	//   handleClick() {
	//     this.setState({
	//       color: Konva.Util.getRandomColor()
	//     });
	//   }
	//   render() {
	//     return (
	//       <Rect
	//         x={10} y={10} width={50} height={50}
	//         fill={this.state.color}
	//         shadowBlur={10}
	//         onClick={this.handleClick}
	//       />
	//     );
	//   }
	// }
	//
	// function App() {
	//   // Stage - is a div wrapper
	//   // Layer - is a <canvas> element on the page
	//   // so you can use several canvases. It may help you to improve performance a lot.
	//   return (
	//     <Stage width={700} height={700}>
	//       <Layer>
	//         <MyRect/>
	//       </Layer>
	//     </Stage>
	//   );
	// }
	//
	//
	// ReactDOM.render(<App/>, document.getElementById('app'));

	let home = __webpack_require__(1);

	home('home ');


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function(message) {
	  alert(message);
	};

/***/ }
/******/ ]);