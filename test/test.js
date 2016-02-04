import chai from 'chai';
import hrrs from '../index.js';

chai.should();

describe('human readable random string', ()=> {

    it('should return a string of the given length', ()=>{
        const length = 0 | (Math.random() * 1e3);
        hrrs(length).length.should.eql(length);
    });

    it('should not return the same string twice (hopefully - this might actually happen some day :p)', ()=>{
        const first = hrrs(30);
        const second = hrrs(30);
        first.should.not.eql(second);
    });

    it('should randomly start with a vowel or consonant', ()=>{
        // 50 should be enough coin flips
        const result = new Array(50)
            .join('.')
            .split('.')
            .map(hrrs.bind(null, 1)).reduce((collection, hrrs)=>{
                const isVowel = /^[aeiou]$/.test(hrrs);
                collection[isVowel] += 1;
                return collection;
            }, {false: 0, true: 0});

        result.false.should.be.greaterThan(0);
        result.true.should.be.greaterThan(0);
    });
});
