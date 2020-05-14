/* eslint-disable no-undef */
import {calcTime} from 'src/js/models/Recipe';

const ingredients = [
    "1-1/3 cup Shortening (may Substitute Butter)",
    "1-1/2 cup Sugar",
    "1 teaspoon Orange Zest",
    "1 teaspoon Vanilla"]

test('Calculate time for recipe', () => {

	expect(calcTime()).toBe('123');
});