'use client'
import Image from "next/image";

type NavigationProps = {
    onPreviousClick: () => void;
    isPreviousVisible: boolean;
    isNextVisible: boolean;
    onNextClick: () => void;
    isActive: boolean;
    onSubmitClick: () => void;
}

const Navigation = ({isActive, isPreviousVisible, isNextVisible, onPreviousClick, onNextClick, onSubmitClick}: NavigationProps) => {
    return (<div className={"flex flex-row m-2" + (isPreviousVisible ? ' justify-between' : ' justify-end')}>
        {isPreviousVisible && <button type="button"
                                      disabled={!isActive}
                                      onClick={onPreviousClick}
                                      className="text-white bg-amber-400 h-10 w-10 hover:bg-amber-300 focus:ring-4 focus:outline-none focus:ring-amber-200 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-amber-400 dark:hover:bg-amber-300 dark:focus:ring-amber-200">
            <Image className="rotate-180" src="arrow.svg" alt="arrow-back" width={24} height={24} priority={false}/>
            <span className="sr-only">Previous page</span>
        </button>}
        {isNextVisible && <button type="button"
                                  disabled={!isActive}
                                  onClick={onNextClick}
                                  className="text-white bg-blue-800 h-10 w-10 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800">
            <Image src="arrow.svg" alt="arrow-next" width={24} height={24} priority={false}/>
            <span className="sr-only">Next page</span>
        </button>}
        {!isNextVisible && <button type="button"
                                  disabled={!isActive}
                                  onClick={onSubmitClick}
                                  className="text-white bg-blue-800 h-10 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800">
            Submit
        </button>}
    </div>);
}

export default Navigation;