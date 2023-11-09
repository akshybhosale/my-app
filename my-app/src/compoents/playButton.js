import './playButton.css';

function PlayButton({message,children, onClick}) {
function handleClick() {
   onClick();
}

return(
<button onClick={handleClick}>{children}</button>

);

}

export default PlayButton;