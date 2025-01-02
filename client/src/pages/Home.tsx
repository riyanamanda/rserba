import AppLayout from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { decrement, increment, reset } from '@/state/counter/counterSlice';
import { RootState } from '@/state/store';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <AppLayout title='Home'>
            <div className='flex flex-col items-center justify-center h-full mt-32'>
                <div className='font-extrabold flex flex-col items-center gap-5'>
                    <p>Counter</p>
                    <span className='text-primary text-3xl'>{count}</span>
                </div>
                <div className='flex items-center gap-10 mt-10'>
                    <Button variant={'ghost'} onClick={() => dispatch(decrement())}>
                        Decrement
                    </Button>

                    <Button variant={'ghost'} onClick={() => dispatch(reset())}>
                        Reset
                    </Button>

                    <Button variant={'ghost'} onClick={() => dispatch(increment())}>
                        Increment
                    </Button>
                </div>
            </div>
        </AppLayout>
    );
}

export default Home;
