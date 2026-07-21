export const allRooms = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`)
    const data = await res.json();
    return data;
}

export const singleRoom = async({id})=>{
    // console.log(id, 'from server')
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`)
    const data = await res.json();
    // console.log(data,'from server')
    return data;
}

