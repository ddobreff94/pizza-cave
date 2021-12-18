import './ConfirmPopup.scss'

const ConfirmPopup = ({
    deleteHandler,
    deleteClickHandler,
}) => {
    return(
        <div className="popup-confirm">
            <div className="popup__inner">
                <h4>
                    Do you really wish to delete this item?
                </h4>

                <div className="popup__actions">
                    <button className='btn btn--red' onClick={deleteHandler}>
                        Delete
                    </button>

                    <button className='btn btn--blue' onClick={deleteClickHandler}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmPopup;