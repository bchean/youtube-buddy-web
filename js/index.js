(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    ListOfPingStat = require('prod-components').ListOfPingStat;

var MS_PER_DAY = 24 * 60 * 60 * 1000;
var now_ms = Date.now();
var oneDayAgo = new Date(now_ms - MS_PER_DAY).toISOString();
var oneWeekAgo = new Date(now_ms - 7 * MS_PER_DAY).toISOString();

var REST_ENDPOINT = 'https://youtube-buddy.herokuapp.com/api/pings';

ReactDOM.render(React.createElement(ListOfPingStat, { restEndpoint: REST_ENDPOINT,
    sinceDateTime: oneDayAgo,
    numPingsUpperBound: 800 }), document.getElementById('pings-last-24-hrs'));

ReactDOM.render(React.createElement(ListOfPingStat, { restEndpoint: REST_ENDPOINT,
    sinceDateTime: oneWeekAgo,
    numPingsUpperBound: 5000 }), document.getElementById('pings-last-7-days'));

},{"prod-components":"prod-components","react":"react","react-dom":"react-dom"}]},{},[1]);
