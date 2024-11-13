import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { isString } from 'lodash-es'
import { StyleSheet, View } from 'react-native'
import TextS18 from '../../common/components/TextS18'
import { colorTypeToDefMap } from '../../common/repository'
import { getCellContainerProps } from '../repository'

const cellContainerStyles = StyleSheet.create({
  container: {
    flexShrink: 0,
    flexGrow: 1,
    padding: 16,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgb(219 219 219)'
  },
  last: {
    borderRightWidth: 0,
    borderBottomWidth: 0
  }
})

function CellContainer({ children, style, size, isLastCol = false, ...rest }) {
  return (
    <View
      style={[
        cellContainerStyles.container,
        isLastCol && cellContainerStyles.last,
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

const headerCellContainerStyles = StyleSheet.create({
  container: {
    backgroundColor: colorTypeToDefMap.green10
  }
})

function HeaderCellContainer({ children, style, ...rest }) {
  return (
    <CellContainer
      {...rest}
      style={[headerCellContainerStyles.container, style]}
    >
      {children}
    </CellContainer>
  )
}

function DefaultHeaderCell(context) {
  const {
    columb: {
      columnDef: { header }
    }
  } = context
  return (
    <HeaderCellContainer {...getCellContainerProps(context)}>
      <CellText>{header}</CellText>
    </HeaderCellContainer>
  )
}

const dataCellContainerStyles = StyleSheet.create({
  container: {
    backgroundColor: colorTypeToDefMap.light
  }
})

function DataCellContainer({ children, ...rest }) {
  return (
    <CellContainer {...rest} style={dataCellContainerStyles.container}>
      {children}
    </CellContainer>
  )
}

function DefaultDataCell(context) {
  const { getValue } = context
  return (
    <DataCellContainer {...getCellContainerProps(context)}>
      <CellText>{getValue()}</CellText>
    </DataCellContainer>
  )
}

const defaultColumn = {
  cell: DefaultDataCell
}

const tableStyles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row'
  },
  bodyRow: {
    flexDirection: 'row'
  }
})

const Table = function Table({ data, columns }) {
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
                <DefaultHeaderCell key={header.id} {...header.getContext()} />
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
}

Table.HeaderCellContainer = HeaderCellContainer

Table.DataCellContainer = DataCellContainer

Table.CellContainer = CellContainer

Table.CellText = CellText

Table.DefaultHeaderCell = DefaultHeaderCell

Table.DefaultDataCell = DefaultDataCell

export default Table
