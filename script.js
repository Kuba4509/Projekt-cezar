 function chooseletter(letter) {
    switch (letter.toLowerCase()) {
        case 'a':
            return 1;
        case 'ą':
            return 2;
        case 'b':
            return 3;
        case 'c':
            return 4;
        case 'ć':
            return 5;
        case 'd':
            return 6;
        case 'e':
            return 7;
        case 'ę':
            return 8;
        case 'f':
            return 9;
        case 'g':
            return 10;
        case 'h':
            return 11;
        case 'i':
            return 12;
        case 'j':
            return 13;
        case 'k':
            return 14;
        case 'l':
            return 15;
        case 'ł':
            return 16;
        case 'm':
            return 17;
        case 'n':
            return 18;
        case 'ń':
            return 19;
        case 'o':
            return 20;
        case 'ó':
            return 21;
        case 'p':
            return 22;
        case 'q':
            return 23;
        case 'r':
            return 24;
        case 's':
            return 25;
        case 'ś':
            return 26;
        case 't':
            return 27;
        case 'u':
            return 28;
        case 'v':
            return 29;
        case 'w':
            return 30;
        case 'x':
            return 31;
        case 'y':
            return 32;
        case 'z':
            return 33;
        case 'ź':
            return 34;
        case 'ż':
            return 35;
        default:
            return -1;
    }
}

function Cezar(text, move) {
    var EncryptedText = '';

    for (var i = 0; i < text.length; i++) {
        var CurrentLetter = text[i];
        var number = chooseletter(CurrentLetter);

        if (number !== -1) {
            var EncryptedNumber = (number + move) % 35;
            if (EncryptedNumber <= 0) {
                EncryptedNumber += 35;
            }

            var EncryptedLetter = takeletter(EncryptedNumber);
            EncryptedText += EncryptedLetter;
        } else {
            EncryptedText += CurrentLetter;
        }
    }

    return EncryptedText;
}

function takeletter(number) {
    switch (number) {
        case 1:
            return 'a';
        case 2:
            return 'ą';
        case 3:
            return 'b';
        case 4:
            return 'c';
        case 5:
            return 'ć';
        case 6:
            return 'd';
        case 7:
            return 'e';
        case 8:
            return 'ę';
        case 9:
            return 'f';
        case 10:
            return 'g';
        case 11:
            return 'h';
        case 12:
            return 'i';
        case 13:
            return 'j';
        case 14:
            return 'k';
        case 15:
            return 'l';
        case 16:
            return 'ł';
        case 17:
            return 'm';
        case 18:
            return 'n';
        case 19:
            return 'ń';
        case 20:
            return 'o';
        case 21:
            return 'ó';
        case 22:
            return 'p';
        case 23:
            return 'q';
        case 24:
            return 'r';
        case 25:
            return 's';
        case 26:
            return 'ś';
        case 27:
            return 't';
        case 28:
            return 'u';
        case 29:
            return 'v';
        case 30:
            return 'w';
        case 31:
            return 'x';
        case 32:
            return 'y';
        case 33:
            return 'z';
        case 34:
            return 'ź';
        case 35:
            return 'ż';
        default:
            return '';
    }
}

function zaszyfruj() {
    var TextToEncrypt = document.getElementById("text").value;
    var CezarCode = parseInt(document.getElementById("move").value);
    var EncryptedText = Cezar(TextToEncrypt.toLowerCase(), CezarCode);
    document.getElementById("output1").innerText = "Zaszyfrowany tekst: " + EncryptedText;
}

function rozszyfruj() {
    var TextToDecode = document.getElementById("text").value;
    var CezarCode = parseInt(document.getElementById("move").value);
    var DecodedText = Cezar(TextToDecode.toLowerCase(), -CezarCode);
    document.getElementById("output2").innerText = "Rozszyfrowany tekst: " + DecodedText;
}