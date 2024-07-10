import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchBooks } from "../features/booksSlice";
import BookCard from "../components/BookCard";

export default function HomePage() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const books = useSelector((state) => state.books.books);

    function search(e) {
        e.preventDefault();
        setTitle(e.target[0].value);
    }


    useEffect(() => {
        dispatch(fetchBooks(title))
    }, [title])

    return (
        <>
            <div className="w-screen flex flex-col items-center">
                <form className="flex mt-6 mb-6" onSubmit={search}>
                    <label className="input input-bordered flex items-center gap-2 mr-2">
                        <input type="text" className="grow" placeholder="Search book" />
                        
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                        </svg>
                    </label>
                    <button className="btn btn-primary">Search</button>
                </form>
                {books && books.map((item) => {
                    return (
                        <BookCard book={item}></BookCard>
                    )
                })}
                
            </div>
            
        </>
    )
}