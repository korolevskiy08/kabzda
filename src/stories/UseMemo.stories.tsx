import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DificalCointingExemple1 = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            result for a: {resultA}
        </div>
        <div>
            result for b: {resultB}
        </div>

    </>

}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((el, i) => <div key={i}>{el}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const newArray = useMemo(()=>{
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}



export const Likes = () => {
    const [counter, setCounter] = useState(0)
    const [book, setBooks] = useState(['React', 'HTML', 'CSS'])

    const newArray = useMemo(()=>{
        return book.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [book])


    const addBook = () => {
        const newBook = [...book, 'Angular' + new Date().getTime()]
        setBooks(newBook)
    }

    const memoizedAddBook = useMemo(()=> {
        return () => {
            const newBook = [...book, 'Angular' + new Date().getTime()]
            setBooks(newBook)
        }
    }, [book])

    const memoizedAddBook2 = useCallback(()=>{
        const newBook = [...book, 'Angular' + new Date().getTime()]
        setBooks(newBook)
    }, [book])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addBook}>add user</button>
        {counter}
        <Book
            // book={newArray}
            addBook={memoizedAddBook}/>
    </>
}

type BookSecretType = {
    // book: Array<string>;
    addBook: ()=>void }

const BooksSecret = (props:BookSecretType ) => {
    return <div>
        <button onClick={()=>props.addBook()}>add user</button>
        {
        // props.book.map((book, i) => <div key={i}>{book}</div>)
    }</div>
}

const Book = React.memo(BooksSecret)

