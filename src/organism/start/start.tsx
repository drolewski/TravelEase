import Button, {Color} from "@/atoms/button/button";

type StartProps = {
    onStartClick: () => void;
}

const Start = ({onStartClick}: StartProps) => {
    return (
        <div className="flex flex-col">
            <Button label={'Start'} onClick={onStartClick} color={Color.AMBER}/>
        </div>
    );
}

export default Start;
