import React from 'react'
import PropTypes from 'prop-types'


<<<<<<< HEAD
export default function Task({ task: { id,title, state}, onArchiveTask, onPinTask, onUnpinTask, canPin}){
=======
export default function Task({ task: { id, title, state}, onArchiveTask, onPinTask, onUnpinTask,PinTask,ArchiveTask}){
    if(PinTask) {
        state = 'TASK_PINNED'
    }
    if(ArchiveTask) {
        state = 'TASK_ARCHIVED'
    }
>>>>>>> b2b1fd0930a4674bd8992a277033c174cb733d13
    return (
        <div className={`list-item ${state}`}>
            <label className='checkbox'>
                {state === 'TASK_ARCHIVED' && ( 

                    <input 
                        type='checkbox'
                        defaultChecked={true}
                        disabled={ true }
                        name='checked'
                    />
                )}
                {state !== 'TASK_ARCHIVED' && ( 

                    <input 
                        type='checkbox'
                        defaultChecked={false}
                        disabled={ true }
                        name='checked'
                    />
                )}
                <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
            </label>
            <div className='title'>
                <input type='text' value={title} readOnly={true} placeholder="Input title" style={{ textOverflow: 'ellipsis' }} />
            </div>
            <div className='actions' onClick={event => event.stopPropagation()}>
                {state !== 'TASK_PINNED' && state !== 'TASK_ARCHIVED' && canPin === true &&
                (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={() => onPinTask(id)}>
                        <span className={`icon-star`}/>
                    </a>
                )}
                {state === 'TASK_PINNED' && state !== 'TASK_ARCHIVED' && canPin === true &&
                (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={() => onUnpinTask(id)}>
                        <span className={`icon-star`}/>
                    </a>
                )}

            </div>
        </div>
    )
}

Task.propTypes = {
    /** Composition of the task */
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),

    /** Events to change the task to archived/pinned */
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
}