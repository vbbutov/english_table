import { Inter } from 'next/font/google'
import TableBody from './table/TableBody'
import AddWord from './form/AddWord'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const headerForTable = ['Слово', "Перевод"]
  return (
    <div>
      <h1>Привет мир</h1>
      <TableBody header={headerForTable}></TableBody>
      <AddWord></AddWord>
    </div>
  )
}
