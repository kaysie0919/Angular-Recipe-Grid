import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";


@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    getRecipes(): Recipe[] {
        return [
            {
                name:'Ham and Gruyère Scones',
                ingredients: '2 cups all-purpose flour, 1 tablespoon white sugar, 2 teaspoons baking powder, 1 teaspoon salt, 3/4 cup butter, 3/4 cup cooked ham, cut into 1/4-inch dice, 3/4 cup grated Gruyère cheese, grated using large holes on grater, 1/2 cup heavy cream, or more as needed, 1 large egg, beaten, 1 teaspoon water, 1 pinch salt',
                imageUrl: 'https://www.allrecipes.com/thmb/qiULhC7V5OND4NIh_s4t1R8-Y0M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8747672_Ham-and-Gruyere-Scones_Brenda-Venable_4x3-0079f287311d415eaf0bec0e53aa9cb5.jpg'

            },
            {
                name:'Pear and Almond French Toast Casserole',
                ingredients: '¼ cup butter, cut into 1/4-inch cubes, ½ cup brown sugar, 1 (29 ounce) can pear halves, cut lengthwise into 4 slices, 1 (1 pound) loaf sourdough bread, cut into 1-inch cubes, 2 ½ cups eggs, 1 ½ cups milk, 2 tablespoons white sugar, 1 teaspoon vanilla extract, ½ teaspoon almond extract, ¼ cup sliced almonds',
                imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8102818.jpg&q=60&c=sc&poi=auto&orient=true&h=512'

            },
            {
                name:'Fluffy Maple Buttermilk Pancakes',
                ingredients: '2 cups all-purpose flour, ¼ cup white sugar, 2 teaspoons baking powder, 1 teaspoon baking soda, ,1 teaspoon salt, 2 cups buttermilk, 2 large eggs, ¼ cup maple syrup, ¼ cup unsalted butter, melted, cooking spray',
                imageUrl: 'https://www.allrecipes.com/thmb/KadLCMHHyIPkZ6O7K1isBhIGYqs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9025570-859bf9143afa41cd8a8b4a8021a80369.jpg'

            },
            {
                name:'Decadent Pumpkin Muffins',
                ingredients: '3 ½ cups all-purpose flour, 2 teaspoons baking soda, 2 teaspoons salt, 1 teaspoon baking powder, 1 teaspoon ground nutmeg, 1 teaspoon ground allspice, 1 ½ teaspoons ground cinnamon, ½ teaspoon ground cloves, 2 cups canned pumpkin puree, 1 ½ cups white sugar, ½ cup light brown sugar',
                imageUrl: 'https://www.allrecipes.com/thmb/7CPrBNPYeUuHlHOyfK0Z8SukoC8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5901868-bc641d69d6d641aeaee0d70660e23056.jpg'

            },
            {
                name:'Apple Cinnamon Bread',
                ingredients: '1 cup white sugar, ½ cup unsalted butter, 2 large eggs, 2 cups all-purpose flour, 1 teaspoon baking soda, 1 teaspoon ground cinnamon, ½ teaspoon salt, ½ teaspoon ground cloves,2 apples, peeled, cored, and chopped',
                imageUrl: 'https://www.allrecipes.com/thmb/ybPoIe1S7mWYpnGK3xZZgXYpWN0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/72575-apple-cinnamon-bread-D-vyne-confections-4x3-4fdd6b6cf78848e18fa5d77f8213ca0e.jpg'

            },
            {
                name:'Louisiana Sweet Potato Pancakes',
                ingredients: '¾ pound sweet potatoes, 1 ½ cups all-purpose flour, 3 ½ teaspoons baking powder, 1 teaspoon salt, ½ teaspoon ground nutmeg, 1 ½ cups milk, ¼ cup unsalted butter, melted, 2 large eggs, beaten',
                imageUrl: 'https://www.allrecipes.com/thmb/MFPvlcgc1TFPbPi9heV-fopo3Xg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/257720-8c31d41881f1433d9904b444293b1b7a.jpg'

            },
            {
                name:'Chef Johns Sweet Potato Biscuits',
                ingredients: '1 large orange-fleshed sweet potato, peeled, 1 teaspoon salt, , 1 tablespoon brown sugar, ½ cup buttermilk, 3 ¼ cups self-rising flour, 1 ½ sticks unsalted butter, frozen, 1 tablespoon melted butter',
                imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4597581.jpg&q=60&c=sc&poi=auto&orient=true&h=512'

            },
        ];
    }
}