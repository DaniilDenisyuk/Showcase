import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { isString } from 'lodash-es'
import { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { colorTypeToDefMap } from '../repository'
import TextS18 from './TextS18'

const cellContainerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexShrink: 0,
    flexGrow: 1,
    padding: 22,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgb(219 219 219)'
  },
  last: {
    borderRightWidth: 0,
    borderBottomWidth: 0
  }
})

function CellContainer({ children, style, size, isLast = false, ...rest }) {
  return (
    <View
      style={[
        cellContainerStyles.container,
        isLast && cellContainerStyles.last,
        size && {
          flexBasis: size
        },
        style
      ]}
      {...rest}
    >
      {children}
    </View>
  )
}

const cellTextStyles = StyleSheet.create({
  text: {
    fontWeight: 'medium'
  }
})

function CellText({ children, style, ...rest }) {
  return (
    <TextS18 style={[cellTextStyles.text, style]} {...rest}>
      {children}
    </TextS18>
  )
}

const headerCellStyles = StyleSheet.create({
  container: {
    backgroundColor: colorTypeToDefMap.green10
  }
})

function HeaderCell({ children, column: { getIsLastColumn, getSize } }) {
  return (
    <CellContainer
      isLast={getIsLastColumn()}
      style={headerCellStyles.container}
      size={getSize()}
    >
      <CellText>{children}</CellText>
    </CellContainer>
  )
}

const dataCellStyles = StyleSheet.create({
  container: {
    backgroundColor: colorTypeToDefMap.light
  }
})

function DataCell({ getValue, column: { getIsLastColumn, getSize } }) {
  return (
    <CellContainer
      isLast={getIsLastColumn()}
      size={getSize()}
      style={dataCellStyles.container}
    >
      <CellText>{getValue()}</CellText>
    </CellContainer>
  )
}

const defaultColumn = {
  cell: DataCell
}

const tableStyles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row'
  },
  bodyRow: {
    flexDirection: 'row'
  }
})

const Table = memo(function Table({ data, columns }) {
  const table = useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel()
  })
  return (
    <View style={tableStyles.table}>
      <View style={tableStyles.header}>
        {table.getHeaderGroups().map((headerGroup) => (
          <View key={headerGroup.id} style={tableStyles.headerRow}>
            {headerGroup.headers.map((header) => {
              header.isPlaceholder ? null : isString(
                  header.column.columnDef.header
                ) ? (
                <HeaderCell key={header.id} {...header.getContext()}>
                  {header.column.columnDef.header}
                </HeaderCell>
              ) : (
                flexRender(header.column.columnDef.header, {
                  ...header.getContext(),
                  key: header.id
                })
              )
            })}
          </View>
        ))}
      </View>
      <View style={tableStyles.body}>
        {table.getRowModel().rows.map((row) => (
          <View key={row.id} style={tableStyles.bodyRow}>
            {row.getVisibleCells().map((cell) =>
              flexRender(cell.column.columnDef.cell, {
                ...cell.getContext(),
                key: cell.id
              })
            )}
          </View>
        ))}
      </View>
    </View>
  )
})
Table.HeaderCell = HeaderCell

Table.DataCell = DataCell

Table.CellContainer = CellContainer

Table.CellText = CellText

export default Table
