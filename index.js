const wordPos = require('wordpos');
const request = require('request');


const wordpos = new wordPos();

const feature = (query) => {
    request({
        url: 'https://api.npms.io/v2/search?q=' + query,
        options: { json: true }
    }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        if (!err && res.statusCode === 200) {
            x = JSON.parse(body);
            const hitCount = x.total;
            if (hitCount > 0) {
                console.log(hitCount + ' some aids');
            } else {
                console.log(hitCount + 'no aids');
            }
        }
    })
};

hey = (query) => {
    wordpos.isNoun(query, (wasItANoun) => {
        if (!wasItANoun) {
            console.log('not a noun');
        } else {
            feature(query);
        }
    });
};

console.log(hey(process.argv[2]));

// disguss

