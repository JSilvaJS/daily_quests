# Synopsis
This solo project is a “choose your own adventure” style game, about a superhero programmer walking home from work. Built with JavaScript, jQuery, and in less than twenty-four hours, this game can be considered a model as to how to make online comic books more interactive. 
# Code Example 
``` javascript
export default class Game {
		constructor(storyline) {
			this.storyline = storyline;
			this.paths = [];
		}

		slide(story) {
			var buttons = story.paths.map(path => {
				return `<li><button data-scenario="${path.scenario}">${path.label}</button></li>`;
			})

			return ` 
			<h4 class="bot_font">${story.message}</h4>
			<div>${story.image}</div>
			<ul>${buttons.join('')}</ul>
			`
		}

		loadStoryline(storylineName) {
			this.paths.push(storylineName);
			var scenario = this.storyline[storylineName];
			var storylineSlide = this.slide(scenario);
			$('.bottom_story').html(storylineSlide);
		}

		start() {
			this.loadStoryline('start_storyline'); 

			$('.bottom_story').on('click', 'button', (event) => {
				var scenario = $(event.target).data('scenario');
				this.loadStoryline(scenario);
			});
		}
	}
```
# Motivation
	To create a minimilist style game with a simple functionality. 
	
# Deployed Code
[Check it out!]( http://dailyquests.surge.sh)
