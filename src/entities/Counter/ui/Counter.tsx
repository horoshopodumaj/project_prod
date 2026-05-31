import { useTranslation } from "react-i18next";
import { Button } from "@/shared";
import { useCounterActions } from "../model/slice/counterSlice";
import { userCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
    const counterValue = userCounterValue();
    const {decrement, increment} = useCounterActions();

    const {t} = useTranslation();

    const handleIncrement = () => {
        increment()
    }

    const handleDecrement = () => {
        decrement()
    }

    return (
        <div >
            <h1 data-testid='value-title'>{counterValue}</h1>
            <Button 
                onClick={handleIncrement}
                data-testid='increment-btn'
            >{t('увеличить')}</Button>
            <Button 
                onClick={handleDecrement}
                data-testid='decrement-btn'
            >{t('уменьшить')}</Button>
        </div>
    );
}