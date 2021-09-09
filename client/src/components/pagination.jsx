import { useSelector } from 'react-redux';
import Card from './card';
import { useEffect, useState } from 'react';

function PaginateVideogames() {
    const videogames = useSelector(state => state.videogames);
    const [currentPage, setCurrentPage] = useState(0);

    function nextPage() {
        if(videogames.length<= currentPage+15) {
            setCurrentPage(currentPage);
        }else setCurrentPage(currentPage+15)
    };
    function prevPage() {
        if(currentPage<16){
            setCurrentPage(0)
        }else setCurrentPage(currentPage-15)
    };
    function firstPage () {
        setCurrentPage(0)
    };
    function lastPage() {
        setCurrentPage(videogames.length -15)
    };
    
    useEffect(()=>{
        firstPage()
    },[videogames]);
    var pagination = videogames.slice(currentPage, currentPage +15);
    const pageNumber = Math.ceil(currentPage/15) +1
    return <> 
        {pagination ? (
            <div>
                <label > page:{pageNumber} </label>
                <button className='button' onClick={firstPage} > {"<<"} </button>
                <button className='button' onClick={prevPage} > {"<"}   </button>
                <button className='button' onClick={nextPage} > {">"}   </button>
                <button className='button' onClick={lastPage} > {">>"}  </button>
            </div>
        ): null}
        <div className='cardBox' >
        {pagination.map((v)=>{
            return<Card
            key= {v.ID}
            videogame= {v}
            />
        })}
        </div>
    </>
}

export default PaginateVideogames