import React, {useState, useEffect} from 'react'
import "./styles.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function Index({page, f_getQuery}) {

    const [vCurrentPage, setCurrentPage] = useState(page?.current_page)
    const [vTotalpage, setTotalpage] = useState(page?.total_page)
    function pageChange(type) {
        if(type == 'right')
        {
            if(vCurrentPage < vTotalpage)
            {
                setCurrentPage(vCurrentPage + 1)
                f_getQuery('currentPage', vCurrentPage + 1)
            }
        }
        if(type == 'left'){
            if(vCurrentPage != 1)
            {
                setCurrentPage(vCurrentPage - 1)
                f_getQuery('currentPage', vCurrentPage - 1)
            }
        }
    }

    useEffect(() => {
        setCurrentPage(page?.current_page)
        setTotalpage(page?.total_page)
    }, [page])

    return (
        <div className="list-table-paginate-container">
            <span className="paginate-item" onClick={() => pageChange('left')}>
                <AiOutlineLeft />
            </span>
            <span>
                {vCurrentPage} &#xa0; of &#xa0; {vTotalpage}
            </span>
            <span className="paginate-item" onClick={() => pageChange('right')}>
                <AiOutlineRight />
            </span>
        </div>
    )
}

export default Index
