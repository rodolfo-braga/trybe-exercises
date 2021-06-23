let chessPiece = "King";

switch (chessPiece.toLowerCase()){
    case "pawn":
        console.log("vertical")
        break;
    case "bishop":
        console.log("diagonals")
        break
    case "knight":
        console.log("L-shape")
        break;
    case "rook":
        console.log("vertical and horizontal")
        break
    case "queen":
        console.log("any direction")
        break;
    case "king":
        console.log("any direction")
        break
    default:
        console.log("Error: invalid piece")
}