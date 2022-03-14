import { DOTS, usePagination } from "../Hooks/usePagination"
import { css, cx } from "@emotion/css"
import { PaginationProps } from "../../types/types"

export function Pagination({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
}: PaginationProps) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (!paginationRange) return null
  if (currentPage === 0 || paginationRange?.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange?.[paginationRange?.length - 1] || 1
  const disabledLeftArrow = currentPage === 1
  const disabledRightArrow = currentPage === lastPage
  const disabledArrow = (disabled: boolean) => {
    return disabled ? "disabled" : ""
  }
  return (
    <ul className={styles.paginationContainer}>
      <li
        className={cx(styles.paginationItem, disabledArrow(disabledLeftArrow))}
        onClick={disabledLeftArrow ? undefined : onPrevious}
      >
        <div className={cx(styles.arrow, "left")} />
      </li>
      {paginationRange?.map((pageNumber: number | string, index: number) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className="pagination-item dots">
              &#8230;
            </li>
          )
        }
        return (
          <li
            key={index}
            className={cx(
              styles.paginationItem,
              checkIfSelected(pageNumber, currentPage)
            )}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        )
      })}
      <li
        className={cx(styles.paginationItem, disabledArrow(disabledRightArrow))}
        onClick={disabledRightArrow ? undefined : onNext}
      >
        <div className={cx(styles.arrow, "right")} />
      </li>
    </ul>
  )
}

const checkIfSelected = (pageNumber: number | string, currentPage: number) => {
  return pageNumber === currentPage ? "selected" : ""
}

const styles = {
  paginationContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
  `,
  paginationItem: css`
    display: flex;
    align-items: center;
    padding: 0 12px;
    margin: auto 4px;
    height: 32px;
    min-width: 32px;
    color: var(--matteblack);
    text-align: center;
    box-sizing: border-box;
    letter-spacing: 0.1em;
    border-radius: 16px;
    line-height: 1.8;
    font-size: 16px;
    :hover {
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    &.dots:hover {
      background-color: transparent;
      cursor: pointer;
    }

    &.selected {
      background-color: rgba(0, 0, 0, 0.08);
    }
    &.disabled {
      pointer-events: none;
      cursor: default;
      opacity: 0.5;
      background-color: var(--background);
    }
  `,
  arrow: css`
    position: relative;
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);

    &.left {
      transform: rotate(-135deg);
    }

    &.right {
      transform: rotate(45deg);
    }

    &.disabled {
      pointer-events: none;
      cursor: default;
      opacity: 0.5;
      background-color: var(--background);
    }

    .arrow::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }

    :hover {
      cursor: default;
      background-color: transparent;
    }
  `,
}
