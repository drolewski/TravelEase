type ResultProps = {
    result?: string;
}

const Result = ({result}: ResultProps) => {
    return <>
        <span style={{whiteSpace: "pre-line"}}>{result}</span>
    </>
}

export default Result;
