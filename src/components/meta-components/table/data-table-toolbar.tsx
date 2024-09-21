"use client";

import { FaCircleXmark } from "react-icons/fa6";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/meta-components/table/data-table-view-options";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { ComponentType } from "react";

interface FilterOption {
    label: string;
    value: string;
    icon?: ComponentType<{ className?: string | undefined }> | undefined;
}

export interface Filter {
    column_name: string;
    title: string;
    options: FilterOption[];
}

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
    filters: Filter[];
    search_column: string;
}

export function DataTableToolbar<TData>({ table, filters, search_column }: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                {search_column != "" && (
                    <Input
                        placeholder="Rechercher..."
                        value={(table.getColumn(search_column)?.getFilterValue() as string) ?? ""}
                        onChange={event => table.getColumn(search_column)?.setFilterValue(event.target.value)}
                        className="h-8 border-[1px] border-primary p-4  max-w-[250px]"
                    />
                )}
                {filters.map(
                    filter =>
                        table.getColumn(filter.column_name) && (
                            <DataTableFacetedFilter
                                key={String(filter.column_name)}
                                column={table.getColumn(filter.column_name)}
                                title={filter.title}
                                options={filter.options}
                            />
                        )
                )}
                {/* {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={roles}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )} */}
                {isFiltered && (
                    <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">
                        Reset
                        <FaCircleXmark className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    );
}
