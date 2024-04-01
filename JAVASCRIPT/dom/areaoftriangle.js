function getArea()
{
    const breadth=document.getElementById("breadth").value
    const height=document.getElementById("height").value
    var bd=breadth * height;
    alert(`area of triangle is ${bd/2}`)
}