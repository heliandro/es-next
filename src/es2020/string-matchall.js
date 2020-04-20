/*
* string matchall - is a new string method that allows you to apply a regular expression to a string and gives you all
* the information for each individual match, including captured groups.
*
* The matchAll method returns an iterate.
* */

const text = 'Three Most Popular Programming Languages to Learn in 2020: JavaScript/Brendan Eich, Java/James Gosling and Python/Guido Rossum.';
const regex = /(,|\sand\s)?(?<language>[A-z]+)\/(?<creator>[A-z]+\s[A-z]+)/g;

// matchAll returns an object iterator
console.info(text.matchAll(regex));

for (const match of text.matchAll(regex)) {
    console.info(`Language: ${ match.groups.language } | Creator: ${match.groups.creator}`);
}
