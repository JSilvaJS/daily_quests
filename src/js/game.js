	import $ from 'jquery';
	import storyline from './storyline';

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
