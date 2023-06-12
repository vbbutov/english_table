

export default function TableBody(props:string[]) {
    console.log('props', props.header)
    return (
        <table>
            <tbody>
                <tr>
                    <TableHeader header={props.header}></TableHeader>
                </tr>
            </tbody>
        </table>
    )
}
function TableHeader(props: string[]) {
    console.log('header', props.header);
     return props.header.map((e) => 
         <th>{e}</th>
     )
    // return (
    //     // 
    //     <h1>!!!</h1>
    // )
}
function TableRow() {
    return (
        <tr>
            <TableCell></TableCell>
        </tr>
    )
}

function TableCell() {
    return (
        <td></td>
    )
}