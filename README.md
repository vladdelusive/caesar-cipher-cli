# caesar-cipher-cli
## Task 1. Caesar cipher CLI tool (Rsschool)

**Implemented CLI tool that encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

CLI tool accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

Usage example:

$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
$ node my_caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt
input.txt This is secret. Message about "_" symbol!

**Usage example:**

```bash
$ node src/root -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node src/root --action encode --shift 7 --input plain.txt --output encoded.txt
```

```bash
$ node src/root --action decode --shift 7 --input decoded.txt --output plain.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
