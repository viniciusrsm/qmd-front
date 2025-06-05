'use client'

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Debt } from "@/types/types"

const data: Debt[] = [
  { 
    id: "1", 
    debtorName: "João Silva", 
    value: 1200.50, 
    status: "pending", 
    date: "2025-05-15",
    description: "Empréstimo"
  },
  { 
    id: "2", 
    debtorName: "Maria Souza", 
    value: 850.75, 
    status: "paid", 
    date: "2025-05-10",
    description: "Compra parcelada"
  },
  { 
    id: "3", 
    debtorName: "Carlos Ferreira", 
    value: 3500.00, 
    status: "pending", 
    date: "2025-05-05",
    description: "Empréstimo para negócio"
  },
  { 
    id: "4", 
    debtorName: "Ana Oliveira", 
    value: 450.25, 
    status: "paid", 
    date: "2025-04-28",
    description: "Pagamento de serviço"
  },
  { 
    id: "5", 
    debtorName: "Pedro Santos", 
    value: 1750.00, 
    status: "pending", 
    date: "2025-04-20",
    description: "Empréstimo pessoal"
  },
  { 
    id: "6", 
    debtorName: "Lucia Gomes", 
    value: 950.00, 
    status: "pending", 
    date: "2025-04-15",
    description: "Compra de material"
  },
  { 
    id: "7", 
    debtorName: "Roberto Alves", 
    value: 1100.00, 
    status: "paid", 
    date: "2025-04-10",
    description: "Adiantamento"
  },
  { 
    id: "8", 
    debtorName: "Julia Lima", 
    value: 600.00, 
    status: "pending", 
    date: "2025-04-05",
    description: "Pagamento de serviço"
  },
  { 
    id: "9", 
    debtorName: "Fernando Costa", 
    value: 800.00, 
    status: "pending", 
    date: "2025-03-30",
    description: "Material de construção"
  },
  { 
    id: "10", 
    debtorName: "Isabela Martins", 
    value: 700.00, 
    status: "paid", 
    date: "2025-03-25",
    description: "Conserto de carro"
  },
]

export const columns: ColumnDef<Debt>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },  {
    accessorKey: "debtorName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-left w-full justify-start px-0!"
        >
          Nome do Devedor
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="">{row.getValue("debtorName")}</div>,
  },{
    accessorKey: "value",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left w-full justify-start px-0!"
      >
        Valor
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("value"))
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left w-full justify-start px-0!"
      >
        Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <div className="flex justify-start">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "pending" 
              ? "bg-yellow-100 text-yellow-800" 
              : "bg-green-100 text-green-800"
          }`}>
            {status === "pending" ? "Pendente" : "Pago"}
          </div>
        </div>
      )
    },
  },  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left w-full justify-start px-0!"
      >
        Data
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"))
      const formatted = new Intl.DateTimeFormat("pt-BR").format(date)
      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-left w-full justify-start px-0!"
      >
        Descrição
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
  },
]

export function FilterableDebtTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})
  const [tableData, setTableData] = useState<Debt[]>([])

  useEffect(() => {
    setTableData(data)
  }, [])

  const table = useReactTable({
    data: tableData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  })
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Registro de Dívidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center gap-2 py-4">
          <div className="flex flex-1 items-center space-x-2">
            <Input
              placeholder="Filtrar por nome..."
              value={(table.getColumn("debtorName")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("debtorName")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="min-w-[150px]">
                  {table.getColumn("status")?.getFilterValue() 
                    ? table.getColumn("status")?.getFilterValue() === "pending" 
                      ? "Pendente" 
                      : "Pago" 
                    : "Status: Todos"}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuCheckboxItem
                  checked={!table.getColumn("status")?.getFilterValue()}
                  onCheckedChange={() => table.getColumn("status")?.setFilterValue("")}
                >
                  Todos
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={table.getColumn("status")?.getFilterValue() === "pending"}
                  onCheckedChange={() => table.getColumn("status")?.setFilterValue("pending")}
                >
                  Pendente
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={table.getColumn("status")?.getFilterValue() === "paid"}
                  onCheckedChange={() => table.getColumn("status")?.setFilterValue("paid")}
                >
                  Pago
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="text-left">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-left">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    Nenhum resultado encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} de{" "}
            {table.getFilteredRowModel().rows.length} linha(s) selecionada(s).
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Próxima
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
