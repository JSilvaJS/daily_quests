var start_storyline = {
	message: 'Oh no! An enemy of a much larger power level confronts you. <br> What do you do?',
	paths: [
	{label: 'Engage the enemy', scenario: 'knockback'},
	{label: 'Take a second to gather your thoughts', scenario: 'get_annihilated'}
	]
};

var get_annihilated = {
	message: 'You have been destroyed. Now there is no one left to defend the planet. Game Over.',
	paths: [
	{label: 'Try Again', scenario: 'start_storyline'}
	]
};

var knockback = { 
	message: 'You have knocked the enemy to the ground. You now have the advantage!',
	paths: [
	{label: 'Burst into laughter, assert your dominance, and begin to walk away', scenario: 'enrage_enemy'},
	{label: 'Leap into the air for an aerial assault', scenario: 'enemy_counters'}
	]
};

var enemy_counters = {
	message: 'The enemy counters your aerial assault. In less than a split second, you have been vaporized by an energy wave attack. <br> Evil Wins. You lose...',
	paths: [
	{label: 'Try Again', scenario: 'start_storyline'}
	]
};

var enrage_enemy = {
	message: 'The enemy is now blinded by rage and vows to hurt your closest loved ones. This displeases you. In one quick motion, you turn, face your enemy, and unleash the largest energy blast the world has ever seen. <br> The enemy has been evicerated. Good has triumphed... for now.',
	paths: [
	{label: 'Would you like to play again?', scenario: 'start_storyline'}
	]
};

export default {
	start_storyline,
	get_annihilated,
	knockback,
	enemy_counters,
	enrage_enemy
}
