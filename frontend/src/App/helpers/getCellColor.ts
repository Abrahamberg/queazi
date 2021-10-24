export default function getCellColors(index: number) {
    return cellColor[index % cellColor.length]
}


const cellColor = [
    "bg-DarkOliveGreen text-white",
    "bg-Chocolate text-white",
    "bg-DarkCyan text-white",
    "bg-BlueViolet text-white",
    "bg-HotPink text-white",
    "bg-Indigo text-white",
    "bg-LightSkyBlue text-white",
    "bg-Orange text-white",
    "bg-Teal text-white"]
