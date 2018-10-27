import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {


  dishes: Dish[] = [
    {
      name: 'Apple',
      image: '/assets/images/apple.png',
      category: 'fruits',
      label: 'Hot',
      price: '0.99',
      // tslint:disable-next-line:max-line-length
      description: 'Healthy Green Apples'
    },
    {
      name: 'Avocado',
      image: '/assets/images/avocado.png',
      category: 'fruits',
      label: '',
      price: '1.99',
      description: 'Healthy Tropical Avocado'
    },
    {
      name: 'Chinese Cabbage',
      image: '/assets/images/cabbage.png',
      category: 'vegetables',
      label: 'New',
      price: '0.55',
      description: 'Fresh green organic Chinese Cabbage'
    },

    {
      name: 'Grape',
      image: '/assets/images/grape.png',
      category: 'fruits',
      label: '',
      price: '2.99',
      description: 'A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis'
    },

    {
      name: 'Coconut',
      image: '/assets/images/coconut.png',
      category: 'fruits',
      label: '',
      price: '2.99',
      description: 'Delicious seed, or the fruit, which botanically is a drupe, not a nut'
    },

    {
      name: 'Kiwi',
      image: '/assets/images/kiwi.png',
      category: 'fruits',
      label: '',
      price: '2.99',
      description: 'Delicious eco friendly fruit for your family'
    },

    {
      name: 'Lettuce',
      image: '/assets/images/lettuce.png',
      category: 'vegetables',
      label: '',
      price: '0.69',
      description: 'Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled'
    },

    {
      name: 'Lemon',
      image: '/assets/images/lemon.png',
      category: 'fruits',
      label: '',
      price: '1.99',
      description: 'The distinctive sour taste of lemon juice makes it a key ingredient in drinks and foods such as lemonade and lemon meringue pie'
    },

    {
      name: 'Lime',
      image: '/assets/images/lime.png',
      category: 'fruits',
      label: '',
      price: '3.99',
      description: 'Lime is a hybrid citrus fruit, which is typically round, green in color contains acidic juice vesicles'
    },

    {
      name: 'Melon',
      image: '/assets/images/melon.png',
      category: 'fruits',
      label: '',
      price: '2.99',
      description: 'Melon is any of various plants of the family Cucurbitaceae with sweet edible, fleshy fruit'
    },


    {
      name: 'Onion',
      image: '/assets/images/onion.png',
      category: 'vegetables',
      label: '',
      price: '2.99',
      description: 'Bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium'
    },
    {
      name: 'Orange',
      image: '/assets/images/orange.png',
      category: 'fruits',
      label: '',
      price: '1.29',
      description: 'Orange (fruit), the fruit of the tree species Citrus sinensis'
    },
    {
      name: 'Pineapple',
      image: '/assets/images/pineapple.png',
      category: 'fruits',
      label: '',
      price: '2.99',
      description: 'Tropical plant with an edible multiple fruit consisting of coalesced berries'
    },
    {
      name: 'Potato',
      image: '/assets/images/potato.png',
      category: 'vegetables',
      label: '',
      price: '0.99',
      description: 'The potato is a starchy, tuberous crop from the perennial nightshade '
    },
    {
      name: 'Raspberry',
      image: '/assets/images/raspberry.png',
      category: 'berry',
      label: '',
      price: '5.99',
      description: 'Edible fruit of a multitude of plant species in the genus'
    },
    {
      name: 'Strawberry',
      image: '/assets/images/strawberry.png',
      category: 'berry',
      label: '',
      price: '4.99',
      description: 'The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness'
    },
    {
      name: 'Tomato',
      image: '/assets/images/tomato.png',
      category: 'berry',
      label: '',
      price: '2.19',
      description: 'The tomato is the edible, often red, berry of the nightshade'
    },


  ];


  constructor() {
  }

  ngOnInit() {
  }

}