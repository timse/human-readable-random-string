
# Human Readable Random String

Creates a random (as far as Math.random is random) string that is readable for humans.
This can be used to generate passwords or usernames that can be remembered less hard (wouldn't say its easy :)).

# how do i use it?

As `human-readable-random-string` is UMD you can either require it or load it directly into your browser

## require/import

```javascript
import hrrs from 'human-readable-random-string';

hrrs(20);
//=> "hasewupimilovobaheze"
```

## global in browser

```javascript
<script src="some/path/to/hrrs.js"></script>
<script>
const string = hrrs(20);
</script>
```

# parameters

`hrrs` accepts one param `length` which determines the length of the string you want it to return. Thats about it :)



