import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchBooks } from "../features/booksSlice";

export default function HomePage() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const books = useSelector((state) => state.books.books);

    useEffect(() => {
        dispatch(fetchBooks(title))
    }, [title])

    return (
        <>
            <h1>Hello Dunia</h1>
            {books.map((item) => {
                return <p>{item.title}</p>
            })}
        </>
    )
}