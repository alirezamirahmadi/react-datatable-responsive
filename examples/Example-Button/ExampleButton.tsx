import React, { useRef } from 'react';
import DataTable from '../../src/ReactDataTable/ReactDataTable';
import { ProductsData } from '../ExampleData/ExampleData';
import { ColumnType } from '../../src/Type/Type';


export default function Example(): React.JSX.Element {
  const stock = useRef<string>('');

  const editProduct = (value: any) => {
    console.log('New vlaue: ', stock.current, ' Old value ', value.stock);
  }
  const onChangeStock = (event: React.ChangeEvent<HTMLInputElement>) => {
    stock.current = event.target.value;
  }

  const columns: ColumnType[] = [
    { field: { title: 'title' }, label: 'Title', options: { sort: true } },
    { field: { title: 'stock', eventHandlerRow: onChangeStock }, label: 'Stock', kind: 'input/number' , options: { sort: true } },
    { field: { title: 'category' }, label: 'Category', },
    { field: { title: 'Edit', eventHandlerRow: editProduct }, label: 'Modify', kind: 'button' },
  ];


  return (
    <DataTable direction='ltr' rows={ProductsData} columns={columns} />
  )
}