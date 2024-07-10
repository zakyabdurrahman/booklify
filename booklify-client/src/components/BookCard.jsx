export default function BookCard({book}) {
    return (
        <>
            <div className="flex justify-start w-[550px] my-4">
                {book.imageLinks && (
                    <img src={book.imageLinks.thumbnail} alt="" />
                )}
                
                <div className="flex flex-col" >
                    <p className="font-bold text-lg ml-4">{book.title}</p>
                    <p className="ml-4">{`By ${book.authors}`}</p>
                </div>
                
            </div>
            <div className="flex justify-center">
                <div className="divider w-[550px]"></div>
            </div>
            
        </>
        
    )
}