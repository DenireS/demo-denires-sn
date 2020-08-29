import React, {useState} from 'react'
import s from './Paginator.module.css'
import classNames from 'classnames'

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    portionSize: number
}


export const Paginator: React.FC<PropsType> = ({
                                                   totalItemsCount,
                                                   pageSize,
                                                   currentPage,
                                                   onPageChanged,
                                                   portionSize
                                               }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <div className={s.prevBtn} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}/>}


            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => (
                    <span
                        className={classNames(s.pages, {[s.selectedPage]: currentPage === p})}
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p);
                        }}>{p}</span>
                ))
            }

            {portionNumber < portionCount &&
            <div className={s.nextBtn} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}/>}
        </div>
    );
};