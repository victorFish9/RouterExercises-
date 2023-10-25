import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()
    console.log(error)
    return (<div>
        <h2>error</h2>
        <p>{error.data}</p>
    </div>)
}