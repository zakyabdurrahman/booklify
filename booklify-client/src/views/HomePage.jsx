import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { fetchBooks } from "../features/booksSlice";

export default function HomePage() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    useEffect(() => {
        dispatch(fetchBooks(title))
    }, [title])

    return (
        <>
            <h1>Hello Dunia</h1>
        </>
    )
}