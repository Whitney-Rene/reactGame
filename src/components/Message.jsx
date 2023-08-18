//creates function
function Message (props) {

    return (
        <>
            {/* populates screen with message depending on user input */}
            <p className="messToUser">{props.message}</p>
        </>
    );

}

//export the file
export default Message;