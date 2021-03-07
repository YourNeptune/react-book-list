import React from 'react'

const Book = ({img, title, author, children}) => {
    return (
        <div className='book'>
            <img src={img} alt=''/>
            <h2>{title}</h2>
            <h4>{author}</h4>
            {children}
        </div>
    )
}

export default Book
