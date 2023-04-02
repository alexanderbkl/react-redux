import Display from './components/Display';
import Button from './components/Button';



const UseReducer = () => {

    return (
        <div>
            <h1>UseReducer</h1>
            <Display />
            <div>
                <Button type='INCREMENT' label='+'/>
                <Button type='DECREMENT' label='-'/>
                <Button type='ZERO' label='reset'/>
            </div>
        </div>
    )
}

export default UseReducer