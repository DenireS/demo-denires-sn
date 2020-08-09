import React, {useEffect, useState} from 'react'
import styles from './Paginator.module.css'
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
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev page</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => (
                    <span
                        className={classNames(styles.pages, {[styles.selectedPage]: currentPage === p})}
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p);
                        }}>{p}</span>
                ))
            }

            {portionNumber < portionCount &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next page</button>}
        </div>
    );
};

//className={styles.pages && (currentPage === p ? styles.selectedPage : styles.notSelectedPage)}