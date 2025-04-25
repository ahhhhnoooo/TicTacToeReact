export function TicTacToeSpace({value, index, onClick}: {value: string, index: number, onClick: (index: number) => void}) {
    let img;
    if (value !== '') {
        const src: string = "img/" + value + ".svg";
        img = (<img src={src} alt={value} />)
    }
    return (
        <div className="tictactoe-space" onClick={() => onClick(index)}>
            {img}
        </div>
    );
}