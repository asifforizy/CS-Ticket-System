import React, { use } from 'react';
import Ticket from './ticket';
import TaskStatus from './TaskStatus';

const Tickets = ({ promiseData }) => {
    const ticketsData = use(promiseData);
    return (
        <div className='mt-20 w-11/12 mx-auto'>
            <h1 className='text-2xl font-semibold mb-5'>Customer Tickets</h1>
            <div className='flex gap-5'>
                <div className='grid grid-cols-2 gap-5 w-9/12'>
                    {
                        ticketsData.map(data => <Ticket data={data}></Ticket>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tickets;