import { createColumnHelper } from '@tanstack/react-table'

export const getCellContainerProps = ({
  column: { getIsLastColumn, getSize }
}) => ({
  isLastCol: getIsLastColumn(),
  size: getSize()
})

export const columnHelper = createColumnHelper()

export const tableRepo = {
  columnHelper,
  getCellContainerProps
}
