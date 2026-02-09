import React from 'react';

const Ticket = ({data}) => {
    console.log(data);
    return (
        <div>
            
            <div>
                <div className='border rounded-xl p-10'>
                    <div className='flex justify-between items-center'>
                        <h1>{data.title}</h1>
                        <button className='p-0.5  px-3 bg-emerald-400  rounded-full'>{data.status}</button>
                    </div>
                    <p>{data.description}</p>

                    <div className='flex justify-between'>
                        <div className='flex gap-5'>
                            <h1>{data.id}</h1>
                            <h1>{data.priority}</h1>
                        </div>
                        <div className='flex gap-5'>
                            <h1>{data.customer}</h1>
                            <h1>{data.createdAt}</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Ticket;