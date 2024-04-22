export enum Color {
    AMBER = 'amber'
}

type ButtonProps = {
    label: string;
    onClick: () => void;
    color: Color
}

const Button = ({label, onClick, color}: ButtonProps) => {

    const getColor = () => {
        if (color === Color.AMBER) {
            return "bg-amber-400 hover:bg-amber-300 focus:ring-amber-200 dark:bg-amber-400 dark:hover:bg-amber-300 dark:focus:ring-amber-200 "
        }
        return "bg-amber-400 hover:bg-amber-300 focus:ring-amber-200 dark:bg-amber-400 dark:hover:bg-amber-300 dark:focus:ring-amber-200 "
    }

    return <button type="button"
                   onClick={onClick}
                   className={"text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center " + getColor(color)}>
        {label}
    </button>
}

export default Button;
