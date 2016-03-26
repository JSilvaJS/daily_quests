// Javascript Entry Point 

import $ from 'jquery';
import storyline from './storyline';
import Game from './game';

var game = new Game(storyline);
game.start();