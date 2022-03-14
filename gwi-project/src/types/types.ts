import { ReactNode } from "react"

export type LayoutProps = {
  children: ReactNode
}

export type PaginationProps = {
  onPageChange: (page: number | string) => void
  totalCount: number
  siblingCount: number
  currentPage: number
  pageSize: number
}
