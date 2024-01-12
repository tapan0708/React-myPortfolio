
function ToggleButton(props) {
    return (
        <div>
            <button onClick={() => props.setOpen(prev => !prev)} style={{ zIndex: 1 }}>
                <svg width="27" height="27" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.5 3H4.5C3.673 3 3 3.673 3 4.5V5.705C3 6.532 3.673 7.205 4.5 7.205H28.5C29.327 7.205 30 6.532 30 5.705V4.5C30 3.673 29.327 3 28.5 3Z" fill="#5046E5" />
                    <path d="M28.5 13.897H4.5C3.673 13.897 3 14.57 3 15.397V16.602C3 17.429 3.673 18.102 4.5 18.102H28.5C29.327 18.102 30 17.429 30 16.602V15.397C30 14.57 29.327 13.897 28.5 13.897Z" fill="#5046E5" />
                    <path d="M28.5 24.795H4.5C3.673 24.795 3 25.468 3 26.295V27.5C3 28.327 3.673 29 4.5 29H28.5C29.327 29 30 28.327 30 27.5V26.295C30 25.468 29.327 24.795 28.5 24.795Z" fill="#5046E5" />
                </svg>
            </button>
        </div>
    )
}

export default ToggleButton