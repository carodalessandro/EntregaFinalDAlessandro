import { Hearts } from "react-loader-spinner";


export const Loading = () => {
    return(
        <Hearts
            height="200"
            width="200"
            color="pink"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
        />
    )
}