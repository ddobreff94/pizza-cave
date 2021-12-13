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
            </div>

            <div className="popup__actions">
                <button onClick={deleteHandler}>
                    Delete
                </button>

                <button onClick={deleteClickHandler}>
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default ConfirmPopup;