const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Bannana, Kiwi';

for (const match of fruit.matchAll(regex)){
    console.log(match);
}