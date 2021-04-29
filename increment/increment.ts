function increment(num: number): number{
    return num+1
}

console.log(increment(1))

// type alias
type Messages = string[]

const showMessages = (msgs: Messages) => {
    msgs.forEach(msg => console.log(msg))
}

const forYou: Messages = ["Hi","This message","is","for you."]
showMessages(forYou)