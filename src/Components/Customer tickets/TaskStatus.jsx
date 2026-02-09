import React from 'react';

const TaskStatus = ({ticketsData}) => {
    return (
        <div>
             <div className='border w-3/12'> <h1 className='text-2xl'>Task Status</h1>
                <div className='border'>
                    <h1>{ticketsData.title}</h1>
                    
                </div>

                </div>
        </div>
    );
};

export default TaskStatus;