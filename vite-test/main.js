import confettiModule from "canvas-confetti";
confettiModule();

import './style.scss'

import {setupCounter} from "./counter.js";
setupCounter(document.querySelector('button'))