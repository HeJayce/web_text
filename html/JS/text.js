function endsWithVowel(str) {
    len = str.length-1;
    if (str[len]==='a'||str[len]==='e'||str[len]==='i'||str[len]==='o'||str[len]==='u')
        return true;
    if (str[len]==='A'||str[len]==='E'||str[len]==='I'||str[len]==='O'||str[len]==='U')
        return true;
    else{
        return false;
    }
}
console.log(endsWithVowel('gorilla'));