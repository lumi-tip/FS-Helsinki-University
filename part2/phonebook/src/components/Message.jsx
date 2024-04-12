const Message = ({ success, error, message }) => {

    return(
        <div className={success ? 'successMsg' : 'errorMsg'}>
            {message}
        </div>
    )
}

export default Message